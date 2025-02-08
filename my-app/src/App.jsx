import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import VocabMenu from './components/VocabMenu';
import VocabQuiz from './components/VocabQuiz';
import {StarWordsProvider} from "./contexts/StarWordsContext";
import GrammarMenu from "./components/GrammarMenu";
import GrammarLesson from "./components/GrammarLesson";

function App() {
  return (
      <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path="/vocab/*"
        element={
          <StarWordsProvider>
            <Routes>
              <Route path="" element={<VocabMenu />} />
              <Route path=":slug" element={<VocabQuiz />} />
            </Routes>
          </StarWordsProvider>
        }
      />
      <Route path="/grammar" element={<GrammarMenu />} />
      <Route path="/grammar/:slug" element={<GrammarLesson />} />
    </Routes>
  )
}

export default App
