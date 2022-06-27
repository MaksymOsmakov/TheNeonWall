type friendsType = {
	id: number
	name: string
	avatar: string | null
}


let initialState = {
	friends: [
		{ id: 1, name: 'Octopus Man', avatar: 'https://rickandmortyapi.com/api/character/avatar/254.jpeg' },
		{ id: 2, name: 'Amish Cyborg', avatar: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg' },
		{ id: 3, name: 'Baby Wizard', avatar: 'https://rickandmortyapi.com/api/character/avatar/31.jpeg' },
		{ id: 4, name: 'M. Queen', avatar: 'https://rickandmortyapi.com/api/character/avatar/533.jpeg' },
	] as Array<friendsType>,
};

export type initialStateType = typeof initialState

const sideBarReducer = (state = initialState, action: any) => {
	return state;
}

export default sideBarReducer;