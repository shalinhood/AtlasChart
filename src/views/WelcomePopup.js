import {handle, adaptEvent, forward, forEventProp} from '@enact/core/handle';
import kind from '@enact/core/kind';
import Popup from '@enact/moonstone/Popup';
import PropTypes from 'prop-types';
import BodyText from '@enact/moonstone/BodyText';
import Heading from '@enact/moonstone/Heading';
import Skinnable from '@enact/moonstone/Skinnable';
import Changeable from '@enact/ui/Changeable';
import React from 'react';

const WelcomePopupBase = kind({
	name: 'WelcomePanel',

	propTypes: {
		onClose: PropTypes.func,
		showing: PropTypes.bool
	},

	defaultProps: {
		showing: true
	},

	handlers: {
		onClose: handle(
			forEventProp('type', 'onTap'),
			adaptEvent(
				() => ({showing: false}),
				forward('onClose')
			)
		)
	},

	render: ({onClose, showing, ...rest}) => (
		<Popup open={showing} onClose={onClose} showCloseButton {...rest}>
			<Heading>
				WARNING
			</Heading>
			<BodyText>
				Do not refresh the page while using this tool as you will lose all your progress.
			</BodyText>
		</Popup>
	)
});

const WelcomePopup = Changeable({prop: "showing", change: "onClose"}, Skinnable(WelcomePopupBase));

export default WelcomePopup;
export {
	WelcomePopup,
	WelcomePopupBase
};