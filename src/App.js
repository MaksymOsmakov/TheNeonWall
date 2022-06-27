import React, { Component, Suspense } from 'react';
import './App.css';
import NavContainer from './components/NavBar/NavContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route } from 'react-router';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from "redux";
import { initializeAPP } from './redux/AppReducer';
import Preloader from './components/Common/Preloader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/Redux-store';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const News = React.lazy(() => import('./components/News/News'));





class App extends Component {

	componentDidMount() {
		this.props.initializeAPP();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (

			<div className='app-wrapper'>

				<HeaderContainer />
				<NavContainer />

				<div className="content">
					<Suspense fallback={<Preloader />}>

						<Route path="/dialogs" render={() =>
							<DialogsContainer />} />


						<Route path="/profile/:userId?" render={() =>
							<ProfileContainer />} />

						<Route path="/users" render={() =>
							<UsersContainer pageTitle={"Samurai"} />} />

						<Route path="/news" render={() =>
							<News />} />

						<Route path="/music" render={() =>
							<Music />} />

						<Route path="/settings" render={() =>
							<Settings />} />

						<Route path="/Login" render={() =>
							<Login />} />

					</Suspense>
				</div>

			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

const AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { initializeAPP }))(App);

const MainApp = (props) => {
	return <BrowserRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</BrowserRouter>
}

export default MainApp;