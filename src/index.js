import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/App.scss";
import RecipeSuggestion from './components/Recipes/RecipeSuggestion';

const App = () => {
  return (
      <div>
        <RecipeSuggestion />
      </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));