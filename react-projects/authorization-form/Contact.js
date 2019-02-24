// import React from 'react';
// import ReactDOM from 'react-dom';

class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			password: 'valentina',
			authorized: false
		};

		this.authorize = this.authorize.bind(this);
	}

	authorize(event) {
		const password = event.target.querySelector('input[type="password"]').value;
		const auth = password == this.state.password;

		this.setState({
			authorized: auth
		});
	}

	render() {
		const login = (
			<form action="#" onSubmit={this.authorize}>
				<input type="password" placeholder="Password" />
				<input type="submit" value="Submit" />
			</form>
		);

		const contactInfo = (
			<ul>
				<li>client@example.com</i>
				<li>555.555.5555</li>
			</ul>
		);

		return (
			<div id="authorization">
				<h1>{ this.state.authorized ? 'Contact' : 'Enter the Password' }</h1>
				{ this.state.authorized ? contactInfo : login }
			</div>
		)
	}
}

ReactDOM.render(
	<Contact />,
	document.getElementById('app')
);