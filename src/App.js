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
     <div className="app">
      <header className="App-header" style={{ background: '#252629', color: '#ffffff' }}>
        <h1>Journal App</h1>
      </header>
      <main>
        <section className="entry-form" style={{ background: '#ffffff', color: '#252629' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            style={{ background: '#e4e8f0', color: '#252629' }}
          />
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            placeholder="Date"
            value={date}
            onChange={handleDateChange}
            style={{ background: '#e4e8f0', color: '#252629' }}
          />
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            placeholder="Text"
            value={text}
            onChange={handleTextChange}
            style={{ background: '#e4e8f0', color: '#252629' }}
          ></textarea>
          <button type="submit" style={{ background: '#ff4a11', color: '#ffffff' }}>Add Entry</button>
          </form>
        </section>
        <section className="entries-section" style={{ background: '#ffffff', color: '#252629' }}>
          <div className="tab-bar">
            <div className="tab">
              <span className="badge" style={{ background: '#ff4a11', color: '#ffffff' }}>{entries.length}</span>
            </div>
            <div className="tab">
              <span className="badge" style={{ background: '#ff4a11', color: '#ffffff' }}>
                {entries.filter(entry => entry.favorite).length}
              </span>
            </div>
          </div>
          <ul className="entry-list">
            {entries.map((entry, index) => (
              <li key={index}>
                <h3>{entry.title}</h3>
                <p>{entry.date}</p>
                <p>{entry.text}</p>
                <button
                  onClick={() => handleFavoriteToggle(index)}
                  style={{ background: '#ff4a11', color: '#ffffff' }}
                >
                  {entry.favorite ? '⭐️' : '☆'}
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer style={{ background: '#252629', color: '#ffffff' }}>
        <p>Journal App Footer</p>
      </footer>
    </div>    
    </Fragment>
  );
}

export default App;


