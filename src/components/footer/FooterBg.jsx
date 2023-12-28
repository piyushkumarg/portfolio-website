import classes from "./FooterBg.module.css";

const FooterBg = () => {
  return (
    <div className={classes.top}>
      <div className={classes.background}>
        <div className={classes.background__one}></div>
        <div className={classes.background__two}></div>
      </div>
    </div>
  );
};

export default FooterBg;
