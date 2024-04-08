import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {AreaBotao, Container, AreaVoz, Button} from './styled';
function Botao() {
  const [transcript, setTranscript] = useState('');
  const { listening } = useSpeechRecognition();

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
  }, []);

  const toggleListen = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  const handleListen = (result) => {
    setTranscript(result);
  };

  return (
    <AreaBotao>
            <Container>
                <AreaVoz>
                    <Button onClick={toggleListen}>
                      {listening ? 'On' : 'Off'}
                    </Button>
                    <p>{transcript}</p>
                </AreaVoz>
            </Container>
    </AreaBotao>
  );
}

export default Botao;