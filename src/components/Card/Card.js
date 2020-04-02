import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import {handle, adaptEvent, forward} from '@enact/core/handle';
import BodyText from '@enact/moonstone/BodyText';
import {Row, Cell, Column} from '@enact/ui/Layout';
import IconButton from '@enact/moonstone/IconButton';
// import SlotItem from '@enact/moonstone/SlotItem';

import css from './Card.module.less';

const CardBase = kind({
	name: "Card",

	styles: {
		css,
		className: 'card'
	},

	propTypes: {
		description: PropTypes.string,
		onDelete: PropTypes.func,
		onEdit: PropTypes.func,
		helpIndex: PropTypes.number,
		frequencyIndex: PropTypes.number,
		descriptionIndex: PropTypes.number
	},

	handlers: {
		onDelete: handle(
			adaptEvent(
				(ev, {descriptionIndex, frequencyIndex, helpIndex}) => ({descriptionIndex: descriptionIndex, frequencyIndex: frequencyIndex, helpIndex: helpIndex}),
				forward('onDelete')
			)
		),

		onEdit: handle(
			adaptEvent(
				(ev, {descriptionIndex, frequencyIndex, helpIndex}) => ({descriptionIndex: descriptionIndex, frequencyIndex: frequencyIndex, helpIndex: helpIndex}),
				forward('onEdit')
			)
		)
	},

	render: ({description, onDelete, onEdit, ...rest}) => {
		delete rest.helpIndex;
		delete rest.frequencyIndex;
		delete rest.descriptionIndex

		return (
		<Cell shrink>
			{/* <SlotItem>
				{description}
				<slotAfter>
					<IconButton size="small" onClick={onEdit}>
						edit
					</IconButton>
					<IconButton size="small" onClick={onDelete}>
						trash
					</IconButton>
				</slotAfter>
			</SlotItem> */}
			<Column>
				<Cell shrink>
					<BodyText size='small'>
						{description}
					</BodyText>
				</Cell>
				<Row>
					<Cell shrink>
						<IconButton size="small" onClick={onEdit}>
							edit
						</IconButton>
					</Cell>
					<Cell shrink>
						<IconButton size="small" onClick={onDelete}>
							trash
						</IconButton>
					</Cell>
				</Row>
			</Column>
		</Cell>
	);
	}
});

const Card = CardBase;

export default Card;

export {
	Card
};