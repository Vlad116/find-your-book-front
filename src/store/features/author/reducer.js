// import { handleActions } from 'redux-actions'
// import {
//     requestAuthors,
//     receiveAuthors,
//     handleError,
//     addAuthor,
//     deleteAuthor
// } from './actions'
// import initialState from '../../initial-state'
// import {
//     isFetching,
//     didInvalidate
// } from '../../../constants'
// 
// export const authors = handleActions({
// 
//     [receiveAuthors]: (state, action) => (
//         state.merge(action.payload)
//     ),
// 
//     [addAuthor]: (state, action) => (
//         state.push({
//             id: action.payload.id,
//             name: action.payload.name
//         })
//     ),
// 
//     [deleteAuthor]: (state, action) => {
//         const index = state.findIndex(i => i.id === action.payload)
//         return state.delete(index)
//     },
// }, initialState.authors)
// 
// export const authorsMeta = handleActions({
//     [requestAuthors]: (state, action) => (
//         state.set(isFetching, action.payload.isFetching)
//     ),
// 
//     [handleError]: (state, action) => (
//         state.set(didInvalidate, action.payload.didInvalidate)
//     ),
// }, initialState.authorsMeta)