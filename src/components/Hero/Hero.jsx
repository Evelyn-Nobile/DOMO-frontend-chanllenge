import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container} id="home">
      <section className={styles.header}>
        <h2>We build beautiful and reliable web solutions</h2>
        <p>
          We strongly believe that communication, trust and transparency are the
          essential elements of successful business relationship. Ready for the
          journey?
        </p>
      </section>
      <div className={styles.buttons}>
        <button className={styles.learn}>Learn more</button>
        <button className={styles.projects}>
          Our projects <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
