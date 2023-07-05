import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';             
        
import './App.css';
import ProjectSection from './components/ProjectSection';
import Stack from './components/Stack';
import menuItems from './tabMenuItems';
import { TabMenu } from 'primereact/tabmenu';

function App() {
  return (
    <div className="App" id="home-section">
    <div className="ripple-background"></div>
    <div className="circle xxlarge shade1"></div>
    <div className="circle xlarge shade2"></div>
    <div className="circle large shade3"></div>
    <div className="circle medium shade4"></div>
    <div className="circle small shade5"></div>
    <TabMenu model={menuItems} />
      <header className="App-header">
      <img id="profile-pic"
            src="/images/pictureSQ.jpeg"
            alt="Picture"
            width="180rem"
      />
        <p>
          Hi, I'm <span className='p-name'>David Hernandez</span>
        </p>
        <p>
          Full Stack Web Developer
        </p>
      </header>

      <br></br>
      <div className='p-stack' id="stack-section">
        <p > Stack: </p>
        <Stack />
      </div>

      <br></br>
      
      <div id="projects-section">
        <p>Projects experience:</p>
        <ProjectSection />
      </div>
      
      <br></br>
      <p>
        <a class="App-link" 
          href="https://www.freecodecamp.org/davidhelo" 
          target="_blank"
          >
            See certifications
        </a>
      </p>

      <p>
        <a
          className="App-link"
          href="https://github.com/davidhelo"
          target="_blank"
        >
          See GitHub profile
        </a>
      </p>
      
      <br></br>
      <footer>By David Hernandez</footer>
    </div>
  );
}

export default App;
