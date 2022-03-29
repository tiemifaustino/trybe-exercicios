import { SAVE_CLIENT } from "../actions";

const INITIAL_STATE = {
  clients: [],
}

const clientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_CLIENT:
      return {
        ...state,
        clients: [...state.clients, action.client],
        // ...state.clients é para manter o que já está no array da chave clients
        // action.client depois do spread operator é para adicionar o client que está na action
      }
    default:
    return state;
  }
}

export default clientsReducer;
