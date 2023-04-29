import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./RequestForm.module.css";
import team from "../../images/home/contact.jpg";
import teamX2 from "../../images/home/contact@2x.jpg";
import teamWebp from "../../images/home/contact.webp";
import teamWebpX2 from "../../images/home/contact@2x.webp";
import { ReactComponent as Warning } from "../../images/form/worning.svg";

const RequestForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().max(16).required("This is a required field"),
    email: Yup.string()
      .trim()
      .email(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
      .required("This is a required field"),
  });
  return (
    <div className={styles.requestform__section}>
      <picture>
        <source srcSet={`${teamWebp} 1x, ${teamWebpX2} 2x`} type="image/webp" />
        <source srcSet={`${team} 1x, ${teamX2} 2x`} type="image/jpeg" />
        <img src={team} alt="team" className={styles.requestform__img} />
      </picture>
      <div className={styles.requestform__block}>
        <h2 className={styles.request__title}>Request Callback</h2>
        <Formik
          initialValues={{ name: "", email: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("values: ", values);
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ errors, isSubmitting }) => (
            <Form className={styles.requestform}>
              <Field
                type="text"
                name="name"
                placeholder="Enter your name"
                className={styles.request__field}
              />
              <div className={styles.error__block}>
                {errors.name ? <Warning /> : null}
                <ErrorMessage name="name" component="div" />
              </div>

              <Field
                type="email"
                name="email"
                placeholder="Enter email*"
                className={styles.request__field}
              />
              <div className={styles.error__block}>
                {errors.email ? <Warning /> : null}
                <ErrorMessage name="email" component="div" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.button}
              >
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RequestForm;
