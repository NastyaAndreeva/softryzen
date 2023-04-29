import ContactList from "../../../Contact/ContactList";
import styles from "./TeamMember.module.css";

const TeamMember = ({ images, name, position }) => {
  const { jpg, jpgX2, webp, webpX2 } = images;
  return (
    <li className={styles.member__item}>
      <div className={styles.member__info}>
        <picture>
          <source srcSet={`${webp} 1x, ${webpX2} 2x`} type="image/webp" />
          <source srcSet={`${jpg} 1x, ${jpgX2} 2x`} type="image/jpeg" />
          <img src={jpg} alt="Team member" className={styles.member__img} />
        </picture>
        <p className={styles.member__links}>
          <ContactList />
        </p>
      </div>

      <p className={styles.member__name}>{name}</p>
      <p className={styles.member__position}>{position}</p>
    </li>
  );
};

export default TeamMember;
