import { useState } from 'react';
import './App.css'

export default function App() {
  const [message, setMessage] = useState('');

  const [updated, setUpdated] = useState(message);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setUpdated(message);
  };

  return (
    <div className='App'>
      <input
        type="text"
        id="message"
        name="message"
        placeholder='Enter Text'
        onChange={handleChange}
        value={message}
      />

      <h2>Message: {message}</h2>

      <h2>Saqlash: {updated}</h2>

      <button onClick={handleClick}>Saqlash</button>
    </div>
  );
}