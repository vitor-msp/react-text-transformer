import React, { Component } from 'react';
import css from './style.module.css';

export default class Input extends Component {
  alteraEntrada = (event) => {
    const textoEntrada = event.target.value;
    this.props.entrada(textoEntrada);
  };

  render() {
    const { legenda } = this.props;
    return (
      <div className={css.divInput}>
        <label>
          {legenda} <br />
          <input
            type="text"
            onChange={this.alteraEntrada}
            className={css.input}
            autoFocus
          />
        </label>
      </div>
    );
  }
}
