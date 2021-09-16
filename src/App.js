import './App.css';
import Word from './components/Word';
import styled from 'styled-components';

const StyledHeader = styled.h1 `
  font-size: 7rem;
  border-bottom: 1px solid grey;
  margin: 2rem;
  font-style: oblique;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StyledHeader>Dictionary</StyledHeader>
      </header>
      <Word />
    </div>
  );
}

export default App;
