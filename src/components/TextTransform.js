import React, { Component } from 'react';
import Input from './Input';
import Output from './Output';
import {transforms} from './transforms.js';
import css from './style.module.css';

export default class TextTransform extends Component {
  constructor() {
    super();
    this.state = {
      entrada: '',
    };
  }

  atualizaTexto = (texto) => {
    this.setState({
      entrada: texto,
    });
  };

  render() {
    const { entrada } = this.state;
    return (
      <div className={css.container}>
        <h1 style={{ textAlign: 'center' }}>React-Text-Transformer</h1>
        <Input
          entrada={this.atualizaTexto}
          legenda={'Digite um texto qualquer:'}
        />
        <h2 style={{ textAlign: 'center', fontWeight: 'lighter' }}>
          Transformações
        </h2>
        {transforms.map(({ id, transform, nome }) => {
          const result = transform(entrada);
          return <Output key={id} id={id} nome={nome} result={result} />;
        })}
      </div>
    );
  }
}
