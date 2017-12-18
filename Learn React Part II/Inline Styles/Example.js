import React from 'react';

const styles = {
	color: 'darkcyan',
	background: 'mintcream',
	marginTop: '100px', 
	fontSize: '17px'
};

export class StyledClass extends React.Component {
	render() {
		return (
			<h1 style={styles}>
				Hello world!
			</h1>
		)
	}
}