import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getWord } from "../actions";
import styled from "styled-components";


const StyledSearch = styled.form`
 margin-left: 2rem;
`

const WordContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  align-items: left;
  text-align: start;

  .partOfSpeech{
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .partOfSpeech span{
    font-weight: bold;
  }
`;

const CurrentWord = styled.h2`
  font-size: 4rem;
  text-align: center;
 
`;

function Word(props) {
  const { word, definitions } = props.wordInfo;
  const { isFetching, error, getWord } = props;
  const [wordToSearchFor, setWordToSearchFor] = useState("");

  useEffect(() => {
    getWord("run");
  }, []);

  const handleChange = (e) => {
    setWordToSearchFor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getWord(wordToSearchFor);
  };

  if (isFetching) return <h2>Looking up your word!</h2>;

  if (error) return <h2>Sorry! There was an error: {error}</h2>;

  return (
  <>

    <StyledSearch onSubmit={handleSubmit}>
      <label>
        Search:
        <input type="text" onChange={handleChange} value={wordToSearchFor} />
      </label>
      <button>Get a new word</button>
    </StyledSearch>

    <WordContainer>
      <header>
        <CurrentWord>{word}</CurrentWord>
      </header>
      {definitions.map((def) => {
        return (
          <div>
            <p className='partOfSpeech'>Part of Speech: <span>{def.partOfSpeech}</span></p>
            {def.meaning.map((d) => (
              <li>{d}</li>
            ))}
          </div>
        );
      })}
    </WordContainer>

    </>
  );
}

const mapStateToProps = (state) => {
  return {
    wordInfo: state.wordInfo,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getWord })(Word);
