import React from 'react';

import Text from '../Items/Text';
import Image from '../Items/Image';
import Grid from './Grid';
import Divider from '../Items/Divider';
import Heading from '../Items/Heading';
import PageBanner from '../Items/PageBanner';
import Button from '../Items/Button';
import FlexBox from './FlexBox';
import Collection from './Collection';
import News from './News';
import PopupBox from '../Items/PopupBox';
import Maps from '../Items/Maps';
import Section from './Section';

import ContentData from "../../types/component/ContentData";
import ContentComponentData from "../../types/component/ContentComponentData";

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
	section: Section
}

const ContentColumn = ({children}:ContentData) => {

	return (
		<div className="frame">
			{children
			&& children.map((component:ContentComponentData, j:any) => {
				const comp_name 	= component.component;
				const comp_settings = component.settings;
				const comp_children = component.children || [];
				const comp_columns 	= component.columns || [];

				if (defaultComponents[comp_name] === undefined) {
					return null;
				}

				const NewComponent = defaultComponents[comp_name];

				return (
					<NewComponent
						name={comp_name}
						settings={comp_settings}
						children={comp_children}
						columns={comp_columns}
						key={`component-${j}`}
					/>
				);
			})

			}
		</div>
	);
}
export default ContentColumn;