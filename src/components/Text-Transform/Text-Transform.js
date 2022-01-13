import React, { Component } from 'react';
import Input from './Input';
import Output from './Output';
import { v4 as uuid } from 'uuid';
import css from './style.module.css';

const transforms = [
  {
    id: uuid(),
    nome: 'Texto Invertido',
    transform: (texto) => {
      return texto.split('').reverse().join('');
    },
  },
  {
    id: uuid(),
    nome: 'CSV',
    transform: (texto) => {
      return `"${texto.split(' ').join('";"')}"`;
    },
  },
];

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
        <h1 style={{ textAlign: 'center' }}>react-text-transformer</h1>
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
