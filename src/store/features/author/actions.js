// import { createActions } from 'redux-actions'
// import { host } from '../../../constants'
// import { fetchJSON } from '../../../utils/fetchJSON'
// import { fetchData, addEntity } from '../../../utils/methods-to-work-with-api'
// import { deleteBookAction } from '../book/index'
// 
// export const {
//     requestAuthors,
//     receiveAuthors,
//     handleError,
//     addAuthor,
//     deleteAuthor
// } = createActions(
//     'REQUEST_AUTHORS',
//     'RECEIVE_AUTHORS',
//     'HANDLE_ERROR',
//     'ADD_AUTHOR',
//     'DELETE_AUTHOR'
// )
// 
// export const fetchAuthorsData = () => {
//     return dispatch => fetchData(dispatch, `${host}/authors`, requestAuthors, receiveAuthors, handleError)
// }
// 
// export const addAuthorAction = (dataToAdd) => {
//     return dispatch => addEntity(dispatch, dataToAdd, `${host}/authors`, addAuthor)
// }
// 
// export const deleteAuthorAction = (id, name) => {
//     return async dispatch => {
//         try {
//             const delAuthorResponse = await fetchJSON(
//                 `${host}/authors/${id}`,
//                 {
//                     method: 'DELETE',
//                     headers: {
//                         'Accept': 'application/json',
//                         'Content-Type': 'application/json',
//                     }
//                 }
//             )
// 
//             const booksToDelete = await fetchJSON(
//                 `${host}/books/?author=${name}`
//             )
// 
//             booksToDelete.map((book) => {
//                 dispatch(deleteBookAction(book.id))
//             })
// 
//             dispatch(deleteAuthor(id))
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }