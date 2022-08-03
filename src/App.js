import './App.css';
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import StudyMainMenu from './components/StudyComponets/StudyMainMenu';
import PracticeMain from './components/PracticeComponets/PracticeMain';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/study' element={<StudyMainMenu />} />
        <Route path='/practice' element={<PracticeMain />} />
      </Routes>
    </div>
  );
}

export default App;
