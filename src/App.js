import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavContainer from './components/NavBar/NavContainer';
import ProfileContainer from './components/Profile/Profile';
import { Route } from 'react-router';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';





function App() {
	return (

		<div className='app-wrapper'>

			<Header />

			<NavContainer />

			<div className="content">
				

				{/* <Route path="" render={() =>
					<h1 style={{color: 'white'}}>Welcome to "The Neon Wall" Space</h1>} /> */}

				<Route path="/dialogs" render={() =>
					<DialogsContainer />} />

				<Route path="/profile" render={() =>
					<ProfileContainer />} />

				<Route path="/users" render={() =>
					<UsersContainer />} />

				<Route path="/news" render={() =>
					<News />} />

				<Route path="/music" render={() =>
					<Music />} />

				<Route path="/settings" render={() =>
					<Settings />} />

			</div>

		</div>
	);
}



export default App;

