import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';

const rootElement = document.getElementById('app');
ReactDOM.render(
  	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					{/* <Route path="expenses" element={<Expenses />} />
					<Route path="invoices" element={<Invoices />}>
					<Route
						index
						element={
						<main style={{ padding: '1rem' }}>
							<p>Select an invoice</p>
						</main>
						}
					/>
						<Route path=":invoiceId" element={<Invoice />} />
						</Route>
					<Route
					path="*"
					element={
						<main style={{ padding: '1rem' }}>
						<p>There's nothing here!</p>
						</main>
					}
					/> */}
				</Route>
				{/* <Route path="/authors" element={<Authors />} />
				<Route path="/books" element={<Books />} /> */}
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
  	rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
