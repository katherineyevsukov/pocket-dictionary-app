import './App.css';
import Word from './components/Word';
import styled from 'styled-components';
import dictionary from './images/dictionary.png'

const StyledHeader = styled.header`
  border-bottom: 1px solid grey;
  margin: 0 0.5em;
  font-size: 7rem;
  display: flex;
  justify-content: space-between;

  img{
    width: 100%;
    max-width: 2em;
    height: auto;
  }
`

const StyledTitle = styled.h1 `
  font-style: oblique;
  margin: auto 0;
`

function App() {
  return (
    <div className="App">
      <StyledHeader>
        <StyledTitle>Dictionary</StyledTitle>
        <img src={dictionary} alt="dictionary"/>
      </StyledHeader>
      <Word />
    </div>
  );
}

export default App;
