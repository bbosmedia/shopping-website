import React from 'react';
import CollectionPreview from '../../preview-collection/preview-collection.component';
import './shop.style.scss';
import SHOP_DATA from './shop_data';

class ShopPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div className="shop-page">
				{collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
			</div>
		);
	}
}

export default ShopPage;
