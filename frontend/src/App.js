import './App.css';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header'
import data from './data.json'

function App() {

  return (
    <div className="App">
      <Header />
      
      <main>
        <Body data={data} />
        
      </main>
 
    </div>
  );
}

export default App;
