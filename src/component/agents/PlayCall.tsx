import styled from "styled-components";
import { Header } from "./Header";
import { Col } from "react-bootstrap";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import WavesurferPlayer from "@wavesurfer/react";
import { useState } from "react";

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const WaveContainer=styled.div`
display:flex;
transform: rotate(90deg);
width:30px;
`
const EditorContainer = styled.div<{ $theme?: string }>`
width:100%;
  color: ${(props) => (props.$theme == "light" ? "#384B4F" : "white")};
`;
const PromptContainer = styled.div`
  padding: 20px;
`;
const Head = styled.div`
  color: #00b7df;
  font-size: 36px;
  font-weight: 600;
  line-height: 46px;
  letter-spacing: 0em;
  text-align: left;
`;

const GreenContainer = styled.div`
  border-radius: 16px;
  background-color: rgba(38, 246, 96, 0.15);
  padding: 4px 8px;
  height: fit-content;
  color: rgba(16, 122, 71, 1);
  width: fit-content;
  margin-bottom: 15px;
`;
const FlexContainer=styled.div`
width:100% !important;
justify-content:space-between;
align-items:start;
display:flex;
`

function PlayCall() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [isPlaying, setIsPlaying] = useState(false);
  const [wavesurfer, setWavesurfer] = useState(null)
  const onReady = (ws:any) => {
    setWavesurfer(ws)
    setIsPlaying(isPlaying)
  }
  const onPlayPause = () => {
    //@ts-ignore
    wavesurfer && wavesurfer.playPause()
  }
  return (
    <Col>
      <Header />

      <PromptContainer>
        <Row className="align-items-start gap-3">
          <EditorContainer $theme={theme}>
            <Head>Raam, Adi</Head>
            <p>05/05/2024</p>
            <FlexContainer className="flex-grow-1">
            
            <div className="flex-grow-1">
            <div className="mb-3">
              <div
                className="d-flex items-center justify-start"
              >
                <div
                  className="d-flex align-items-center justify-cente"
                  style={{ marginRight: '15px' }}
                >
                  <p>01:45</p>
                </div>
                <div>
                  <p style={{ fontWeight: 'bold' }}>Agentsmith</p>
                  <p>Hello my name is agent smith,pleased to meet you</p>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div
                className="d-flex items-center justify-start"
              >
                <div
                  className="d-flex align-items-center justify-cente"
                  style={{ marginRight: '15px' }}
                >
                  <p>01:45</p>
                </div>
                <div>
                  <GreenContainer>
                    <p className="mb-0">#complaint</p>
                  </GreenContainer>
                  <p style={{ fontWeight: 'bold' }}>Customer</p>
                  <p>Hello can we schedule a meeting.</p>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div
                className="d-flex items-center justify-start"
              >
                <div
                  className="d-flex align-items-center justify-cente"
                  style={{ marginRight: '15px' }}
                >
                  <p>01:45</p>
                </div>
                <div>
                  <p style={{ fontWeight: 'bold' }}>Agentsmith</p>
                  <p>Hello my name is agent smith,pleased to meet you</p>
                </div>
              </div>
            </div><div className="mb-3">
              <div
                className="d-flex items-center justify-start"
              >
                <div
                  className="d-flex align-items-center justify-cente"
                  style={{ marginRight: '15px' }}
                >
                  <p>01:45</p>
                </div>
                <div>
                  <p style={{ fontWeight: 'bold' }}>Agentsmith</p>
                  <p>Hello my name is agent smith,pleased to meet you</p>
                </div>
              </div>
            </div><div className="mb-3">
              <div
                className="d-flex items-center justify-start"
              >
                <div
                  className="d-flex align-items-center justify-cente"
                  style={{ marginRight: '15px' }}
                >
                  <p>01:45</p>
                </div>
                <div>
                  <p style={{ fontWeight: 'bold' }}>Agentsmith</p>
                  <p>Hello my name is agent smith,pleased to meet you</p>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div
                className="d-flex items-center justify-start"
              >
                <div
                  className="d-flex align-items-center justify-cente"
                  style={{ marginRight: '15px' }}
                >
                  <p>01:45</p>
                </div>
                <div>
                  <GreenContainer>
                    <p className="mb-0">#meeting</p>
                  </GreenContainer>
                  <p style={{ fontWeight: 'bold' }}>Customer</p>
                  <p>Hello can we schedule a meeting.</p>
                </div>
              </div>
            </div>
            </div>
            <div className="d-flex flex-column">
            <img src="/resume.svg" alt=""  onClick={onPlayPause}/>
            <WaveContainer>
            <WavesurferPlayer
                       
                      width={590}
                        height={32}
                        barHeight={14}
                        barGap={4}
                        autoScroll
                        
                        barRadius={100}
                        barWidth={3}
                        waveColor={"#0E2B31"}
                        progressColor="#96ADB3"
                        url="/piano3.mp3"
                        onReady={onReady}
                        
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                      />
            </WaveContainer>
            </div>
           
            </FlexContainer>
      
          </EditorContainer>
          
        </Row>
        
      </PromptContainer>
      
    </Col>
  );
}

export default PlayCall;
