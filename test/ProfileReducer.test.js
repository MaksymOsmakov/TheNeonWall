import profileReducer, { addPostActionCreator, deletePost } from "./ProfileReducer"

let state = {
	posts: [
		{ id: 1, message: 'PonchoBoom', likesCount: 12 },
		{ id: 2, message: 'RickAss', likesCount: 19 },
	],
};


it('new post should be added', () => {
	//test data
	let action = addPostActionCreator('it-kamasutra');
	//action
	let newState = profileReducer(state, action);
	//expectation
	expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
	let action = addPostActionCreator('its working');
	let newState = profileReducer(state, action);
	expect(newState.posts[2].message).toBe('its working')
});

it('length of messages after deleting should be decremented', () => {
	let action = deletePost(1);
	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(1);
})
it('length of messages after deleting shouldn`t be decremented if id is incorrect', () => {
	let action = deletePost(1000);
	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(2);
})