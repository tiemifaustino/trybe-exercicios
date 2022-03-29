import { combineReducers } from "redux";
import clientsReducer from "./clientsReducer";
import emailLoginReducer from "./emailLoginReducer";

const rootReducer = combineReducers({
  emailLoginReducer,
  clientsReducer,
});

export default rootReducer;