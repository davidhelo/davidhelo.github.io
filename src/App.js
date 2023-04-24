import './App.css';
import ProjectSection from './components/ProjectSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi, This is my personal portfolio.
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
      <p>*The current portfolio is still in development.</p>
      <br></br>
    </div>
  );
}

export default App;
