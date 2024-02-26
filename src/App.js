import Header from './components/header';
import styled from 'styled-components';
import Search from './components/search';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(110deg, #142634 35%, #326589b4 104%);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
    </AppContainer>
  );
}

export default App
