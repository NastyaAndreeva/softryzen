import { Link } from "react-scroll";

const NavigationItem = ({ styles, text }) => {
  return (
    <li className={styles.navigation__item}>
      <Link
        to={text.toLowerCase()}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={styles.navigation__link}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavigationItem;
