import './App.scss';
import Dutekstai from './Components/ketvirtas04';
import Labas from './Components/labas01';
import Tekstas from './Components/textprops02';
import Gyvunai from './Components/zb03';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Labas />
        <Tekstas betkokstxt={'Labas cia mano reacto bandymas!'} />
        <Gyvunai />
        <Dutekstai texth1={'Pirmas tekstas'} texth2={'Antras tekstas'} />

      </header>
    </div>
  );
}

export default App;
