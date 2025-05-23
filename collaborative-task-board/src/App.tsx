import styled from "styled-components";
import GlobalStyle from "./styles/Globalstyle";
import { useSetRecoilState } from "recoil";
import { boardModalState } from "./atom";
import { useCallback } from "react";
import BoardModal from "./components/BoardModal";

const AddBoardButton = styled.button`
  position: absolute;
  top: 40px;
  right: 50px;
  border: none;
  outline: none;
  background-color: rgba(178, 190, 195, 0.5);
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 35px;
  color: white;
  padding: 10px 15px;
  border-radius: 50%;
  font-size: 25px;
  cursor: pointer;
`;

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
  const setBoardModal = useSetRecoilState(boardModalState);

  const handleAddBoardButton = useCallback(() => {
    setBoardModal(true);
  }, [setBoardModal]);
  return (
    <Container>
      <GlobalStyle />
      <AddBoardButton type="button" onClick={handleAddBoardButton}>
        ✚
      </AddBoardButton>
    </Container>
  );
}

export default App;
