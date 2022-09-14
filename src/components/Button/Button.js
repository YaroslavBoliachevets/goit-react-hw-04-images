import React, {Component} from "react";
import { LoadButton } from "./Button.module";

class Button extends Component {
	render() {
		return (
			<LoadButton type="button" onClick={this.props.onClick}>Load more</LoadButton>
		)
	}
};


export default Button;