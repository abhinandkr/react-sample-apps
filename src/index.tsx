import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {
	AsyncExample,
	DynamicList,
	FetchData,
	FetchDataAxios,
	HelloWorld,
	Layout,
	Page404,
	ReduxExample1,
	StopWatch,
	TicTacToeGame
} from "./pages";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	// <React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<Layout/>}/>
				<Route path={'helloworld'} element={<HelloWorld/>}/>
				<Route path={'stop-watch'} element={<StopWatch/>}/>
				<Route path={'fetch-data'} element={<FetchData />} />
				<Route path={'fetch-data-axios'} element={<FetchDataAxios />} />
				<Route path={'dynamic-list'} element={<DynamicList/>}/>
				<Route path={'tic-tac-toe'} element={<TicTacToeGame/>}/>
				<Route path={'redux-example-1'} element={<ReduxExample1/>}/>
				<Route path={'async-example'} element={<AsyncExample/>}/>
				<Route path="*" element={<Page404/>}/>
			</Routes>
		</BrowserRouter>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
