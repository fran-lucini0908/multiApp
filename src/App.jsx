// Importa hooks e componentes do React e bibliotecas externas.
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

// Estiliza o contêiner principal do aplicativo.
const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  min-width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
`;

// Define o componente principal do aplicativo.
const App = () => {
  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  );
};

// Exporta o componente App para ser utilizado em outras partes da aplicação.
export default App;
