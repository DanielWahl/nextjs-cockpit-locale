import React from 'react';
import ContentComponentData from "../../types/component/ContentComponentData";

const Maps = ({settings}:ContentComponentData) => {

	return (
		<div className="maps" dangerouslySetInnerHTML={{__html: settings?.link}}/>
	);
}
export default Maps;