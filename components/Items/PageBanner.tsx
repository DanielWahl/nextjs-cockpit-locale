import React from 'react';
import Props from "../../types/singleComponents/NormalProps";

const PageBanner = ({data}:Props) => {

	return (
		<div className="component-text">
			<div dangerouslySetInnerHTML={{__html: data?.text}}/>
		</div>
	);
}
export default PageBanner;