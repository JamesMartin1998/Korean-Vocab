import './App.css';
import { Routes, Route } from 'react-router-dom';
import VocabMenu from './components/VocabMenu';
import VocabQuiz from './components/VocabQuiz';
import {StarWordsProvider} from "./contexts/StarWordsContext";

function App() {
  return (
    <StarWordsProvider>
      <Routes>
        <Route path="/" element={<VocabMenu />} />
        <Route path=":slug" element={<VocabQuiz />} />
      </Routes>
    </StarWordsProvider>
  )
}

export default App
