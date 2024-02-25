import { useState } from "react";

const setCookie = () => {
  fetch('https://fancy-large-scale.glitch.me/set-cookie', { method: "GET", credentials: 'include' })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text(); // or response.json() if expecting JSON data
    })
    .then(data => {
      console.log('Response:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function App() {
  const [text, setText] = useState("");
  return (
    <div>
      <form>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <input type="submit" onClick={e => {
          e.preventDefault();
          setCookie();
        }} />
      </form>
      <p>{text}</p>
      <iframe src="https://fancy-large-scale.glitch.me/"></iframe>
    </div>
  );
}

export default App;
