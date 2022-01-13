import React, { Component } from "react";
import css from "./style.module.css";

export default class Output extends Component {
  render() {
    const { id, nome, result } = this.props;

    const copyToClip = (id) => {
      const input = document.getElementById(id);

      navigator.clipboard.writeText(input.value);
      input.classList.add(css.copied);

      setTimeout(() => {
        input.classList.remove(css.copied);
      }, 1000);
    };

    return (
      <div className={css.divInput}>
        <label>
          {nome}:<br />
          <input
            className={css.input}
            id={id}
            type="text"
            value={result}
            readOnly
          />
        </label>

        <img
          src="./copy-to-clip.png"
          alt="Copiar texto"
          width="25px"
          height="25px"
          style={{ cursor: "pointer" }}
          id={`${id}img`}
          onClick={(event) => {
            copyToClip(event.target.id.slice(0, -3));
          }}
        ></img>
      </div>
    );
  }
}
