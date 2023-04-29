import styles from "./Home.module.css";
import NavigationList from "./NavigationList";
import logo from "../../images/logo.svg";
import moreArrow from "../../images/more.svg";
import useScrollDirection from "../../helpers";

const Home = () => {
  const scrollDirection = useScrollDirection();
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.header} id="home">
          <nav
            className={styles.header__nav}
            style={{
              position: scrollDirection === "down" ? "fixed" : "relative",
              opacity: scrollDirection === "down" ? 0.8 : 0,
              width: "100%",
            }}
          >
            <a href="#home" className={styles.logo}>
              <img src={logo} alt="logo" />
              <span className={styles.logo__span}>Finance</span>Ledger
            </a>
            <NavigationList styles={styles} />
          </nav>
          <div className={styles.home__content}>
            <p className={styles.home__heading}>The Sky Is The Limit</p>
            <p className={styles.home__text}>
              We provide world class financial assistance
            </p>
            <button className={styles.button__more}>
              <img src={moreArrow} alt="More btn" />
              Read more
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
