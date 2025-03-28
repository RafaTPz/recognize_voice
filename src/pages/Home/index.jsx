import React, { useState, useEffect } from "react";
import { AreaHome, AreaVoz, Container, Button } from './styled'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Home = () => {
    const {
        transcript,
        listening,
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

    if (!browserSupportsSpeechRecognition) {
        return <span>O navegador não suporta o reconhecimento de voz.</span>;
    }

    return (
        <AreaHome>
            <Container>
                <AreaVoz>
                    <br />
                    <p>Microfone: {listening ? 'On' : 'Off'}</p>
                    {listening && <p>Tempo corrido: {counter} segundos</p>}
                    <Button onClick={() => SpeechRecognition.startListening({language: "pt-br", continuous: true})}>Iniciar</Button>
                    <Button onClick={SpeechRecognition.stopListening}>Pausar</Button>
                    <textarea cols="40" rows="20" value={transcript} readOnly />
                </AreaVoz>
            </Container>
        </AreaHome>
    );
}

export default Home;
