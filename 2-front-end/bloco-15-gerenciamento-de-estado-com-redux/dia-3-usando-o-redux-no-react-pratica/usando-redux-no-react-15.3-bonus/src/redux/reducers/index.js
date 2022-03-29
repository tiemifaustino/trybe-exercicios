import { combineReducers } from "redux";
import emailLoginReducer from "./emailLoginReducer";

const rootReducer = combineReducers({
  emailLoginReducer,
});

export default rootReducer;