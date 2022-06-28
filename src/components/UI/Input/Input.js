import React, { useImperativeHandle, useRef } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef(
	({ isValid, onChange, onBlur, label, type, id, value }, ref) => {
		const inputRef = useRef();

		const activate = () => {
			inputRef.current.focus();
		};

		useImperativeHandle(ref, () => ({
			focus: activate,
		}));

		return (
			<div
				className={`${classes.control} ${
					isValid === false ? classes.invalid : ""
				}`}
			>
				<label htmlFor={id}>{label}</label>
				<input
					ref={inputRef}
					type={type}
					id={id}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
				/>
			</div>
		);
	}
);

export default Input;
