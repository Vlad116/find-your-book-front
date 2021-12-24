// import { handleActions, handleAction } from 'redux-actions'
// import {
//     requestBooks,
//     receiveBooks,
//     handleError,
//     addBook,
//     deleteBook,
//     filterBooksByAuthor
// } from './actions'
// import initialState from '../../initial-state'
// import {
//     isFetching,
//     didInvalidate,
//     booksFilterByAuthor
// } from '../../../constants'
// 
// export const books = handleActions({
// 
//     [receiveBooks]: (state, action) => (
//         state.merge(action.payload)
//     ),
// 
//     [addBook]: (state, action) => (
//         state.push({
//             id: action.payload.id,
//             bookTitle: action.payload.bookTitle,
//             author: action.payload.author
//         })
//     ),
// 
//     [deleteBook]: (state, action) => {
//         const index = state.findIndex(i => i.id === action.payload)
//         return state.delete(index)
//     },
// 
// }, initialState.books)
// 
// export const booksMeta = handleActions({
//     [requestBooks]: (state, action) => (
//         state.set(isFetching, action.payload.isFetching)
//     ),
// 
//     [handleError]: (state, action) => (
//         state.set(didInvalidate, action.payload.didInvalidate)
//     ),
// 
//     [filterBooksByAuthor]: (state, action) => (
//         state.set(booksFilterByAuthor, action.payload)
//     ),
// }, initialState.booksMeta)