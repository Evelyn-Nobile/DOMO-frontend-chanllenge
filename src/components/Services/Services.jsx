import ServicesCards from "../ServicesCards/ServicesCards";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div className={styles.container}>
      <h2>Our Services</h2>
      <p className={styles.paragraphInfo}>
        We feel very strong abour our skills when it comes to planning,
        designing and coding applications. Here is what we love to do!
      </p>
      <ServicesCards />
    </div>
  );
};

export default Services;
