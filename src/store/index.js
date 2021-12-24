// import { combineReducers } from 'redux-immutable'
// import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'
// import { fromJS } from 'immutable'
// import initialState from './initial-state'
// import { books, booksMeta } from './features/book/index'
// import { authors, authorsMeta } from './features/author/index'
// 
// const rootReducer = combineReducers({ authors, authorsMeta, books, booksMeta })
// 
// const composeEnhancers = composeWithDevTools({})
// 
// const store = createStore(
//     rootReducer,
//     fromJS(initialState),
//     composeEnhancers(applyMiddleware(thunk, logger),)
// )
// 
// console.log(store)
// 
// export default store