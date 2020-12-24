import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { addPost, updateNewMessageText, updateNewPostText, addMessage } from './redux/state';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (state) => {   //Ф для перерисовки дерева, удалили из index.js
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>

        <App state={state}
          addPost={addPost} updateNewPostText={updateNewPostText}
          addMessage={addMessage} updateNewMessageText={updateNewMessageText}
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}


