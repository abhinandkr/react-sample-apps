import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {
	DynamicList,
	FetchData,
	FetchDataAxios,
	FetchPost,
	FetchQuestions,
	HelloWorld,
	JsExamples,
	Layout,
	Page404,
	ReduxExample1,
	StopWatch,
	TicTacToeGame,
} from './pages';
import {AsyncExample, CounterExample, SetTimeoutExample} from './pages/js-examples';
import TreeOfTasks from './pages/js-examples/tree-of-tasks';


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
let count = 0;
root.render(
	// <React.StrictMode>
	<BrowserRouter>
		<Routes>
			{/*Root page*/}
			<Route key={count++} path={'/'} element={<Layout/>}/>

			{/*Main pages*/}
			<Route key={count++} path={'helloworld'} element={<HelloWorld/>}/>
			<Route key={count++} path={'stop-watch'} element={<StopWatch/>}/>
			<Route key={count++} path={'fetch-data'} element={<FetchData/>}/>
			<Route key={count++} path={'fetch-data-axios'} element={<FetchDataAxios/>}/>
			<Route key={count++} path={'dynamic-list'} element={<DynamicList/>}/>
			<Route key={count++} path={'tic-tac-toe'} element={<TicTacToeGame/>}/>
			<Route key={count++} path={'redux-example-1'} element={<ReduxExample1/>}/>
			<Route key={count++} path={'fetch-questions'} element={<FetchQuestions/>}/>
			<Route key={count++} path={'fetch-post'} element={<FetchPost/>}/>

			{/*JS Examples*/}
			<Route key={count++} path={'js-examples'} element={<JsExamples/>}/>
			<Route key={count++} path={'set-timeout'} element={<SetTimeoutExample/>}/>
			<Route key={count++} path={'async-example'} element={<AsyncExample/>}/>
			<Route key={count++} path={'counter'} element={<CounterExample/>}/>
			<Route key={count++} path={'tree-of-tasks'} element={<TreeOfTasks/>}/>

			{/*404 page*/}
			<Route key={count++} path="*" element={<Page404/>}/>
		</Routes>
	</BrowserRouter>,
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
