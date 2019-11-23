import React, { useState, useEffect } from "react";
import * as crud from "./thns-crud";
import "react-bulma-components/dist/react-bulma-components.min.css";
import {
  Box,
  Container,
  Content,
  Footer,
  Form,
  Heading,
  Navbar,
  Section,
  Tile
} from "react-bulma-components";

// setting consts
const InputRows = 25;

const App: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [validMsg, setValidMsg] = useState("");
  const [validColor, setValidColor] = useState("help is-success");

  const updateValid = (valid: boolean, err: string) => {
    setValidMsg(valid ? "ok" : "ng:" + err);
    setValidColor(valid ? "help is-success" : "help is-danger");
  };

  const convert = async (input: string) => {
    const req = { convId: 0, input: input, output: "", valid: false, err: "" };
    const res = await crud.postConv(req);
    updateValid(res.data.valid, res.data.err);
    setOutput(res.data.output);
  };

  function handleChangeInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    convert(e.target.value);
    setInput(e.target.value);
  }

  function handleChangeOutput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setOutput(e.target.value);
  }

  useEffect(() => {
    document.title = `${input} done.`;
  }, [input, output]);

  return (
    <div className="App">
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item>
            <p>
              <strong>Thns</strong>
            </p>
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
      </Navbar>
      <Section>
        <Container>
          <Box>
            <Tile kind="ancestor">
              <Tile kind="parent" vertical>
                <Tile>
                  <Tile kind="parent">
                    <Tile kind="child" color="success" notification>
                      <Heading>condition creater</Heading>
                      <Heading subtitle>
                        thns condition creater simple web app, convert input to
                        output.
                      </Heading>
                    </Tile>
                  </Tile>
                </Tile>
                <Tile>
                  <Tile kind="parent">
                    <Tile
                      renderAs="article"
                      kind="child"
                      color="light"
                      notification
                    >
                      <Form.Field>
                        <Form.Label>Input</Form.Label>
                        <p className={validColor}>{validMsg}</p>
                        <Form.Control>
                          <Form.Textarea
                            placeholder="'table1 val1"
                            value={input}
                            onChange={handleChangeInput}
                            size="small"
                            rows={InputRows}
                          />
                        </Form.Control>
                      </Form.Field>
                    </Tile>
                  </Tile>
                  <Tile kind="parent">
                    <Tile
                      renderAs="article"
                      kind="child"
                      color="info"
                      notification
                    >
                      <Form.Field>
                        <Form.Label>Output</Form.Label>
                        <Form.Control>
                          <Form.Textarea
                            value={output}
                            onChange={handleChangeOutput}
                            readOnly
                            rows={InputRows}
                            size="small"
                          />
                        </Form.Control>
                      </Form.Field>
                    </Tile>
                  </Tile>
                </Tile>
              </Tile>
            </Tile>
          </Box>
          <Footer>
            <Content style={{ textAlign: "center" }}>
              <p>
                <strong>thns</strong> by{" "}
                <a href="https://github.com/ynishi/thns">ynishi</a>. The source
                code is licensed{" "}
                <a href="https://github.com/ynishi/thns/master/LICENSE">BSD3</a>
                . The website content is licensed (c) ynishi
              </p>
            </Content>
          </Footer>
        </Container>
      </Section>
    </div>
  );
};

export default App;
