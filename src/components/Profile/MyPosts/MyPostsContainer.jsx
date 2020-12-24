
import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

import MyPosts from './MyPosts';// const MyPostsContainer = (props) => {

const mapStateToProps = (state) => { //данные, которые берем из State
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	}
}
const mapDispatchToProps = (dispatch) => {  //коллбэки, которые будем отправлять в презентационную компоненту
	return {
		// updateNewPostText: (text) => {
		// 	let action = updateNewPostTextActionCreator(text);
		// 	dispatch(action);
		// },
		addPost: (newPostText) => {
			dispatch(addPostActionCreator(newPostText));//создали экшн

		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;