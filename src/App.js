import logo from './logo.svg';
import './App.css';
import React ,{ Fragment, useState } from 'react';
import Form from './components/form/index.js'

function App() {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [text, setText] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
     <article className="app">
      <header className="App-header">
        <h1>Journal App</h1>
      </header>
      <main>
        <Form className="entry-form" onSubmit={handleSubmit}>
        <fieldset className='input_group'>  
        <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            style={{ background: '#e4e8f0', color: '#252629' }}
          />
          </fieldset>
          <fieldset className='input_group'>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              placeholder="Date"
              value={date}
              onChange={handleDateChange}
              style={{ background: '#e4e8f0', color: '#252629' }}
            />
          </fieldset>
          <fieldset className='input_group'>  
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            placeholder="Text"
            value={text}
            onChange={handleTextChange}
            style={{ background: '#e4e8f0', color: '#252629' }}
          ></textarea>
          </fieldset>
          <button type="submit" style={{ background: '#ff4a11', color: '#ffffff' }}>Add Entry</button>
        </Form>
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
    </article>    
    </Fragment>
  );
}

export default App;


