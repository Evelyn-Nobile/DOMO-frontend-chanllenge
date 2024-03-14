import {
  TwitterLogo,
  DribbbleLogo,
  InstagramLogo,
  FacebookLogo,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./Footer.module.css";

const info = [
  {
    personalName: "Evelyn Nobile",
    phone: "https://wa.me/+541154046884",
    email: "nobileevelyn1@gmail.com",
    linkedIn: "https://www.linkedin.com/in/evelyn-nobile/",
    github: "https://github.com/Evelyn-Nobile",
  },
];

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer>
        <div className={styles.info}>
          <p className={styles.title}>compleet labs</p>
          <p className={styles.description}>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper
            nulla.
          </p>
          <div className={styles.socials}>
            <figure>
              <TwitterLogo size={32} weight="fill" />
            </figure>

            <figure>
              <DribbbleLogo size={32}  />
            </figure>
            <figure>
              <FacebookLogo size={32} weight="fill" />
            </figure>
            <figure>
              <InstagramLogo size={32} />
            </figure>
          </div>
        </div>
        <div className={styles.links}>
          <span>
            <p>Sitemap</p>
            <ul>
              <li >
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#technology">Technology</a>
              </li>
              <li >
                <a href="#services">Services</a>
              </li>
              <li >
                <a href="#about">About</a>
              </li>
            </ul>
          </span>

          <span className="disabled">
            <p>Case studies</p>
            <ul>
              <li className={styles.disabled}>Swiss Airlines</li>
              <li className={styles.disabled}>Google</li>
              <li className={styles.disabled}>Apple</li>
              <li className={styles.disabled}>Nike</li>
            </ul>
          </span>

          <span>
            <p>Contact me</p>
            <ul>
              <li>
                <a href={`mailto:${info[0].email}`}>Email</a>
              </li>
              <li>
                <a href={info[0].phone} target="_blank" rel= "noopener noreferrer">
                  Whatsapp
                </a>
              </li>
              <li>
                <a href={info[0].linkedIn} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={info[0].github}> Github</a>
              </li>
            </ul>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
