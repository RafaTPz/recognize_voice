import React, { useState, useEffect } from "react";
import {AreaHome,AreaVoz,Container,Button} from './styled'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Home = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        if (listening) {
            setTimer(setInterval(() => setCounter(prevCounter => prevCounter + 1), 1000));
        } else {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [listening]);

    const resetTranscriptHandler = () => {
        resetTranscript();
        setCounter(0);
    };

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return(
        <AreaHome>
            <Container>
                <AreaVoz>
                    <br /><p>Microfone: {listening ? 'on' : 'off'}</p>
                    {listening && <p>Tempo corrido: {counter} segundos</p>}
                    <Button onClick={SpeechRecognition.startListening}>Start</Button>
                    <Button onClick={SpeechRecognition.stopListening}>Pause</Button>
                    <Button onClick={resetTranscriptHandler}>Reset</Button>
                    <p>{transcript}</p>
                </AreaVoz>
            </Container>
        </AreaHome>
    );
}

export default Home;
