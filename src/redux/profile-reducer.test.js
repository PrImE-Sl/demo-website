import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";


let state = {  //изначальные данные, если state не придет 
	posts: [
		{ id: 1, message: 'Hi! How are you?', likesCount: 3 },
		{ id: 2, message: "It's my first post", likesCount: 15 },
		{ id: 3, message: 'La la la', likesCount: 20 },
		{ id: 4, message: 'Slavik molodec', likesCount: 12 },
		{ id: 5, message: 'Yo yo yo' },
		{ id: 6, message: 'Good' },
	],
}

it('length of posts should be incremented', () => {
	//1. test data
	let action = addPostActionCreator("NewPost Text");
	//2. action
	let newState = profileReducer(state, action);

	//3. expectition
	expect(newState.posts.length).toBe(7);
});

it('message of new post should be correct', () => {
	//1. test data
	let action = addPostActionCreator("NewPost Text");

	//2. action
	let newState = profileReducer(state, action);

	//3. expectition
	expect(newState.posts[6].message).toBe("NewPost Text");
});

it('after deleting length of message should be decrement', () => {
	//1. test data
	let action = deletePost(1);

	//2. action
	let newState = profileReducer(state, action);

	//3. expectition
	expect(newState.posts.length).toBe(5);
});


it('after deleting length of message shouldn`t be decrement if id is incorrect', () => {
	//1. test data
	let action = deletePost(1000);

	//2. action
	let newState = profileReducer(state, action);

	//3. expectition
	expect(newState.posts.length).toBe(6);
});












