import React, { useEffect } from "react";
import { Form, Tile } from "react-bulma-components";
import useConverter from "../hooks/useConverter";

const InputRows = 28;

const validColor = (isValid: boolean): string => {
  return "help" + (isValid ? " is-success" : " is-danger");
};

const Home: React.FC = () => {
  const { input, output, message, isValid, updateConvert } = useConverter();

  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateConvert(e.target.value);
  };

  useEffect(() => {
    document.title = `${input} done.`;
  }, [input]);

  return (
    <div className="Home">
      <Tile>
        <Tile kind="parent">
          <Tile renderAs="article" kind="child" color="light" notification>
            <Form.Field>
              <Form.Label>Input</Form.Label>
              <p className={validColor(isValid)}>{message}</p>
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
          <Tile renderAs="article" kind="child" color="info" notification>
            <Form.Field>
              <Form.Label>Output</Form.Label>
              <Form.Control>
                <Form.Textarea
                  value={output}
                  readOnly
                  rows={InputRows}
                  size="small"
                />
              </Form.Control>
            </Form.Field>
          </Tile>
        </Tile>
      </Tile>
    </div>
  );
};

export default Home;
