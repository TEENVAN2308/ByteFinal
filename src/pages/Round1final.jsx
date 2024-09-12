import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../stylesheet/Round1final.css';
import { getQuestions } from '../utils/getData.js';
import { postRound1Questions } from "../utils/postData.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Base from '../components/base'


function Round1final() {
    const [data, setData] = useState([]);
    const [answeredQuestions, setAnsweredQuestions] = useState({}); // Track answered questions
    const [secondsRemaining, setSecondsRemaining] = useState(() => {
        const storedTime = window.localStorage.getItem("timer");
        return storedTime ? JSON.parse(storedTime) : 2000;
    });

    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [AnsPayload, setAnsPayload] = useState(new Map()); // Use state to track selected answers

    const getSelectedOption = (question, answer) => {
        console.log("getting data from child to parent :", question, answer);

        setAnsPayload((prevPayload) => {
            const newPayload = new Map(prevPayload);
            newPayload.set(question, answer);
            return newPayload;
        });
    };

    // const handleConfirmSubmit = () => {
    //     setShowModal(false);
    //     console.log("Confirmed submission");
    //     console.log(AnsPayload);  

    // };

    //posting data when clicking on confirm submit button
    const handleConfirmSubmit = async () => {
        setShowModal(false);
        console.log("Confirmed submission");
        console.log(AnsPayload);  // Should now have the correct values
    
        // Convert the Map to an object
        const payloadObject = Object.fromEntries(AnsPayload);
    
        try {
            // Post the data using the postRound1Questions function
            const teamName=localStorage.getItem("teamName");
            const response = await postRound1Questions(payloadObject,teamName);
            console.log('Data successfully posted:', response);
            
        } catch (error) {
            console.error('Error posting data:', error);
            
        }
    };


    useEffect(() => {
        getQuestions()
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched data:", data);
                setData(data.slice(0, 20));
            })
            .catch((error) => {
                console.error("Error fetching questions:", error);
            });
    }, []);

    useEffect(() => {
        window.localStorage.setItem("timer", JSON.stringify(secondsRemaining));
    }, [secondsRemaining]);

    useEffect(() => {
        // Navigate immediately if the timer is already 0
        if (secondsRemaining === 0) {
            navigate('/round1result');
            return;
        }

        let timer;
        if (isTimerRunning && secondsRemaining > 0) {
            timer = setInterval(() => {
                setSecondsRemaining((prevSeconds) => {
                    if (prevSeconds <= 1) {
                        clearInterval(timer);
                        setIsTimerRunning(false);
                        navigate('/round1result');
                        return 0;
                    }
                    return prevSeconds - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isTimerRunning, secondsRemaining, navigate]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secondsPart = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secondsPart).padStart(2, '0')}`;
    };



    const handleSubmitClick = () => {
        setShowModal(true);
        console.log("Submit clicked");
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };



    // Function to handle option selection
    const handleOptionSelect = (questionIndex) => {
        setAnsweredQuestions((prevAnsweredQuestions) => ({
            ...prevAnsweredQuestions,
            [questionIndex]: true,  // Mark the question as answered
        }));
    };

    return (
        <>
            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1100,
                }}>
                    <div style={{
                        background: 'linear-gradient(to right , #03193a,rgb(22, 80, 160))',
                        borderRadius: '5px',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
                        maxWidth: '500px',
                        width: '100%',
                        padding: '20px',
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottom: '1px solid #e5e5e5',
                            paddingBottom: '10px',
                        }}>
                            <h5 style={{ margin: 0, color: 'white', fontSize: '4rem' }}>{"Alert"}</h5>
                            <button type="button" style={{
                                background: 'none',
                                border: 'none',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                            }} onClick={handleCloseModal}>
                                &times;
                            </button>
                        </div>
                        <div style={{ padding: '10px 0', color: 'white', fontSize: '1.5rem' }}>
                            <p>{"Are you sure you want to submit your answers? Once submitted, you will not be able to change your answers. Please review your selections carefully before confirming"}</p>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            borderTop: '1px solid #e5e5e5',
                            paddingTop: '10px',
                        }}>
                            <button className="btn btn-warning m-2 fs-3" type="button" style={{
                                cursor: 'pointer',
                            }} onClick={handleCloseModal}>
                                Cancel
                            </button>
                            <button className="btn btn-danger m-2 fs-3" type="button" style={{
                                cursor: 'pointer',
                            }} onClick={handleConfirmSubmit}>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="page-cover">


                <div className="container">
                    <Base>
                    <div className="TopSection">

                        <div className="round1Timer" style={{marginTop:'15rem'}}>
                            <h1>{formatTime(secondsRemaining)}</h1>
                        </div>

                        <div className="pageHeding" style={{marginTop:'15rem'}}>
                            <h1 className="heading">Questions</h1>
                        </div>

                        <div className="FinalButtonDiv" style={{marginTop:'15rem'}}>
                            <button type="button" className="btn btn-warning rounded-pill  fs-2" onClick={handleSubmitClick} >
                                Submit
                            </button>
                        </div>

                    </div>
                    <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow">
                                <ion-icon name="arrow-back-outline"></ion-icon>
                            </div>
                            <div className="swiper-button-next slider-arrow">
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </Base>

                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={false}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        pagination={{
                            el: '.swiper-pagination',
                            clickable: true,
                            renderBullet: (index, className) => {
                                return `<span class="${className}">${index + 1}</span>`;
                            }
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container"
                    >
                    {/* swiper buttons */}
                    
                        {/* swiper buttons */}
                        {data.map((questionData, index) => (
                            <SwiperSlide key={index} className="swiper-slide">
                                <QuestionCard
                                    questionNumber={index + 1}
                                    question={questionData.question}
                                    option1={questionData.choices[0]}
                                    option2={questionData.choices[1]}
                                    option3={questionData.choices[2]}
                                    option4={questionData.choices[3]}
                                    onOptionSelected={getSelectedOption}
                                />
                            </SwiperSlide>
                        ))}

                        
                    </Swiper>
                </div>



            </div>
        </>
    );
}

export default Round1final;
