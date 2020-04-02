import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import {ActivityPanels} from '@enact/moonstone/Panels';
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'ramda/src/compose';
import {handle, adaptEvent, forward, log} from '@enact/core/handle';
import Changeable from '@enact/ui/Changeable';

import WelcomePopup from '../views/WelcomePopup';
import MainPanel from '../views/MainPanel';
import AddItemPanel from '../views/AddItemPanel';

import css from './App.module.less';

import initialItems from './items.json';
import {addItem, deleteItem, editItem, exportToJson} from './item-modifiers.js';

const helpType = [
	"Medical Activites",
	"Healthcare Management",
	"Household Help",
	"Personal Help",
	"Social/Emotional Help",
	"Other"
]

const frequency = [
	"Once in a lifetime",
	"Yearly",
	"Monthly",
	"Weekly",
	"Daily",
	"Frequently"
]

const App = kind({
	name: 'App',

	propTypes: {
		items: PropTypes.object,
		lightModeActive: PropTypes.bool,
		onAddItem: PropTypes.func,
		onSelectBreadcrumb: PropTypes.func,
		onSubmitItem: PropTypes.func,
		panelIndex: PropTypes.number,
		onToggleTheme: PropTypes.func,
		onEditCard: PropTypes.func,
		onDeleteCard: PropTypes.func,
		onExportData: PropTypes.func
	},

	defaultProps: {
		panelIndex: 0
	},

	styles: {
		css,
		className: 'app'
	},

	handlers: {
		onAddItem: handle(
			adaptEvent(
				() => ({panelIndex: 1}),
				forward('changePanel')
			)
		),

		onSelectBreadcrumb: handle(
			adaptEvent(
				(ev, {panelIndex}) => ({panelIndex: panelIndex - 1}),
				forward('changePanel')
			)
		),

		onSubmitItem: handle(
			adaptEvent(
				({description, helpIndex, frequencyIndex}, {items}) => ({items: addItem(items, description, helpIndex, frequencyIndex),panelIndex: 0}),
				handle(
					forward('changePanel'),
					forward('updateItems')
				)
			)
		),

		onDeleteCard: handle(
			adaptEvent(
				({descriptionIndex, helpIndex, frequencyIndex}, {items}) => ({items: deleteItem(items, descriptionIndex, helpIndex, frequencyIndex)}),
				forward('updateItems')
			)
		),

		onExportData: handle(
			(ev, {items}) => (exportToJson(items))
		)
	},

	render: ({
		items,
		lightModeActive,
		onAddItem,
		onSelectBreadcrumb,
		onSubmitItem,
		onToggleTheme,
		panelIndex,
		onEditCard,
		onDeleteCard,
		onExportData,
		...rest
	}) => {
		delete rest.updateItems;
		delete rest.changePanel;

		return(
		<div {...rest}>
			<WelcomePopup />
			<ActivityPanels index={panelIndex} onSelectBreadcrumb={onSelectBreadcrumb} noCloseButton>
				<MainPanel {...{
					items,
					lightModeActive,
					onAddItem,
					onToggleTheme,
					onEditCard,
					onDeleteCard,
					onExportData
				}}/>
				<AddItemPanel onSubmit={onSubmitItem} />
			</ActivityPanels>
		</div>
	);
	}
});

const AppDecorator = compose(
	MoonstoneDecorator,
	Changeable({prop: 'panelIndex', change: 'changePanel'}),
	Changeable({prop: 'items', change: 'updateItems'})
);

const DecoratedApp = AppDecorator(App);

const SkinCapableApp = (props) => (
	<DecoratedApp
		skin={props.lightModeActive ? 'light' : 'dark'}
		defaultItems={initialItems}
		{...props}
	/>
)

const SkinnedApp = Changeable({prop: 'lightModeActive', change: 'onToggleTheme'}, SkinCapableApp);

export default SkinnedApp;


export {
	SkinnedApp,
	helpType,
	frequency
};
