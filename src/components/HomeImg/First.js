import React from "react";
import classes from "./First.module.css";
import gsap from "gsap";

const First = () => {
  const hero = document.querySelector(["[data-hero]"]);
  const tl = gsap.timeline();

  tl.to(hero, {
    "--maskSize1": "20%",
    duration: 0.5,
    ease: "back.out(2)",
  }).to(hero, {
    "--maskSize2": "28%",
    "--maskSize3": "calc(28% + 0.1rem)",
    duration: 0.5,
    delay: 0.5,
    ease: "back.out(2)",
  });

  window.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);

    gsap.to(hero, {
      "--x": `${x}%`,
      "--y": `${y}%`,
      duration: 0.3,
      ease: "sine-out",
    });
  });

  return (
    <div className={classes.Wrapper}>
      <div className={classes.Hero}>
        <h1 className={classes.HeroHeading}>WELCOME TO DOV ROYAL'S PORTFOLIO</h1>
      </div>

      <div
        className={`${classes.Hero} ${classes.HeroSecondary}`}
        aria-hidden="true"
        data-hero
      >
        <p className={classes.HeroHeading}>WELCOME TO DOV ROYAL'S PORTFOLIO</p>
      </div>
    </div>
  );
};

export default First;
