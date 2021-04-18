import React, { useEffect, useState } from 'react';
import './Post.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ReplyIcon from '@material-ui/icons/Reply';
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Rotate90DegreesCcwOutlined } from '@material-ui/icons';

function Post() {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [numberOfComments, setNumberOfComments] = useState(0);

    const handleLikeClick = () => {
        if (isLiked) {
            setIsLiked(false);
            setLikes(likes - 1);
        } else {
            setIsLiked(true);
            setLikes(likes + 1);
        }
    }

    return (
        <div className="post">
            <div className="post_header">'
                header
            </div>
            <div className="post_text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe illo nostrum temporibus maxime reiciendis incidunt consequatur magni molestias? Libero distinctio debitis beatae provident, id enim, eveniet iure nemo itaque sint minima error aspernatur. Est, in eius quibusdam accusantium fugit molestias nam illum voluptate facilis odio eos ex autem explicabo libero similique sequi recusandae tempore quo voluptatum, rem voluptatibus dolore esse. Esse magni, dolore, quas fuga iusto quibusdam sed sapiente, obcaecati rerum eligendi saepe nulla! Ratione, veritatis. Nesciunt quisquam sapiente placeat animi earum hic velit minima! Dolor explicabo ut neque, consectetur laborum hic velit corporis, recusandae, libero omnis temporibus veritatis labore?
            </div>
            <div className="post_footer">
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button onClick={handleLikeClick}><FavoriteIcon className={isLiked ? "like_icon like_red" : "like_icon"} />{likes}</Button>
                    <Button><CommentIcon className="comment_icon" />{numberOfComments}</Button>
                    <Button><ReplyIcon className="share_icon" /></Button>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default Post;