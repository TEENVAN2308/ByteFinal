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
    const [selectedDomain, setSelectedDomain] = useState(""); // Store the selected domain

    useEffect(() => {
        window.localStorage.setItem("round3FlipedItem", JSON.stringify(flippedCardIndex));
    }, [flippedCardIndex]);

    const fetchQuestion = async (domain) => {
        try {
            domain = domain.toLowerCase();
            console.log(domain);
            
            const response = await axios.get(`http://localhost:3000/api/questions/round3?domain=${domain}`);
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

    const handleFlip = (index, domain) => {
        setFlippedCardIndex(index);
        setSelectedDomain(domain); // Store the selected domain
        fetchQuestion(domain); // Fetch the question for the specific domain
        setIsModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openVSCode = () => {
        window.location.href = `vscode://file/your-path-to-file-here`;
    };

    return (
        <Base>
            <div className={`container ${classes.main_box}`} style={{ marginTop: '2rem' }}>
                <div className={classes.firstRow} style={{ marginTop: '15rem' }}>
                    {['Frontend', 'Backend', 'DevOps'].map((card, index) => (
                        <FlipingCard
                            key={index}
                            isFlipped={flippedCardIndex === index}
                            addFlip={() => handleFlip(index, card)} // Pass the domain to handleFlip
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
                <h2>{selectedDomain} Question</h2>
                <p>{question}</p>
                <button onClick={openVSCode}>Open VS Code</button>
                <button onClick={closeModal}>Close</button>
            </Modal>
        </Base>
    );
}

export default Round3;
