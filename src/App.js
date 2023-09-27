import HomeComponents from './components/HomeComponents'
import LoginComponents from './components/loginComponents'
import RegisterComponents from './components/registerComponents'
import ResultComponents from './components/ResultComponents'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponents/>} />
        <Route path="/login" element={<LoginComponents/>} />
        <Route path="/register" element={<RegisterComponents/>} />
        <Route path="/result" element={<ResultComponents/>} />
      </Routes>
    </Router>
  );
}

export default App;
