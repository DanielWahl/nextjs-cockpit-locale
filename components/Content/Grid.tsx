import React from "react";
import { randomNumber } from "../../helpers/randomNumber";
import { ContentComponentData } from "../../types/types";
import GridColumn from "./GridColumn";

const gridValues: any = {
    0: "",
    1: "",
    2: "half-half",
    3: "three-thirds",
    4: "four-fourths",
};

const Grid = ({ columns, settings }: ContentComponentData) => {
    let gridColumns = gridValues[columns?.length || settings?.colWidth || 0];

    return (
        <div
            className={`page-grid grid ${gridColumns} ${
                settings?.class && settings?.class !== ""
                    ? settings?.class
                    : gridColumns
            }`}
        >
            {columns &&
                columns.map((column: ContentComponentData, i: number) => {
                    const col_settings = column.data;
                    const col_columns = column.components || [];

                    return (
                        <GridColumn
                            settings={col_settings}
                            childrenData={col_columns}
                            key={`contentcolumn__${i}__${randomNumber}`}
                        />
                    );
                })}
        </div>
    );
};
export default Grid;
