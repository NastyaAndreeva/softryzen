import styles from "./Cases.module.css";
import CasesList from "./CasesList";

const Cases = () => {
  return (
    <div id="cases">
      <div className={styles.cases__right}>
        <p>This is what we do</p>
        <h2 className={styles.cases__title}>Business Cases</h2>
        <p className={styles.cases__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
        <CasesList />
      </div>
    </div>
  );
};

export default Cases;
