import React from 'react';
import './RapNasral.css';
import LessonsSelection from './LessionsSelection/LessonsSelection';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CommunityArticles from './CommunityArticles/CommunityArticles';

function RapNasral() {
    return (
        <div className="rap_nasral">
            <Router>
                <Switch>
                    <Route path="/lessons_selection">
                        <LessonsSelection />
                    </Route>
                    <Route path="/teachers_articles">
                        {/* <TeachersArticles /> */}
                    </Route>
                    <Route path="/community_articles">
                        <CommunityArticles />
                    </Route>
                    <Route path='/'>
                        <a href="/lessons_selection">Hello, I'm the rap Nasral</a>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default RapNasral;