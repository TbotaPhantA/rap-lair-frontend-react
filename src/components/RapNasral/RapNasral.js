import React from 'react';
import './RapNasral.css';
import LessonsSelection from './LessionsSelection/LessonsSelection';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import CommunityArticles from './CommunityArticles/CommunityArticles';
import CArticle from './CommunityArticles/CArticle/CArticle';
import Profile from './Profile/Profile';

function RapNasral() {
    return (
        <div className="rap_nasral">
            <Switch>
                <Route path="/profile/:user_id">
                    <Profile />
                </Route>
                <Route path="/lessons_selection">
                    <LessonsSelection />
                </Route>
                <Route path="/teachers_articles">
                    {/* <TeachersArticles /> */}
                </Route>
                <Route path="/community_articles/:CA_id">
                    <CArticle />
                </Route>
                <Route path="/community_articles">
                    <CommunityArticles />
                </Route>
                <Route path='/'>
                    <Redirect to="/lessons_selection" />
                </Route>
            </Switch>
        </div>
    );
}

export default RapNasral;