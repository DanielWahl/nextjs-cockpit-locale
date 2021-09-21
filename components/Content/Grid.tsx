import React from 'react';
import ContentColumn from './ContentColumn';
import ContentComponentData from "../../types/component/ContentComponentData";

const grid:any = {
	0: '',
	1: '',
	2: 'half-half',
	3: 'three-thirds',
	4: 'four-fourths',
};

const Grid = ({columns}:ContentComponentData) => {
	let gridColumns = grid[columns?.length || 0];

	return (
		<div className={`page-components grid ${gridColumns}`}>
			{columns && columns.map((column:ContentComponentData, i:number) => {
				const col_settings = column.settings;
				const col_children = column.children || [];

				return (
					<ContentColumn settings={col_settings} children={col_children} key={`contentcolumn-${i}`}/>
				);

			})
			}
		</div>
	);
}
export default Grid;