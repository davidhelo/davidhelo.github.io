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
      <p>Project experience:</p>
      <ProjectSection />
      
      <a
        className="App-link"
        href="https://github.com/davidhelo"
        target="_blank"
      >
        See GitHub profile
      </a>
    </div>
  );
}

export default App;
