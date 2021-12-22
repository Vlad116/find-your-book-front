import React from "react";
import { 
	BrowserRouter, 
	Route, 
	Routes, 	
	Navigate
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import {  Home, Login, Register, Books, Book, Authors, Author } from './pages'

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => 
	localStorage.getItem('userId') 
		? children
	 	: <Navigate
			to="/login"
		/>


const App = () => {
  	return (
		<BrowserRouter>
			<Routes>
				<Route path={'login'} element={<Login/>} />
				<Route path={'register'} element={<Register/>}/>
				<Route path={'/'} element={<MainLayout/>}>
					<Route index element={
							<PrivateRoute>
								<Books/>
							</PrivateRoute>
						}
					/>
					<Route path={'books'} element={<MainLayout/>}>
						<Route index element = {
								<PrivateRoute>
									<Books/>
								</PrivateRoute>
							}
						/>
						<Route 
							path={':bookId'} 
							element={
								<PrivateRoute>
									<Book/>
								</PrivateRoute>
							}
						/>
					</Route>
					<Route path={'authors'} element={<MainLayout/>}>
						<Route index element = {
								<PrivateRoute>
									<Authors/>
								</PrivateRoute>
							}
						/>
						<Route 
							path={':authorId'} 
							element={
								<PrivateRoute>
									<Author/>
								</PrivateRoute>
							}
						/>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
  	);
}

export default App;
