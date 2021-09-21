import React from 'react';
import ContentComponentData from "../../types/component/ContentComponentData";

const Heading = ({settings}:ContentComponentData) => {
	return (
		<div className="component-text">
			<h2 dangerouslySetInnerHTML={{__html: settings?.text}}/>
		</div>
	);
}
export default Heading;