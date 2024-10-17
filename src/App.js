import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Test from './components/test';
import Header from './components/Header';

function App() {
  return (
  <div  className='App-header'>
    <Router>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
