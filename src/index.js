import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/home"
import Resume from "./components/resume"

const main = (
    <html>
        <Router>
            <body>
                <header>
                    <div className={'name'}>
                        SCOTT SCHAEFER
                    </div>
                    <div className={'links'}>
                        <li className={'linkText'}>
                            <Link to={'/'} className ={'linkOpts'}>HOME</Link>
                        </li>
                        {/* <li className={'linkText'}>
                            <Link to={'/about'} className ={'linkOpts'}>ABOUT PAGE</Link>
                        </li> */}
                        <li className={'linkText'}>
                            <Link to={'/achievements'} className ={'linkOpts'}>RESUME</Link>
                        </li>
                    </div>
                </header>
            <Switch>
                <Route exact path={'/'}>
                    <Home />
                </Route>
                <Route path={'/about'}>
                    Thanks
                </Route>
                <Route path={'/achievements'}>
                    <Resume />
                </Route>
            </Switch>
            </body>
        </Router>
    </html>
)

ReactDOM.render(
    main,
    document.getElementById('root')
);
