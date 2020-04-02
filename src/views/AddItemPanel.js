import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import {Panel} from '@enact/moonstone/Panels';
import Heading from '@enact/moonstone/Heading';
import React from 'react';
import {handle, adaptEvent, forward} from '@enact/core/handle';
import Input from '@enact/moonstone/Input';
import Dropdown from '@enact/moonstone/Dropdown';
import Button from '@enact/moonstone/Button';
import {Row, Cell, Column} from '@enact/ui/Layout';
import compose from 'ramda/src/compose';
import Changeable from '@enact/ui/Changeable';

import {helpType, frequency} from '../App';

const AddItemPanelBase = kind({
	name: 'AddItemPanel',

	propTypes: {
		description: PropTypes.string,
		onSubmit: PropTypes.func,
		helpIndex: PropTypes.number,
		frequencyIndex: PropTypes.number,
		onChangeHelp: PropTypes.func,
		onChangeFrequency: PropTypes.func,
		onUpdateInput: PropTypes.func
	},

	defaultProps: {
		helpIndex: 0,
		frequencyIndex: 0
	},

	handlers: {
		onChangeHelp: handle(
			adaptEvent(
				({selected}) => ({helpIndex: selected}),
				forward('onChangeHelp')
			)
		),

		onChangeFrequency: handle(
			adaptEvent(
				({selected}) => ({frequencyIndex: selected}),
				forward('onChangeFrequency')
			)
		),

		onUpdateInput: handle(
			adaptEvent(
				({value}) => ({description: value}),
				forward('onUpdateInput')
			)
		),

		onSubmit: handle(
			adaptEvent(
				(ev, {description, helpIndex, frequencyIndex}) => ({description: description, helpIndex: helpIndex, frequencyIndex: frequencyIndex}),
				forward('onSubmit')
			)
		)
	},

	render: ({description, onUpdateInput, helpIndex, onChangeHelp, frequencyIndex, onChangeFrequency, onSubmit, ...rest}) => (
		<Panel {...rest}>
			<Column>
				<Cell>
					<Row>
						<Cell size="20rem">
							<Heading>
								Description
							</Heading>
						</Cell>
						<Cell>
							<Input value={description} placeholder="Enter Description Here" onChange={onUpdateInput}/>
						</Cell>
					</Row>
				</Cell>
				<Cell>
					<Row>
						<Cell size="20rem">
							<Heading>
								Type of Care
							</Heading>
						</Cell>
						<Cell shrink>
							<Dropdown selected={helpIndex} onSelect={onChangeHelp} width='huge'>
								{helpType}
							</Dropdown>
						</Cell>
					</Row>
				</Cell>
				<Cell>
					<Row>
						<Cell size="20rem">
							<Heading>
								Frequency of Care
							</Heading>
						</Cell>
						<Cell>
							<Dropdown selected={frequencyIndex} onSelect={onChangeFrequency} width='huge'>
								{frequency}
							</Dropdown>
						</Cell>
					</Row>
				</Cell>
				<Cell>
					<Button onClick={onSubmit}>
						Submit
					</Button>
				</Cell>
			</Column>
		</Panel>
	)
});

const PanelDecorator = compose(
	Changeable({prop: 'helpIndex', change: 'onChangeHelp'}),
	Changeable({prop: 'frequencyIndex', change: 'onChangeFrequency'}),
	Changeable({prop: 'description', change: 'onUpdateInput'})
)

const AddItemPanel = PanelDecorator(AddItemPanelBase);

export default AddItemPanel;
