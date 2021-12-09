let initialState = {
	friends: [
		{ id: 1, name: 'Octopus Man', avatar: 'https://rickandmortyapi.com/api/character/avatar/254.jpeg' },
		{ id: 2, name: 'Amish Cyborg', avatar: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg' },
		{ id: 3, name: 'Baby Wizard', avatar: 'https://rickandmortyapi.com/api/character/avatar/31.jpeg' },
		{ id: 4, name: 'M. Queen', avatar: 'https://rickandmortyapi.com/api/character/avatar/533.jpeg' },
	],
};
const sideBarReducer = (state = initialState, action) => {
	return state;
}

export default sideBarReducer;