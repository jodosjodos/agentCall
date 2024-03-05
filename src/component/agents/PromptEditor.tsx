
import styled from "styled-components";
import { Header } from "./Header";
import { Col } from "react-bootstrap";

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Menu = styled.div`
  border-radius: 16px;
  padding: 24px;
  min-width: 394px;
  background-color: #0b2227;
`;
const Paragraph = styled.div`
  margin-bottom: 0px;
  color: #96adb3;
`;
const EditorContainer = styled.div`
  color: white;
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
function PromptEditor() {
  

  return (
    <Col>
      <Header />

      <PromptContainer>
        <Row className="align-items-start gap-3">
          <EditorContainer>
            <Head>Test</Head>
            <p>Advanced editor</p>
            <p>Hello my name is agent smith, pleased to meet you</p>
            <p>Await response</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam ultricies enim
              amet tellus rhoncus quis dolor. Egestas porta lobortis vitae
              elementum scelerisque augue duis laoreet in. Ultrices ante
              venenatis et quam. Sagittis pulvinar massa potenti amet blandit
              egestas fusce.
            </p>
            <p>Await response</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam ultricies enim
              amet tellus rhoncus quis dolor. Egestas porta lobortis vitae
              elementum scelerisque augue duis laoreet in. Ultrices ante
              venenatis et quam. Sagittis pulvinar massa potenti amet blandit
              egestas fusce.
            </p>
            <p>Await response</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam ultricies enim
              amet tellus rhoncus quis dolor. Egestas porta lobortis vitae
              elementum scelerisque augue duis laoreet in. Ultrices ante
              venenatis et quam. Sagittis pulvinar massa potenti amet blandit
              egestas fusce.
            </p>
            <p>Await response</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam ultricies enim
              amet tellus rhoncus quis dolor. Egestas porta lobortis vitae
              elementum scelerisque augue duis laoreet in. Ultrices ante
              venenatis et quam. Sagittis pulvinar massa potenti amet blandit
              egestas fusce.
            </p>
            <p>Await response</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam ultricies enim
              amet tellus rhoncus quis dolor. Egestas porta lobortis vitae
              elementum scelerisque augue duis laoreet in. Ultrices ante
              venenatis et quam. Sagittis pulvinar massa potenti amet blandit
              egestas fusce.
            </p>
            <p>Await response</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam ultricies enim
              amet tellus rhoncus quis dolor. Egestas porta lobortis vitae
              elementum scelerisque augue duis laoreet in. Ultrices ante
              venenatis et quam. Sagittis pulvinar massa potenti amet blandit
              egestas fusce.
            </p>
          </EditorContainer>
          <Menu>
            <Row className="justify-content-start gap-2 py-2 ">
              <img src="/knowledge_base.svg" alt="" width={20} />
              <Paragraph>Connect a knowledge base</Paragraph>
            </Row>
            <Row className="justify-content-start gap-2 py-2 ">
              <img src="/flash.svg" alt="" />
              <Paragraph>Add an action</Paragraph>
            </Row>
            <Row className="justify-content-start gap-2 py-2 ">
              <img src="/magic.svg" alt="" />
              <Paragraph>Magically generate prompt using AI</Paragraph>
            </Row>
            <Row className="justify-content-start gap-2 py-2 ">
              <img src="/paste.svg" alt="" />
              <Paragraph>Post call notes</Paragraph>
            </Row>
          </Menu>
        </Row>
      </PromptContainer>
    </Col>
  );
}

export default PromptEditor;
