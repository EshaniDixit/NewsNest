import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Translation App</h1>
      <form>
        <div className="form-group">
          <label htmlFor="text">Enter Text:</label>
          <input type="text" id="text" name="text" style={inputStyle} />
        </div>
        <div className="form-group">
          <label htmlFor="language">Choose Language:</label>
          <select id="language" name="language" style={selectStyle}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            {}
          </select>
        </div>
        <button type="submit" style={buttonStyle}>Translate</button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '8px',
  borderRadius: '3px',
  border: '1px solid #ccc'
};

const selectStyle = {
  width: '100%',
  padding: '8px',
  borderRadius: '3px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '3px',
  cursor: 'pointer'
};

export default Home;
