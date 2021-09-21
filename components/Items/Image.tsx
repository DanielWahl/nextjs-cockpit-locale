import React from 'react';
import Vars from '../../helpers/Vars';
import ContentComponentData from "../../types/component/ContentComponentData";

const Image = ({settings}:ContentComponentData) => {
	let imageUrl = Vars.domain + settings.image?.path;

	return (
		<div className="component-image">
			<img src={imageUrl} alt={settings?.image?.path}/>
		</div>
	);
}
export default Image;