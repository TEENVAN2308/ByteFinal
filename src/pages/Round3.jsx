import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import classes from '../stylesheet/Round3.module.scss';
import FlipingCard from '../components/flipingCard';
import Base from '../components/base';
import axios from 'axios';

Modal.setAppElement('#root'); // To avoid accessibility warnings

function Round3() {
    const [flippedCardIndex, setFlippedCardIndex] = useState(() => {
        const round3flipedCard = window.localStorage.getItem("round3FlipedItem");
        return round3flipedCard ? JSON.parse(round3flipedCard) : null;
    });

    const [question, setQuestion] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [selectedDomain, setSelectedDomain] = useState(""); 
    // Store the selected domain

    useEffect(() => {
        window.localStorage.setItem("round3FlipedItem", JSON.stringify(flippedCardIndex));
    }, [flippedCardIndex]);

    const fetchQuestion = async () => {
        try {
            
            const response = await axios.get(`https://byte-0dmt.onrender.com/api/questions/round3`);
            if (response.status !== 200) {
                throw new Error('Network response was not ok');
            }
            const data = response.data;
            setQuestion(data.question);
            console.log("Fetched question:", data.question);
        } catch (error) {
            console.error('Fetch question failed:', error);
        }
    };

    const handleFlip = (index) => {
        setFlippedCardIndex(index);
        // setSelectedDomain(domain); // Store the selected domain
        fetchQuestion(); // Fetch the question for the specific domain
        setIsModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openVSCode = () => {
        window.location.href = `vscode://`;
        localStorage.removeItem("teamName");
        localStorage.removeItem("r2q1");
        localStorage.removeItem("r2q2");
        localStorage.removeItem("round1Completed");
        localStorage.removeItem("round1CompletedAt");
        localStorage.removeItem("round3FlipedItem");
        localStorage.removeItem("round1ResultTimer");
        localStorage.removeItem("round2ResultTimer");
        
    };


    return (
        <Base>
            <div className={`container ${classes.main_box}`} style={{ marginTop: '2rem' }}>
                <div className={classes.firstRow} style={{ marginTop: '25rem' }}>
                    {["Mystery Box 1","Mystery Box 2","Mystery Box 3","Mystery Box 4","Mystery Box 5"].map((card,index) => (
                        <FlipingCard
                            key={index}
                            isFlipped={flippedCardIndex === index}
                            addFlip={() => handleFlip(index)} // Pass the domain to handleFlip
                            disabled={flippedCardIndex !== null && flippedCardIndex !== index}
                            title={card}
                            question={question} // Pass card title to the FlipingCard component
                        />
                    ))}
                </div>
            </div>

            {/* Modal to show the question */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className={classes.modal}
                overlayClassName={classes.overlay}
            >
                <div className="modalss">
                <h1> Question</h1>
                <h2>{question}</h2>
                <button  style={{marginRight:'3rem',backgroundColor:"black", color:"white"}} className='btn btn-primary' onClick={openVSCode}>Open VS Code</button>
                <button  style={{marginLeft:'3rem',backgroundColor:"black", color:"white"}} className='btn btn-primary'  onClick={closeModal}>Close</button>
                </div>
            </Modal>
        </Base>
    );
}

export default Round3;
