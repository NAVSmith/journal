import logo from './logo.svg';
import './App.css';
import React ,{ Fragment, useState } from 'react';

function App() {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [text, setText] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new entry object
    const newEntry = {
      title,
      date,
      text,
      favorite: false,
    };

    // Add the new entry to the entries array
    setEntries([...entries, newEntry]);

    // Clear the form inputs
    setTitle('');
    setDate('');
    setText('');
  };

  const handleFavoriteToggle = (index) => {
    const updatedEntries = [...entries];
    updatedEntries[index].favorite = !updatedEntries[index].favorite;
    setEntries(updatedEntries);
  };



  return (
    <Fragment>
    <div className="App">
      <header className="App-header">
        <h1>Journal App</h1>
      </header>
      <main>
        <section className="entry-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
            />
            <input
              type="date"
              placeholder="Date"
              value={date}
              onChange={handleDateChange}
            />
            <textarea
              placeholder="Text"
              value={text}
              onChange={handleTextChange}
            ></textarea>
            <button type="submit">Add Entry</button>
          </form>
        </section>
        <section className="entries-section">
          <div className="tab-bar">
            <div className="tab">
              <span className="badge">{entries.length}</span>
            </div>
            <div className="tab">
              <span className="badge">{entries.filter(entry => entry.favorite).length}</span>
            </div>
          </div>
          <ul className="entry-list">
            {entries.map((entry, index) => (
              <li key={index}>
                <h3>{entry.title}</h3>
                <p>{entry.date}</p>
                <p>{entry.text}</p>
                <button onClick={() => handleFavoriteToggle(index)}>
                  {entry.favorite ? '❤️' : '♡'}
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p>Journal App Footer</p>
      </footer>
    </div>
    </Fragment>
  );
}

export default App;


