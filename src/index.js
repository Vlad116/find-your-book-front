import React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import './index.css';
import App from './App';

const rootElement = document.getElementById('app');
ReactDOM.render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<App />
		</StyledEngineProvider>
  	</React.StrictMode>,
  	rootElement
);
