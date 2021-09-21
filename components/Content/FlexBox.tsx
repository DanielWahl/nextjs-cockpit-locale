import React from 'react';
import Text from '../Items/Text';
import Image from '../Items/Image';
import Grid from './Grid';
import Divider from '../Items/Divider';
import Heading from '../Items/Heading';
import PageBanner from '../Items/PageBanner';
import Button from '../Items/Button';
import Collection from './Collection';

const defaultComponents:any = {
	heading: Heading,
	text: Text,
	image: Image,
	divider: Divider,
	grid: Grid,
	pagebanner: PageBanner,
	button: Button,
	addcollection: Collection,
}

interface Props {
	children?: any;
}

const FlexBox = ({children}: Props) => {

	return (
		<div className="content flex">
			{children
			&& children.map((component:any, j:number) => {
				const comp_name 	= component.component;
				const comp_settings = component.settings;
				const comp_children = component.children || [];

				if (defaultComponents[comp_name] === undefined) {
					return null;
				}

				const NewComponent = defaultComponents[comp_name];

				return (
					<NewComponent
						name={comp_name}
						settings={comp_settings}
						children={comp_children}
						key={`component-${j}`}
					/>
				);
			})

			}
		</div>
	);
}
export default FlexBox;