import styles from "./Blog.module.css";
import blog from "../../images/home/blog.jpg";
import blogX2 from "../../images/home/blog@2x.jpg";
import blogWebp from "../../images/home/blog.webp";
import blogWebpX2 from "../../images/home/blog@2x.webp";

const Blog = () => {
  return (
    <div className={styles.blog__block} id="blog">
      <div className={styles.blog__left}>
        <p>April 16 2020</p>
        <h2 className={styles.blog__title}>Blog Post One</h2>
        <p className={styles.blog__description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <a href="#blog" className={styles.blog__btn}>
          Read Our Blog
        </a>
      </div>
      <picture className={styles.blog__right}>
        <source srcSet={`${blogWebp} 1x, ${blogWebpX2} 2x`} type="image/webp" />
        <source srcSet={`${blog} 1x, ${blogX2} 2x`} type="image/jpeg" />
        <img src={blog} alt="blog" />
      </picture>
    </div>
  );
};

export default Blog;
