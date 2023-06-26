import {useState} from 'react';
import {Button} from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';                 
        
import './App.css';
import ProjectSection from './components/ProjectSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img id="profile-pic"
            src="/images/pictureSQ.jpeg"
            alt="Picture"
            width="150rem"
      />
        <p>
          Hi, I'm David Hernandez
        </p>
        <p>
          Full Stack Web Developer
        </p>
      </header>
      <p>Projects experience:</p>
      <ProjectSection />
      
      <a
        className="App-link"
        href="https://github.com/davidhelo"
        target="_blank"
      >
        See GitHub profile
      </a>
      <br></br>
      <footer>By David Hernandez</footer>
    </div>
  );
}

export default App;
