// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Text To Video Converter</h1>
        <form style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="text" style={styles.label}>Enter Text:</label>
            <input type="text" id="text" name="text" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="language" style={styles.label}>Choose Language:</label>
            <select id="language" name="language" style={styles.select}>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="gm">German</option>
              <option value="kr">Korean</option>
              <option value="jn">Japanese</option>
              <option value="hi">Hindi</option>
              <option value="ta">Tamil</option>
              <option value="ch">Chinese</option>
              <option value="te">Telegu</option>
              <option value="kn">Kannada</option>
              {/* Add more language options as needed */}
            </select>
          </div>
          <button type="submit" style={styles.button}>Convert</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#f4f4f4', // Light gray background color
  },
  formContainer: {
    width: '400px',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', // Shadow effect
    background: '#fff', // White background color
  },
  heading: {
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  select: {
    padding: '10px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    background: '#007bff',
    color: '#fff',
    padding: '10px',
    borderRadius: '3px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
};

export default Home;
