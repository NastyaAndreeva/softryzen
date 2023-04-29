import NavigationItem from "./NavigationItem";

const NavigationList = ({ styles }) => {
  const navArray = ["Home", "About", "Cases", "Blog", "Contact"];
  return (
    <ul className={styles.navigation}>
      {navArray.map((el) => (
        <NavigationItem styles={styles} text={el} key={el} />
      ))}
    </ul>
  );
};

export default NavigationList;
