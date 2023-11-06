import {useRef, useState} from 'react';

enum Operadores {
  divir,
  multiplicar,
  restar,
  sumar,
}

export const useCalculador = () => {
  const ListaOperaciones: any = {
    dividir: Operadores.divir,
    multiplicar: Operadores.multiplicar,
    restar: Operadores.restar,
    sumar: Operadores.sumar,
  };

  const ultimaOperacion = useRef<Operadores>();

  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const handleResetNumero = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const handlePositivoNegativo = () => {
    numero.includes('-')
      ? setNumero(numero.replace('-', ''))
      : setNumero('-' + numero);
  };

  const btnDelete = () => {
    if (numero.includes('-') && numero.length == 2) {
      setNumero('0');
    } else if (numero.length > 1) {
      setNumero(numero.substring(0, numero.length - 1));
    } else {
      setNumero('0');
    }
  };

  const cambiarNumAnterior = () => {
    numero.endsWith('.') ? setNumeroAnterior(numero.replace('.', '')) : setNumeroAnterior(numero);
    setNumero('0');
  };

  const handleOperacion = (operacion: string): void => {
    cambiarNumAnterior();
    ultimaOperacion.current = ListaOperaciones[operacion];
  };

  const armarNumero = (numeroTexto: string) => {
    //no aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);
    
    if (num1 && num2) {
      switch (ultimaOperacion.current) {
        case Operadores.sumar: {
          setNumero((num1 + num2).toString());
          setNumeroAnterior('0');
          break;
        }
        case Operadores.restar: {
          setNumero((num2 - num1).toString());
          setNumeroAnterior('0');
          break;
        }
        case Operadores.multiplicar: {
          setNumero((num1 * num2).toString());
          setNumeroAnterior('0');
          break;
        }
        case Operadores.divir: {
          setNumero((num2 / num1).toString());
          setNumeroAnterior('0');
          break;
        }
      }
    }
  };
    return { 
        numero,
        numeroAnterior,
        handleResetNumero,
        handlePositivoNegativo,
        btnDelete,
        armarNumero,
        handleOperacion,
        calcular
    }
};
