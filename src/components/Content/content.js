import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function checkPropType(value, type) {
  return typeof value == type ? true : false;
}

// SOLID Principles - O principio aberto-fechado diz respeito a possibilidade de estender
// o comportamento de uma classe ou componente. Assim como o useEffect foi adicionado a este 
// componente, alterando seu comportamento, novos métodos podem ser implementados, sem que
// seja necessário modificar as funcionalidades atuais.
export function Content({ nome }) {
  const fontSize = 36;
  const candidateName = 'Johnny';
  const candidateNameRedux = useSelector(state => state.candidate.candidateNameRedux);
  
  const [message, setMessage] = useState(`Parabéns ${ nome }, você finalizou o seu mini-teste.`);
  const [messageAfterFiveSeconds, setMessageAfterFiveSeconds] = useState('');
  const [messageAfterTwentySeconds, setMessageAfterTwentySeconds] = useState('');

  useEffect(() => {
    if (!checkPropType(nome, 'string')) {
      setMessage('Ops! O nome inserido é inválido.');
    }

    setTimeout(() => {
      setMessageAfterFiveSeconds(`Parabéns ${ candidateName }, você finalizou o seu teste.`);
    }, 5000);

    setTimeout(() => {
      setMessageAfterTwentySeconds(`Parabéns ${ candidateNameRedux }, você finalizou o seu teste.`);
    }, 20000);

  }, [nome, candidateNameRedux]);

  return (
    <div style={{ color: 'white', fontSize: fontSize }}>
      { message }<br/>
      { messageAfterFiveSeconds }<br/>
      { messageAfterTwentySeconds }
    </div>
  );
}
