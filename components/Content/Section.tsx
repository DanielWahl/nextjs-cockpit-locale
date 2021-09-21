import React from 'react';
import Heading from '../Items/Heading';
import Text from '../Items/Text';
import Image from '../Items/Image';
import Divider from '../Items/Divider';
import Grid from './Grid';
import PageBanner from '../Items/PageBanner';
import Button from '../Items/Button';
import FlexBox from './FlexBox';
import Collection from './Collection';
import News from './News';
import PopupBox from '../Items/PopupBox';
import Maps from '../Items/Maps';

import ContentComponentData from "../../types/component/ContentComponentData";
import NormalProps from "../../types/singleComponents/NormalProps";

const defaultComponents:any = {
	heading: Heading,
	text: Text,
	image: Image,
	divider: Divider,
	grid: Grid,
	pagebanner: PageBanner,
	button: Button,
	flexbox: FlexBox,
	addcollection: Collection,
	news: News,
	popupbox: PopupBox,
	maps: Maps,
}

const Section = (props:NormalProps) => {
	let {children, data} = props;

	return (
		<section className={`page-components`}>
			{children
			&& children.map((component:ContentComponentData, j:number) => {
				const comp_name 	= component.component;
				const comp_settings = component.settings;
				const comp_children = component.children || [];
				const comp_columns 	= component.columns || [];

				if (defaultComponents[comp_name] === undefined) {
					return null;
				}

				const NewComponent = defaultComponents[comp_name];

				return (
					<div className="frame">
						<NewComponent
							{...props}
							name={comp_name}
							settings={comp_settings}
							children={comp_children}
							columns={comp_columns}
							data={data}
							key={`component-${j}`}
						/>
					</div>
				);

			})
			}
		</section>
	);
}

export default Section;