import styles from "./Contact.module.css";

import ContactList from "./ContactList";

const Contact = () => {
  return (
    <div className={styles.contact__box} id="contact">
      <ContactList />
      <p>Copyright © 2021 - FinanceLedger</p>
    </div>
  );
};

export default Contact;
