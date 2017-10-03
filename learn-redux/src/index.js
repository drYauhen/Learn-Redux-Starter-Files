
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

import './styles/style.css';

render (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Main} />
            <Route path='/route1/' component={PhotoGrid} />
            <Route path='/route2/' component={Single} />
        </Switch>
    </BrowserRouter>,
    // <p>HI</p>,
    document.getElementById('root')
 );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

