import React from 'react';
import ContentColumn from '../Content/ContentColumn';
import ContentComponentData from "../../types/component/ContentComponentData";

const PopupBox = (props:ContentComponentData) => {
	let {children, settings} = props;

	return (
		<article className={`page-components popupBox`}>
			{(settings.open || settings.open === 'true') ? (
				<details open>
					<summary>{settings?.title}</summary>
					<ContentColumn {...props} settings={settings} children={children}/>
				</details>
			) : (
				<details>
					<summary>{settings?.title}</summary>
					<ContentColumn {...props} settings={settings} children={children}/>
				</details>
			)}
		</article>
	);
}
export default PopupBox;