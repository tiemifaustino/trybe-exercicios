import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  // 1. Crie um teste com o valor padrão do reducer e teste se um clique funciona.
  test('Verifica o valor padrão do reducer', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 0 }}});

    expect(screen.getByText('0')).toBeInTheDocument();
  });

  // 2. Altere o valor inicial do counter para 10, faça um clique do botão e crie os testes para esses comportamentos.
  test('Verifica o counter', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    const buttonAdicionar = screen.queryByText('Clique aqui');
    userEvent.click(buttonAdicionar)
    expect(screen.getByText('11')).toBeInTheDocument();
  });
});
