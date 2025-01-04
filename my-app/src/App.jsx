import './App.css';
import { Routes, Route } from 'react-router-dom';
import VocabMenu from './components/VocabMenu';
import VocabQuiz from './components/VocabQuiz';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<VocabMenu />} />
        <Route path=":slug" element={<VocabQuiz />} />
      </Routes>
    </>
  )
}

export default App
