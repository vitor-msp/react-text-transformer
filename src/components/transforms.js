import { v4 as uuid } from "uuid";

const removeAcento = (comAcento) => {
  return comAcento.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export const transforms = [
  {
    id: uuid(),
    nome: "Texto Invertido",
    transform: (texto) => {
      return texto.split("").reverse().join("");
    },
  },
  {
    id: uuid(),
    nome: "Texto numérico",
    transform: (texto) => {
      return removeAcento(texto.toUpperCase())
        .replaceAll("O", "0")
        .replaceAll("L", "1")
        .replaceAll("E", "3")
        .replaceAll("A", "4")
        .replaceAll("S", "5")
        .replaceAll("T", "7");
    },
  },
  {
    id: uuid(),
    nome: "CSV",
    transform: (texto) => {
      return `"${texto.split(" ").join('";"')}"`;
    },
  },
  {
    id: uuid(),
    nome: "Slug",
    transform: (texto) => {
      return removeAcento(texto.toLowerCase()).split(" ").join("-");
    },
  },
  {
    id: uuid(),
    nome: "Somente vogais",
    transform: (texto) => {
      return texto.replaceAll(/(?=[a-z]{1})[^aeiou]{1}/gi, "");
    },
  },
  {
    id: uuid(),
    nome: "Somente consoantes",
    transform: (texto) => {
      return texto.replaceAll(/[aeiou]/gi, "");
    },
  },
  {
    id: uuid(),
    nome: "camelCase",
    transform: (texto) => {
      const upperCamel = removeAcento(texto.toLowerCase())
        .split(" ")
        .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join("");
      return upperCamel.charAt(0).toLowerCase() + upperCamel.slice(1);
    },
  },
];
