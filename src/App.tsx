import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import {
  Box,
  Container,
  Content,
  Footer,
  Heading,
  Navbar,
  Section,
  Tile
} from "react-bulma-components";
import Home from "./components/Home";

const App: React.FC = () => {
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
                <Home></Home>
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
