import TeamList from "./TeamList";

import styles from "./Team.module.css";

const Team = () => {
  return (
    <div className={styles.team}>
      <p>Who we are</p>
      <h2 className={styles.team__title}>Our Professional Team</h2>
      <p className={styles.team__description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <TeamList />
    </div>
  );
};

export default Team;
