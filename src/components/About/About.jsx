import styles from "./About.module.css";
import people from "../../images/home/people.jpg";
import peopleWepb from "../../images/home/people.webp";
import peopleX2 from "../../images/home/people@2x.jpg";
import peopleWepbX2 from "../../images/home/people@2x.webp";

const About = () => {
  return (
    <div className={styles.about__block} id="about">
      <picture className={styles.about__left}>
        <source
          srcSet={`${peopleWepb} 1x, ${peopleWepbX2} 2x`}
          type="image/webp"
        />
        <source srcSet={`${people} 1x, ${peopleX2} 2x`} type="image/jpeg" />
        <img src={people} alt="people" />
      </picture>

      <div className={styles.about__right}>
        <p>What you are looking for</p>
        <h2 className={styles.about__title}>We provide bespoke solutions</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <a href="#cases" className={styles.about__btn}>
          Read more
        </a>
      </div>
    </div>
  );
};

export default About;
