import React from 'react';
import { Provider } from 'react-redux';
import logo from './logo.jpeg';

import Content from './components/Content';
import Footer from './components/Footer';

import store from './store';

import './App.css';

function App() {
  // SOLID Principles - Principio da segregação de interface - Este principio diz respeito a
  // especificar o menor conjunto de dados exigido por um componente ou função.
  // Aqui este principio fora aplicado quando não há a necessidade de uma entrada de dados
  // para que o ao seja exibido, uma vez que o ano pode ser reconhecido como um atributo calculado.
  const year = new Date().getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Provider store={store}>
        <Content nome="João" />
      </Provider>

      <Footer year={year} />
    </div>
  );
}

export default App;
