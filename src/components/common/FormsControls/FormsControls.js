import React from 'react'
import styles from './FormsControls.module.css'

const FormControl = ({ input, meta: { touched, error }, children }) => { //приходит в txtA ч/з debugger
	const hasError = touched && error;
	return (
		<div className={styles.formControl + " " + (hasError ? styles.error : "")}>
			<div>
				{children}
				{/* <textarea {...input} {...props} /> */}
			</div>
			{hasError && <span>{error}</span>}
		</div>
	)
}
export const Textarea = (props) => {
	const { input, meta, child, ...restProps } = props;
	return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl> //передаем child
}
export const Input = (props) => {
	const { input, meta, child, ...restProps } = props;
	return <FormControl {...props}><input {...input} {...restProps} /></FormControl> //передаем child
}





