import React from 'react';
import Props from "../../types/singleComponents/NormalProps";

const Divider = ({data}:Props) => {

	return (
		<div className="component-text">
			<div dangerouslySetInnerHTML={{__html: data?.text}}/>
		</div>
	);
}
export default Divider;
