import React, { useEffect, useState } from 'react';
import classes from '../stylesheet/Round3.module.scss';
import FlipingCard from '../components/flipingCard';
import Base from '../components/base';


function Round3() {
     const [flippedCardIndex, setFlippedCardIndex] =useState(()=> {
        const round3flipedCard = window.localStorage.getItem("round3FlipedItem");
        return round3flipedCard ? JSON.parse(round3flipedCard) : null;
    });

    // Handler to flip a specific card
    const handleFlip = (index) => {
        setFlippedCardIndex(index);
        // window.localStorage.setItem("round3FlipedItem", JSON.stringify(flippedCardIndex))
    };

    useEffect(()=>{
            window.localStorage.setItem("round3FlipedItem",JSON.stringify(flippedCardIndex))
    },[flippedCardIndex])
       
    return (
        <Base>
            <div className={`container ${classes.main_box}`} style={{ marginTop: '2rem' }}>
                <div className={classes.firstRow} style={{ marginTop: '15rem' }}>
                    {[0, 1, 2].map((index) => (
                        <FlipingCard
                            key={index}
                            isFlipped={flippedCardIndex === index}
                            addFlip={() => handleFlip(index)}
                            disabled={flippedCardIndex !== null && flippedCardIndex !== index}
                        />
                    ))}
                </div>
                <div className={classes.secondRow}>
                    {[3, 4, 5].map((index) => (
                        <FlipingCard
                            key={index}
                            isFlipped={flippedCardIndex === index}
                            addFlip={() => handleFlip(index)}
                            disabled={flippedCardIndex !== null && flippedCardIndex !== index}
                        />
                    ))}
                </div>
                <div className={classes.thirdRow}>
                    {[6, 7, 8].map((index) => (
                        <FlipingCard
                            key={index}
                            isFlipped={flippedCardIndex === index}
                            addFlip={() => handleFlip(index)}
                            disabled={flippedCardIndex !== null && flippedCardIndex !== index}
                        />
                    ))}
                </div>
            </div>
        </Base>
    );
}

export default Round3;
