import logo from './logo.svg';
import './App.css';
import { Greet, Greet2, Greet3 } from './components/Greet';
import { Welcome, Welcome2 } from './components/welcome';
import Message from './components/message';

function App () {
  return (
    <div className="App">
      {//<Greet name="Katrina" nickname="Tri">
        //<button>Visit Website</button>
        //<p>Hello! Hello!</p>
      //</Greet>
      //<Greet name="Amanda" nickname="Mandy"/>
      //<Greet2 name="Nahla" nickname="Lala"/>
      //<Greet3 name="Sasha" nickname="Sasa"/>
      //<Welcome name="Rosemary" nickname="Romy"/>
      //<Welcome2 name="Rebel" nickname="Bell"/> 
}
      <Message />
    </div>
  );
}


export default App;