import { db } from "../firebase/firebaseConfig";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  serverTimestamp,
  count,
} from "firebase/firestore";
import emailjs from "@emailjs/browser";

const env = import.meta.env;

export const parseUserAgent = (userAgent) => {
  // Browser detection
  const getBrowser = () => {
    if (userAgent.includes("Firefox")) return "Firefox";
    if (userAgent.includes("Chrome")) return "Chrome";
    if (userAgent.includes("Safari")) return "Safari";
    if (userAgent.includes("Edge")) return "Edge";
    if (userAgent.includes("MSIE") || userAgent.includes("Trident/"))
      return "Internet Explorer";
    return "Unknown";
  };

  // OS detection
  const getOS = () => {
    if (userAgent.includes("Windows")) return "Windows";
    if (userAgent.includes("Mac")) return "MacOS";
    if (userAgent.includes("Linux")) return "Linux";
    if (userAgent.includes("Android")) return "Android";
    if (userAgent.includes("iPhone") || userAgent.includes("iPad"))
      return "iOS";
    return "Unknown";
  };

  // Device type detection
  const getDevice = () => {
    if (userAgent.includes("Mobile")) return "Mobile";
    if (userAgent.includes("Tablet")) return "Tablet";
    return "Desktop";
  };

  return {
    browser: getBrowser(),
    os: getOS(),
    device: getDevice(),
  };
};

// Function to get IP and location info
export const fetchIPInfo = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();

    // Get location info using IP
    const geoResponse = await fetch(`https://ipapi.co/${data.ip}/json/`);
    const geoData = await geoResponse.json();

    return {
      ip: data.ip,
      country: geoData.country,
      region: geoData.region,
      postal: geoData.postal,
      netwok: geoData.network,
      org: geoData.org,
      countryName: geoData.country_name,
      city: geoData.city,
    };
  } catch (error) {
    console.error("Error fetching IP info:", error);
    return {
      ip: "Not available",
      country: "Not available",
      city: "Not available",
    };
  }
};

export const detectClientInfo = async () => {
  const userAgent = navigator.userAgent;

  const parsedUA = parseUserAgent(userAgent);
  const ipInfo = await fetchIPInfo();

  const result = {
    userAgent: userAgent,
    browser: parsedUA.browser,
    os: parsedUA.os,
    device: parsedUA.device,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    language: navigator.language,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    ...ipInfo,
  };

  return result;
};

export const storeIpDetails = async (data) => {
  try {
    const date = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format
    const docId = `${data.ip}_${data.device}_${date}`.replace(
      /[^a-zA-Z0-9]/g,
      "_"
    ); // Unique identifier

    const recordRef = doc(db, "visitorLogs", docId);
    const recordSnap = await getDoc(recordRef);

    if (!recordSnap.exists()) {
      // New visitor log entry
      await setDoc(recordRef, {
        ...data,
        count: 1,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } else {
      // Existing entry - update count
      await updateDoc(recordRef, {
        count: increment(1),
        updatedAt: serverTimestamp(),
      });
    }
  } catch (error) {
    console.error("Error storing IP details:", error);
  }
};

//  Send email using EmailJS in the browser
export const handleEmailjs = async (values) => {
  try {
    const emailParams = {
      from_name: values.name,
      from_email: values.email,
      from_mobile: values.mobile,
      message: values.message,
    };

    await emailjs.send(
      env.VITE_emailjs_serviceId,
      env.VITE_emailjs_template_Id,
      emailParams,
      env.VITE_emailjs_publicKey
    );

    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

export const handleContactFormSubmit = async (values) => {
  try {
    const date = new Date().toISOString().split("T")[0];
    const docId = `${values.email}_${date}`.replace(/[^a-zA-Z0-9]/g, "_");
    // Firestore collection reference
    const userCollectionRef = doc(db, "contacted-user", docId);

    // Fetch client info
    const clientInfo = await detectClientInfo();
    const user = await getDoc(userCollectionRef);

    const valuesToInsertInDB = {
      name: values.name,
      email: values.email,
      mobile: values.mobile,
      message: values.message,
      ip: clientInfo.ip,
      country: clientInfo.country,
      city: clientInfo.city,
      userAgent: clientInfo.userAgent,
      postal: clientInfo.postal,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      emailSent: false,
    };

    if (!user.exists()) {
      await setDoc(userCollectionRef, { ...valuesToInsertInDB, count: 1 });
    } else {
      await updateDoc(userCollectionRef, {
        ...valuesToInsertInDB,
        count: increment(1),
      });
    }

    // Optionally, send an email (if needed)
    const emailSent = await handleEmailjs(values);
    if (emailSent) {
      await updateDoc(userCollectionRef, { emailSent: true });
    } else {
      await updateDoc(userCollectionRef, { emailSent: false });
    }

    return true;
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
