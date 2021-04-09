import React from 'react';
import './TeachersBlock.css';

function TeachersBlock() {
    return (
        <div className="teachers_block">
            <div className="teachers_block_title">
                <div className="teachers_block_title_fill unselectable_text">
                    <span>Our teachers:</span>
                </div>
            </div>
            <div className="teachers_block_carousel">
                <div className="carousel_track">
                        {/** need to add all elements twice,
                         * otherwse the carousel will not worl properly
                         */}
                         
                        <div className="carousel_element">
                            <span className="name_of_teacher unselectable_text">LIL TOKMISTIK228</span>
                            <span className="description_of_teacher unselectable_text">Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
                        </div>
                        <div className="carousel_element">
                            <span className="name_of_teacher unselectable_text">GERMAN</span>
                            <span className="description_of_teacher unselectable_text">Lorem ipsum dolor sit amet consectetur.</span>
                        </div>
                        <div className="carousel_element">
                            <span className="name_of_teacher unselectable_text">mc.bread</span>
                            <span className="description_of_teacher unselectable_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                        </div>
                         
                         {/**repeat of elements */}
                        <div className="carousel_element">
                            <span className="name_of_teacher unselectable_text">LIL TOKMISTIK228</span>
                            <span className="description_of_teacher unselectable_text">Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
                        </div>
                        <div className="carousel_element">
                            <span className="name_of_teacher unselectable_text">GERMAN</span>
                            <span className="description_of_teacher unselectable_text">Lorem ipsum dolor sit amet consectetur.</span>
                        </div>
                        <div className="carousel_element">
                            <span className="name_of_teacher unselectable_text">mc.bread</span>
                            <span className="description_of_teacher unselectable_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                        </div>
                        
                </div>
            </div>
        </div>
    );
}

export default TeachersBlock;