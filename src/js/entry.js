import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import NotFound from './components/NotFound';
import Home from './components/Home';

const App = (props) =>
	<div>{props.children}</div>;

App.propTypes = {
  children: React.PropTypes.node,
};

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="*" component={NotFound} />
		</Route>
	</Router>
), document.querySelector('#app'));
