import { createStore } from "redux";
import rootReducers from './reducer/index'

export let store = createStore(rootReducers)