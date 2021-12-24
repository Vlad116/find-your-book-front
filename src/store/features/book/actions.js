// import { createActions } from 'redux-actions'
// import { host } from '../../../constants'
// import { fetchJSON } from '../../../utils/fetchJSON'
// import { fetchData, addEntity } from '../../../utils/methods-to-work-with-api'
// 
// export const {
//     requestBooks,
//     receiveBooks,
//     handleError,
//     addBook,
//     deleteBook,
//     filterBooksByAuthor
// } = createActions(
//     'REQUEST_BOOKS',
//     'RECEIVE_BOOKS',
//     'HANDLE_ERROR',
//     'ADD_BOOK',
//     'DELETE_BOOK',
//     'FILTER_BOOKS_BY_AUTHOR'
// )
// 
// export const fetchBooksData = () => {
//     return dispatch => fetchData(dispatch, `${host}/books`, requestBooks, receiveBooks, handleError)
// }
// 
// export const addBookAction = (dataToAdd) => {
//     return async dispatch => addEntity(dispatch, dataToAdd, `${host}/books`, addBook)
// }
// 
// export const deleteBookAction = (id) => {
//     return async dispatch => {
//         try {
//             const delBookResponse = await fetchJSON(
//                 `${host}/books/${id}`,
//                 {
//                     method: 'DELETE',
//                     headers: {
//                         'Accept': 'application/json',
//                         'Content-Type': 'application/json',
//                     }
//                 }
//             )
//             dispatch(deleteBook(id))
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }