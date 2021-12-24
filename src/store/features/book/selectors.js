// import {
//     isFetching,
//     didInvalidate,
//     books,
//     booksMeta,
//     booksFilterByAuthor
// } from '../../../constants'
// 
// export const getBooks = state => {
//     console.log(state)
//     const authorForFilter = getAuthorFilterForBooks(state)
// 
//     if (authorForFilter !== '') {
//         return state.get(books)
//             .filter((book) => book.author === authorForFilter)
//     }
// 
//     return state.get(books)
// }
// 
// export const getBooksPending = state =>
//     state.get(booksMeta).get(isFetching)
// 
// export const getBooksError = state =>
//     state.get(booksMeta).get(didInvalidate)
// 
// export const getAuthorFilterForBooks = state =>
//     state.get(booksMeta).get(booksFilterByAuthor)