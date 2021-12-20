import React from "react";
import { 
	BrowserRouter, 
	Route, 
	Routes, 	
	Navigate
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import {  Home, Login, Register, Books, Book, Authors, Author } from './pages'
// import Header from './components/Header';
// import Sidebar from './components/Sidebar'
// import './App.css';

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
					<Route index element={<Home/>}/>
					<Route path={'books'} element={<MainLayout/>}>
						<Route index element = {<Books/>}/>
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
						<Route index element = {<Authors/>}/>
						<Route 
							path={':authorId'} 
							element={
								<PrivateRoute>
									<Author/>
								</PrivateRoute>
							}
						/>
					</Route>
					{/* <Route 
						path={'catalog'} 
						element={
							<PrivateRoute>
								<Shop/>
							</PrivateRoute>
						}
					/> */}
				</Route>
			</Routes>
		</BrowserRouter>
  	);
}

export default App;