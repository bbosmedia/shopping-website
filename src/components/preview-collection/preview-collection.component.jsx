import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './preview-collection.styles.scss';

const CollectionPreview = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h2>{title.toUpperCase()}</h2>
			<div className="preview">
				{items
					.filter((item, indx) => indx < 4)
					.map(({ id, ...otherItemProps }) => (
						<CollectionItem key={id} id={id} {...otherItemProps} />
					))}
			</div>
		</div>
	);
};
export default CollectionPreview;
