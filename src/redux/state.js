
import { rerenderEntireTree } from './../render';
let state = {


	profilePage: {
		posts: [
			{ id: 1, message: 'PonchoBoom', likesCount: 12 },
			{ id: 2, message: 'RickAss', likesCount: 19 },
		],

		newPostText: 'it-kamasutra',
	},


	messagesPage: {
		messages: [
			{ id: 2, message: 'low' },
			{ id: 1, message: 'hi' },
			{ id: 3, message: 'mid' },
			{ id: 4, message: 'lol' },
			{ id: 5, message: 'senior' },
			{ id: 6, message: 'jun' },
		],

		dialogs: [
			{ id: 1, name: 'Poncho' },
			{ id: 2, name: 'Rick' },
			{ id: 3, name: 'Morty' },
			{ id: 4, name: 'Max' },
			{ id: 5, name: 'Birdperson' },
			{ id: 6, name: 'Mr.Poopybutthole' },
		],
	},

	navbarPage: {
		friends: [
			{ id: 1, name: 'Octopus Man', avatar: 'https://rickandmortyapi.com/api/character/avatar/254.jpeg' },
			{ id: 2, name: 'Amish Cyborg', avatar: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg' },
			{ id: 3, name: 'Baby Wizard', avatar: 'https://rickandmortyapi.com/api/character/avatar/31.jpeg' },
			{ id: 4, name: 'M. Queen', avatar: 'https://rickandmortyapi.com/api/character/avatar/533.jpeg' },
		],
	},

}



export let addPost = () => {
	let newPost = {
		id: 3,
		message: state.profilePage.newPostText,
		likesCount: 0
	};
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = "";//передаем пустую строку чтобы после поста очистить поле ввода
	rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}


export default state;