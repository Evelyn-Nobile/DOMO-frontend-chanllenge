/* eslint-disable react/no-unescaped-entities */
import {
  FileText,
  DesktopTower,
  NotePencil,
} from "@phosphor-icons/react/dist/ssr";
import LearnMoreButton from "../LearnMoreButton/LearnMoreButton";
import styles from "./ServicesCards.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 500,
  once: true,
  easing: "ease",
});

const ServicesCards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card} data-aos="fade-up">
        <figure>
          <FileText size={32} />
        </figure>
        <h3>Business & Product Concept</h3>
        <p>
          Analyse business and product concepts at Start-up Worksops or Ongoing
          Projects' Audits and prepare a viable and sensible product roadmap for
          achieving a perfect market fit.
        </p>
        <LearnMoreButton />
      </div>

      <div className={styles.card} data-aos="fade-up" data-aos-delay="50">
        <figure>
          <DesktopTower size={32} />
        </figure>
        <h3>Web & Mobile Development </h3>
        <p>
          Plan, develop and test high-quality web- applications using AngularJS,
          NodeJS, JavaScript, TypeScript, HTML5 and SASS/CCS3 frameworks and
          native mobile languages.
        </p>
        <LearnMoreButton />
      </div>

      <div className={styles.card} data-aos="fade-up" data-aos-delay="100">
        <figure>
          <NotePencil size={32} />
        </figure>
        <h3>Ux & Ui Desgin </h3>
        <p>
          Sketch information architecture and simple mock-ups, convert them into
          clickable prototypes and finish with usable interface designs to
          deliver a good and reliable user experience.
        </p>
        <LearnMoreButton />
      </div>
    </div>
  );
};

export default ServicesCards;
