import React from 'react';
import Props from "../../types/singleComponents/NormalProps";

const Product = ({data}:Props) => {

	return (
		<div className="product">
			<p>{data?.display}</p>
		</div>
	);
}
export default Product;