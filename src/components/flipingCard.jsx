import React from 'react';
import classes from '../stylesheet/Round3.module.scss';

function FlipingCard({ isFlipped, addFlip, disabled }) {
    return (
        <>
            <div className={classes.card} onClick={!disabled ? addFlip : null}>
                {/* Add 'flipped' class if the card is flipped */}
                <div className={`${classes.content} ${isFlipped ? classes.flipped : ''}`}>
                    <div className={classes.front}>
                        Front
                    </div>
                    <div className={classes.back}>
                        Back!
                    </div>
                </div>
            </div>
        </>
    );
}

export default FlipingCard;
