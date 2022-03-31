import { cleanup, screen } from '@testing-library/react';
import App from './App';
import renderWithRedux from './helpers/renderWithRedux';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  // Caso seja interessante alterar o valor inicial do clickReducer , isso também é possível passando como segundo parâmetro para a função renderWithRedux um objeto com as propriedades que respeitem o formato original do state . Isto é:

  // const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

  // Observe: o objeto initialState representa o valor inicial do state.
  // O clickReducer representa o reducer criado.
  // O counter representa a propriedade que criamos dentro do nosso reducer .

  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(screen.getByText('5')).toBeInTheDocument();
  });

});
