import React from 'react';
import classes from '../stylesheet/Round3.module.scss';

function FlipingCard({ isFlipped, addFlip, disabled, title, question }) {
    return (
        <div className={classes.card} onClick={!disabled ? addFlip : null}>
             
            <div className={`${classes.content} ${isFlipped ? classes.flipped : ''}`}>
                <div className={classes.front}>
                    <div style={{fontSize:"2em"}} className={classes.title}>
                        {title}
                    </div>
                </div>
                <div className={classes.back} >
                    {question}
                    
                </div>
            </div>
        </div>
    );
}

export default FlipingCard;
