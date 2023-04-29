import member1 from "../../../images/team/person1.jpg";
import member1X2 from "../../../images/team/person1@2x.jpg";
import member1Webp from "../../../images/team/person1.webp";
import member1WebpX2 from "../../../images/team/person1@2x.webp";
import member2 from "../../../images/team/person2.jpg";
import member2X2 from "../../../images/team/person2@2x.jpg";
import member2Webp from "../../../images/team/person2.webp";
import member2WebpX2 from "../../../images/team/person2@2x.webp";
import member3 from "../../../images/team/person3.jpg";
import member3X2 from "../../../images/team/person3@2x.jpg";
import member3Webp from "../../../images/team/person3.webp";
import member3WebpX2 from "../../../images/team/person3@2x.webp";
import TeamMember from "./TeamMember";
import styles from "./TeamList.module.css";

const TeamList = () => {
  const teamMembersArray = [
    {
      name: "John Doe",
      position: "President",
      images: {
        jpg: member1,
        jpgX2: member1X2,
        webp: member1Webp,
        webpX2: member1WebpX2,
      },
    },
    {
      name: "Jane Doe",
      position: "Vice President",
      images: {
        jpg: member2,
        jpgX2: member2X2,
        webp: member2Webp,
        webpX2: member2WebpX2,
      },
    },
    {
      name: "Steve Smith",
      position: "Marketing Head",
      images: {
        jpg: member3,
        jpgX2: member3X2,
        webp: member3Webp,
        webpX2: member3WebpX2,
      },
    },
  ];
  return (
    <ul className={styles.team__list}>
      {teamMembersArray.map(({ name, position, images }) => (
        <TeamMember
          name={name}
          position={position}
          images={images}
          key={name}
        />
      ))}
    </ul>
  );
};

export default TeamList;
