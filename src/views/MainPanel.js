import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import {Panel} from '@enact/moonstone/Panels';
import {Row, Cell, Column} from '@enact/ui/Layout';
import Heading from '@enact/moonstone/Heading';
import SwitchItem from '@enact/moonstone/SwitchItem';
import Scroller from '@enact/moonstone/Scroller';
import {handle, adaptEvent, forward} from '@enact/core/handle';
import React from 'react';

import css from './MainPanel.module.less';

import {helpType, frequency} from '../App';
import CardContainer from '../components/CardContainer';


const MainPanel = kind({
	name: 'MainPanel',

	propTypes: {
		items: PropTypes.object,
		onAddItem: PropTypes.func,
		onGithub: PropTypes.func,
		onCaremapButton: PropTypes.func,
		lightModeActive: PropTypes.bool,
		onToggleTheme: PropTypes.func,
		onEditCard: PropTypes.func,
		onDeleteCard: PropTypes.func,
		onExportData: PropTypes.func
	},

	styles: {
		css,
		className: 'mainPanel'
	},

	handlers: {
		onGithub: handle(
			() => (window.open('https://github.com/shalinhood/QuacksRandomizer', '_blank'))
		),

		onCaremapButton: handle(
			() => (window.open('https://atlasofcaregiving.com/caremap/', '_blank'))
		),

		onToggleTheme: handle(
			adaptEvent(
				({selected}) => ({lightModeActive: selected}),
				forward('onToggleTheme')
			)
		)
	},

	render: ({
		items,
		onAddItem,
		onCaremapButton,
		onGithub,
		lightModeActive,
		onToggleTheme,
		onEditCard,
		onDeleteCard,
		onExportData,
		...rest
	}) => {
		return(
		<Panel {...rest}>
			<Column>
				<Cell style={{height: '10%'}} shrink>
					<Column>
						<Cell shrink>
							<Row >
								<Cell style={{width: '10'}}>
									<Button onClick={onAddItem} size='small'>
										Add Item
									</Button>
								</Cell>
								<Cell style={{width: '15'}} component={Heading}>{helpType[0]}</Cell>
								<Cell style={{width: '15'}} component={Heading}>{helpType[1]}</Cell>
								<Cell style={{width: '15'}} component={Heading}>{helpType[2]}</Cell>
								<Cell style={{width: '15'}} component={Heading}>{helpType[3]}</Cell>
								<Cell style={{width: '15'}} component={Heading}>{helpType[4]}</Cell>
								<Cell style={{width: '15'}} component={Heading}>{helpType[5]}</Cell>
							</Row>
						</Cell>
					</Column>
				</Cell>
				<Cell component={Scroller}>
					<Column>
						<Cell className={css.row} shrink>
							<Row>
								<Cell style={{width: '10'}} component={Heading}>{frequency[0]}</Cell>
								<CardContainer helpIndex={0} frequencyIndex={0} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={1} frequencyIndex={0} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={2} frequencyIndex={0} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={3} frequencyIndex={0} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={4} frequencyIndex={0} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={5} frequencyIndex={0} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
							</Row>
						</Cell>
						<Cell className={css.row} shrink>
							<Row>
								<Cell style={{width: '10'}} component={Heading}>{frequency[1]}</Cell>
								<CardContainer helpIndex={0} frequencyIndex={1} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={1} frequencyIndex={1} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={2} frequencyIndex={1} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={3} frequencyIndex={1} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={4} frequencyIndex={1} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={5} frequencyIndex={1} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
							</Row>
						</Cell>
						<Cell className={css.row} shrink>
							<Row>
								<Cell style={{width: '10'}} component={Heading}>{frequency[2]}</Cell>
								<CardContainer helpIndex={0} frequencyIndex={2} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={1} frequencyIndex={2} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={2} frequencyIndex={2} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={3} frequencyIndex={2} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={4} frequencyIndex={2} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={5} frequencyIndex={2} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
							</Row>
						</Cell>
						<Cell className={css.row} shrink>
							<Row>
								<Cell style={{width: '10'}} component={Heading}>{frequency[3]}</Cell>
								<CardContainer helpIndex={0} frequencyIndex={3} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={1} frequencyIndex={3} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={2} frequencyIndex={3} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={3} frequencyIndex={3} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={4} frequencyIndex={3} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={5} frequencyIndex={3} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
							</Row>
						</Cell>
						<Cell className={css.row} shrink>
							<Row>
								<Cell style={{width: '10'}} component={Heading}>{frequency[4]}</Cell>
								<CardContainer helpIndex={0} frequencyIndex={4} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={1} frequencyIndex={4} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={2} frequencyIndex={4} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={3} frequencyIndex={4} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={4} frequencyIndex={4} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={5} frequencyIndex={4} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
							</Row>
						</Cell>
						<Cell className={css.row} shrink>
							<Row>
								<Cell style={{width: '10'}} component={Heading}>{frequency[5]}</Cell>
								<CardContainer helpIndex={0} frequencyIndex={5} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={1} frequencyIndex={5} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={2} frequencyIndex={5} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={3} frequencyIndex={5} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={4} frequencyIndex={5} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
								<CardContainer helpIndex={5} frequencyIndex={5} items={items} onEditCard={onEditCard} onDeleteCard={onDeleteCard}/>
							</Row>
						</Cell>
					</Column>
				</Cell>
				<Cell shrink>
					<Row align="center space-evenly">
						<Cell component={Button} onClick={onExportData} shrink>
							Export data
						</Cell>
						<Cell component={Button} shrink>
							Import data
						</Cell>
						<Cell component={Button} onClick={onGithub} shrink>
							GitHub
						</Cell>
						<Cell component={Button} onClick={onCaremapButton} shrink>
							CareMaps - Atlas of Caregiving
						</Cell>
						<Cell shrink>
							<SwitchItem onToggle={onToggleTheme} selected={lightModeActive}>Dark/Light Mode</SwitchItem>
						</Cell>
					</Row>
				</Cell>
			</Column>
		</Panel>
	);
	}
});

export default MainPanel;
