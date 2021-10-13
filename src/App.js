import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/NavBar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';




function App(props) {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>

				<Header />

				<Nav state={props.state.navbarPage} />

				<div className="content">

					<Route path="/dialogs" render={() =>
						<Dialogs
							messagesPage={props.state.messagesPage}
							dispatch={props.dispatch}
						/>} />

					<Route path="/profile" render={() =>
						<Profile
							profilePage={props.state.profilePage}
							dispatch={props.dispatch}
						/>} />

					<Route path="/news" render={() => <News />} />

					<Route path="/music" render={() => <Music />} />

					<Route path="/settings" render={() => <Settings />} />

				</div>

			</div>
		</BrowserRouter>
	);
}



export default App;

