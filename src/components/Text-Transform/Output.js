import React, { Component } from 'react';
import css from './style.module.css';

export default class Output extends Component {
  render() {
    const { id, nome, result } = this.props;
    return (
      <div className={css.divInput}>
        <label>
          {nome}: <br />
          <input
            className={css.input}
            id={id}
            type="text"
            value={result}
            readOnly
          />
        </label>
      </div>
    );
  }
}
