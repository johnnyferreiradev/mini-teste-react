import React, { useState, useEffect } from 'react';

function checkPropType(value, type) {
  return typeof value == type ? true : false;
}

// SOLID Principles - Seguindo o princípio de responsabilidade única, o componente footer é responsável
// apenas pela exibição do texto e ano no footer da aplicação. A validação das props 
// é feita por meio da função checkPropType, que é exclusivamente usada para comparar
// tipos de dados e retornar a solução desta comparação.
export function Footer({ year }) {
  const [message, setMessage] = useState(`Aqui temos um footer, ${ year }`);

  useEffect(() => {
    if (!checkPropType(year, 'number')) {
      setMessage('Formato de ano inválido.');
    }
  }, [year]);

  return (
    <footer style={{ position: 'absolute', bottom: 0, color: 'white', padding: '15px' }}>
      { message }
    </footer>
  );
}