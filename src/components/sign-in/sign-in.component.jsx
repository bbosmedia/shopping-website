import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign In with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="Email" required />
					<FormInput name="password" type="password" value={this.state.password} onChange={this.handleChange} label="Password" required />
					<label>Password</label>

					<input type="submit" placeholder="Submit Form" />
				</form>
			</div>
		);
	}
}

export default SignIn;
