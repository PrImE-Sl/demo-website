import React from 'react';
import ReactDOM from 'react-dom';
// import store from './redux/redux-store';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import SamuraiJSApp from './App';

// let rerenderEntireTree = (state) => {   //Ф для перерисовки дерева, удал9ли из index.js
ReactDOM.render(
	// <BrowserRouter>
	// 	<React.StrictMode>
	// 		<Provider store={store}>
	// 			<App />
	// 		</Provider>
	// 	</React.StrictMode>
	// </BrowserRouter>,
	<SamuraiJSApp />,
	document.getElementById('root')
);
// }

// rerenderEntireTree(store.getState());  //отрисовываем все дерево в 1й раз, чтобы стр не была пустая
// rerenderEntireTree();  //отрисовываем все дерево в 1й раз, чтобы стр не была пустая


// store.subscribe(() => {
// 	let state = store.getState();
// 	rerenderEntireTree(state);
// 	// rerenderEntireTree()
// });  //возвращаем колбэком, перерисовываем дерево при его изменении

