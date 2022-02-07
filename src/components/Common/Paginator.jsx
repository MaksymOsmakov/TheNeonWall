import React, { useState } from 'react';
import classes from "./Paginator.module.css"


const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
	let pagesCount = Math.ceil(totalItemsCount / pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let [portionNumber, setPortionNumber] = useState(1);

	let portionCount = Math.ceil(pagesCount / portionSize);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionNumber = portionNumber * portionSize;



	return (
		<div className={classes.pagination_section}>
			{portionNumber > 1 &&
				<button style={{ marginRight: 10 }} onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}

			{pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber).
				map(p => {
					return <span className={currentPage === p && classes.selectedPage}
						onClick={(e) => { onPageChanged(p); }}>{p}</span>
				})}

			{portionCount > portionNumber &&
				<button style={{ marginLeft: 10 }} onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
		</div>
	);
};



export default Paginator;