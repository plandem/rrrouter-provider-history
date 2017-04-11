import React from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash/pick';
import { Provider, RouterProps } from 'rrrouter';
import { parseHref } from 'rrrouter-history';

class HistoryProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.navigate = this.onPushHref;
	}

	componentWillMount() {
		this.props.history.subscribe(this.onPopHref);
	}

	componentWillUnmount() {
		this.props.history.unsubscribe();
	}

	onPopHref = (href) => {
		const route = parseHref(href);
		this.setState(route);
		this.props.history.update(route.href, false);
	};

	onPushHref = (href) => {
		const route = parseHref(href);
		this.setState(route);
		this.props.history.update(route.href, true);
	};

	go = (page) => {
		this.props.history.go(page);
	};

	back = () => {
		this.go(-1);
	};

	forward = () => {
		this.go(+1);
	};

	render() {
		const route = this.state;

		const props = pick(this, Object.keys(Provider.propTypes));
		props[RouterProps.locationPropName] = route;
		props.initHref = this.props.initHref;

		return React.createElement(Provider, props, this.props.children);
	}
}

HistoryProvider.propTypes = {
	initHref: PropTypes.string,
	children: PropTypes.element.isRequired,
	history: PropTypes.shape({
		subscribe: PropTypes.func.isRequired,
		unsubscribe: PropTypes.func.isRequired,
		update: PropTypes.func.isRequired,
		go: PropTypes.func.isRequired,
	}).isRequired,
};

export default HistoryProvider;