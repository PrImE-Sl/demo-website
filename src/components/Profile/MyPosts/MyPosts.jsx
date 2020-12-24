
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				{/* <Field component="textarea" */}
				<Field component={Textarea}  //*Из обычной txtA сделали свою
					name="newPostText" placeholder="Enter your post"
					validate={[required, maxLength10]} />
			</div>
			<div><button>Add Post</button></div>
		</form>

	)
}

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

const MyPosts = React.memo(props => {
	let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

	let newPostElement = React.createRef();
	// let onAddPost = () => {props.addPost();}
	// let onPostChange = () => {
	// 	let text = newPostElement.current.value;
	// 	props.updateNewPostText(text)
	// }
	let onAddPost = (values) => {
		props.addPost(values.newPostText)
	}

	return (
		<div className={s.postsBlock}>
			<h2>My posts are bellow</h2>
			<div>
				<AddNewPostFormRedux onSubmit={onAddPost} />
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	);
})


export default MyPosts;



{/* <div>
<textarea ref={newPostElement}
	value={props.newPostText} //прокидываем введенные Данные в state (FLUX)
	onChange={onPostChange} />
</div>
<div>
<button onClick={onAddPost}>Add post</button>
</div> */}

{/*const MyPosts = (props) => {
	let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount} />)

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	}
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text)
	}

	return (
		<div className={s.postsBlock}>
			<h2>My posts are bellow</h2>
			<div>


			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	);
}*/}
