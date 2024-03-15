import Html from "../../SVG/Html";
import Css from "../../SVG/Css";
import Sass from "../../SVG/Sass";
import NodeJs from "../../SVG/NodeJs";
import Angular from "../../SVG/Angular";
import Python from "../../SVG/Python";

import style from "./Technology.module.css";

const Technology = () => {
  return (
    <div className={`${style.container} ${"position-relative w-100" }`} id="technology">
      <section>
        <span>
          <h2>We use cutting edge technology</h2>
          <p>
            Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean
            lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae
            elit libero, a pharetra augue. Vestibulum id ligula porta felis
            euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum
            faucibus dolor auctor.
          </p>
        </span>
        <div className={style.technologies} >
          <figure>
            <Html />
          </figure>

          <figure>
            <Css />
          </figure>

          <figure>
            <Sass />
          </figure>

          <figure>
            <NodeJs />
          </figure>

          <figure>
            <Angular />
          </figure>

          <figure>
            <Python />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Technology;
