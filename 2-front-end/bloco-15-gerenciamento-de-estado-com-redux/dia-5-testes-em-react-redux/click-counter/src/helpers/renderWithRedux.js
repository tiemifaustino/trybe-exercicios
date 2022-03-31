// Esses imports servem para termos acesso às ferramentas necessárias pra mockar o store .
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
// Um detalhe muito importante: como é utilizado um combineReducers na resolução do exercício, quando formos implementar os testes, temos que criar o store mockado com a mesma estrutura do padrão. Portanto, vamos importar o combineReducers e adaptar a função renderWithRedux para utilizá-lo.
import { combineReducers, createStore } from 'redux';
import clickReducer from '../redux/reducers';


const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }),
    initialState)
  } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        {component}
      </Provider>
      ),
    store,
  }
}

export default renderWithRedux;
