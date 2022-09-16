import './App.css';
import { saveAs } from 'file-saver';
import React, { useState } from 'react';

function App() {
  // DECLARE MY STATE VARIABLE
  const [topText, setTopText] = useState();
  const [bottomText, setBottomText] = useState();
  const [memeTemplate, setMemeTemplate] = useState();
  const [url, setUrl] = useState(
    'https://api.memegen.link/images/ugandanknuck/we-suffer-more-in-imagination/than-in-reality.jpg',
  );
  return (
    <div className="App">
      <h1> Meme Generator </h1>
      <div>
        <label htmlFor="top"> Top Text </label>
        <input
          name="top-text"
          id="top-text"
          value={topText}
          onChange={(event) => {
            setTopText(event.currentTarget.value);
          }}
        />
      </div>

      <div>
        <img
          src={url}
          alt="template meme"
          height="400"
          data-test-id="meme-image"
        />
      </div>
      <div>
        <label htmlFor="top"> Bottom Text </label>
        <input
          name="bottom-text"
          id="bottom-text"
          value={bottomText}
          onChange={(event) => {
            setBottomText(event.currentTarget.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="Meme Template">Meme template</label>
        <input
          name="meme-template"
          id="meme-template"
          value={memeTemplate}
          onChange={(event) => {
            setMemeTemplate(event.currentTarget.value);
          }}
        />
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <button
          id="setUrl"
          onClick={() => {
            setUrl(
              `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.jpg`,
            );
          }}
        >
          Generate
        </button>
      </form>
      <div>
        <button
          onClick={() => {
            saveAs(
              `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.jpg`,
              'image.jpg',
            );
          }}
        >
          {' '}
          Download{' '}
        </button>
      </div>
    </div>
  );
}

export default App;

// This-is-my-first-attempt not-my-last-one

// - Save 3 variables with use state hook
// - Transform inputs into control inputs in React

// I NEED LABELS ASSOCIATED WITH EACH BUTTON
// NEEDS TO PULL IN IMAGES FROM https://memegen.link/
// The image element needs to have an html attribute set as follows: data-test-id="meme-image"
// The meme template selector element needs to have a label element associated with it containing the text Meme template
// If the user follows the steps below, the doge meme template needs to be selected:
// Click on the label of the meme template selector
// Clear any existing value (eg. with a text box)
// Type the text doge
// Hit enter
//  Download the meme by clicking on a button
//  The button element needs to contain the text Download
