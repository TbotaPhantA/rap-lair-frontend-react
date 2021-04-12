import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
           <p class="copyright"> 
                Copyright &copy;{new Date().getFullYear()} 
                Все маи права защищены!!! | Не вздумай воровать гадюка!!! <i class="fa fa-heart-o" aria-hidden="true"></i>
                by <a href="https://youtu.be/ox6ER0iUVBw" target="_blank"> Спасибо =)</a>
            </p>
        </div>
    );
}

export default Footer;