import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
                            <Link to={'/home'} className ={'linkOpts'}>HOME</Link>
                        </li>
                        <li className={'linkText'}>
                            <Link to={'/about'} className ={'linkOpts'}>ABOUT PAGE</Link>
                        </li>
                        <li className={'linkText'}>
                            <Link to={'/achievements'} className ={'linkOpts'}>RESUME</Link>
                        </li>
                    </div>
                </header>
            <Switch>
                <Route path={'/home'}>
                    <div className={'homeInfo'}>
                        <div className={'homePieceMain'}>
                            <div>
                                <img className={'homePic'} src={'https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png'}/>
                            </div>
                            <div className={'homePiece'}>
                                <h1> Scott Schaefer </h1>
                                <p>
                                    I am an aspiring programmer and software engineer studying Computer Science at the
                                    Georgia Institute of Technology.
                                </p>
                                <p>
                                    Currently, I am a third year with a planned graduation
                                    date of Spring 2023 with threads of Intelligence and Info Internetworks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={'linkBoxes'}>
                        <div className={'linkBox'}>
                            sschaefer30@gatech.edu
                        </div>
                        <div className={'linkBox'}>
                            github
                        </div>
                        <div className={'linkBox'}>
                            linkedin
                        </div>
                    </div>
                </Route>
                <Route path={'/about'}>
                    hey UwU
                </Route>
                <Route path={'/achievements'}>
                    hey dear
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
