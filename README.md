#Purpose
Implementation of Provider for [rrrouter](https://github.com/plandem/rrrouter) with direct usage of [rrrouter-history](https://github.com/plandem/rrrouter-history) as history session manager.

#Installation
```
npm install --save rrrouter-provider-history
```

#API

###Provider

| Property   | Description    | Type             | Default       |
|------------|----------------|------------------|---------------|
| history    | Instance of any [rrrouter-history](https://github.com/plandem/rrrouter-history) to use as session manager | Object | no |
| initHref   | Initial href that will be used at startup | String | no |


#Usage
1. Setup Provider

###Example.1 - setup Provider
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, HashHistory } from 'rrrouter-provider-history';

const history = new HashHistory();

ReactDOM.render(
	<Provider history={history} initHref='/'>
		<div>Your application</div>
	</Provider>,
	document.getElementById('root')
);
```

