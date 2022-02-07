import React from "react"
import classes from './FormsControls.module.css';

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
	const hasError = touched && error;
	return (
		<div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
			<textarea {...input} {...props} />
			{hasError && <span>{error}</span>}
		</div >
	)
}

export const Input = ({ input, meta: { touched, error }, ...props }) => {
	const hasError = touched && error;
	return (
		<div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
			<div>
				<input {...input} {...props} />
			</div>
			<div>
				{hasError && <span>{error}</span>}
			</div>
		</div >
	)
}  