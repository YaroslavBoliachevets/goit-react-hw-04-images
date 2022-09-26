import { LoadButton } from "./Button.module";

function Button({onClick}) {
		return (
			<LoadButton type="button" onClick={onClick}>Load more</LoadButton>
		)
};


export default Button;