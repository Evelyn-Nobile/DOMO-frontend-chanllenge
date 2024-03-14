import style from "./Cards.module.css";

const Cards = () => {
  const URL =
    "https://res.cloudinary.com/empleosagil/image/upload/v1710394342/zytoznkk3zyskkht3pjm.webp";
  const content =
    "Maecenas sed diam eget risus varius blandit sit amet non magna.";

  return (
    <div className={style.container}>
      <div className={style.card}>
        <section>
          <span>
            <h3>Get in touch with us</h3>
            <p>{content}</p>
          </span>
          <button>Hire us</button>
        </section>
      </div>

      <div className={style.card}>
        <section>
          <span>
            <h3>Our Projects</h3>
            <p>{content}</p>
          </span>
          <button>See Projects</button>
        </section>
        <figure>
          <img src={URL} alt="cellphone" />
        </figure>
      </div>
    </div>
  );
};

export default Cards;
