import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import Repeater from '@enact/ui/Repeater';
import {Cell} from '@enact/ui/Layout';

import Card from '../Card';

const CardContainerBase = kind({
	name: 'CardContainer',

	propTypes: {
		items: PropTypes.object,
		helpIndex: PropTypes.number,
		frequencyIndex: PropTypes.number,
		onEditCard: PropTypes.func,
		onDeleteCard: PropTypes.func
	},

	render: ({
		items,
		helpIndex,
		frequencyIndex,
		onEditCard,
		onDeleteCard,
		...rest
		}) => {
		return(
		<Cell style={{width: '15'}} {...rest}>
			<Repeater childComponent={Card} childProp='description' indexProp='descriptionIndex' itemProps={{helpIndex: helpIndex, frequencyIndex: frequencyIndex, onEdit: onEditCard, onDelete: onDeleteCard}} {...rest}>
				{items[helpIndex][frequencyIndex]}
			</Repeater>
		</Cell>
	);
	}
});

const CardContainer = CardContainerBase;

export default CardContainer;

export {
	CardContainer
};