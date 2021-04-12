import React from 'react';
import './SideBar.css';
import {Link} from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import BookmarkIcon from '@material-ui/icons/Bookmark';

function SideBar() {
    return (
        <div className="CA_sidebar_wrapper">
            <div className="CA_sidebar_inner_wrapper">
                <div className="CA_sidebar">
                    <div className="CA_sidebar_header">
                        <div className="CA_number_of_articles">
                            <span>23</span>
                            articles
                        </div>
                        <div className="CA_number_of_authors">
                            <span>8</span>
                            authors
                        </div>
                    </div>
                    <div className="CA_sidebar_options">
                        <Link to="/community_articles" className="CA_sidebar_option"><span></span><AddIcon /> Create Article</Link>
                        <Link to="/community_articles" className="CA_sidebar_option"><span></span><EditIcon /> Edit Article</Link>
                        <Link to="/community_articles" className="CA_sidebar_option"><span></span><DeleteIcon /> Delete Article</Link>
                        <Link to="/community_articles" className="CA_sidebar_option"><span></span><BookmarkIcon /> Bookmarks</Link>
                    </div>
                    <div className="CA_sidebar_footer">
                        <Link to="/community_articles" className='CA_sidebar_footer_link' > {/** thinkg to add donation link or something like that */} </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;