import React from 'react';
import Props from "../../types/singleComponents/NormalProps";

const Button = ({data}: Props):JSX.Element => {

	return (
		<div className="component-text">
			<div dangerouslySetInnerHTML={{__html: data?.text}}/>
		</div>
	);
}

export default  Button;