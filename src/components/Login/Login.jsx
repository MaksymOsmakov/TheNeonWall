import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../Common/FormsControls';
import classes from './Login.module.css';
import { required } from './../../Utils/Validators/Formvalidators';
import { connect } from 'react-redux';
import { login } from './../../redux/AuthReducer';
import { Redirect } from 'react-router-dom';
import style from '../Common/FormsControls.module.css'

const LoginForm = (props) => {
	const { handleSubmit } = props
	const { error } = props
	return (
		<form action="" onSubmit={handleSubmit} className={classes.form}>

			<div>
				<Field name="email" type="text" placeholder='email' component={Input} validate={[required]} />
			</div>
			<div>
				<Field name="password" type="password" placeholder='password' component={Input} validate={[required]} />
			</div>
			<div>
				<Field name="rememberMe" type="checkbox" component={Input} /> <span>remember me</span>
			</div>
			{error && <div className={style.formSummaryError}>
				{error}
			</div>}
			<div>
				<button className={classes.btn}>Login</button>
			</div>

		</form>
	);
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}
	if (props.isAuth) {
		return <Redirect to={"/profile"} />
	}
	return (
		<>
			<h2>Login</h2>
			<LoginReduxForm onSubmit={onSubmit} />
		</>
	);
}
const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);