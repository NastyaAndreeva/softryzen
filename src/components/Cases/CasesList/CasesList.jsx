import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import { useEffect } from "react";
import case1 from "../../../images/cases/cases1.jpg";
import case2 from "../../../images/cases/cases2.jpg";
import case3 from "../../../images/cases/cases3.jpg";
import case4 from "../../../images/cases/cases4.jpg";
import case5 from "../../../images/cases/cases5.jpg";
import case6 from "../../../images/cases/cases6.jpg";
import styles from "./CasesList.module.css";

const CasesList = () => {
  useEffect(() => {
    initLightboxJS("8B02-45E7-015A-525E", "individual");
  });
  return (
    <>
      <SlideshowLightbox className={styles.cases__list}>
        <img src={case1} alt="Case" className={styles.cases__img} />
        <img src={case2} alt="Case" className={styles.cases__img} />
        <img src={case3} alt="Case" className={styles.cases__img} />
        <img src={case4} alt="Case" className={styles.cases__img} />
        <img src={case5} alt="Case" className={styles.cases__img} />
        <img src={case6} alt="Case" className={styles.cases__img} />
      </SlideshowLightbox>
    </>
  );
};

export default CasesList;
