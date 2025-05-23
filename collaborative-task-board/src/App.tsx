import styled from "styled-components";
import GlobalStyle from "./styles/Globalstyle";

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
    </Container>
  );
}

export default App;
