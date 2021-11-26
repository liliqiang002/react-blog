import { combineReducers, createStore } from "redux";
const path = require('path')
const files = require.context('./reducers', false, /\.js$/)

const modules = {}
files.keys().forEach(key => {
  const name = path.basename(key, '.js')
  modules[name] = files(key).default || files(key)
})

const reducers = combineReducers(modules)
const store = createStore(reducers)

export default store

