import { ReactComponent as Facebook } from "../../../images/contacts/fb.svg";
import { ReactComponent as Twitter } from "../../../images/contacts/twitter.svg";
import { ReactComponent as Linkedin } from "../../../images/contacts/in.svg";
import { ReactComponent as Youtube } from "../../../images/contacts/youtube.svg";
import styles from "./ContactList.module.css";

const ContactList = () => {
  return (
    <ul className={styles.contact__list}>
      <li>
        <a href="#home">
          <Facebook className={styles.contact__link} />
        </a>
      </li>
      <li>
        <a href="#home">
          <Twitter className={styles.contact__link} />
        </a>
      </li>
      <li>
        <a href="#home">
          <Youtube className={styles.contact__link} />
        </a>
      </li>
      <li>
        <a href="#home">
          <Linkedin className={styles.contact__link} />
        </a>
      </li>
    </ul>
  );
};

export default ContactList;
