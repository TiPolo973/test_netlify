import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './Vue/Signin';
import Signup from './Vue/Signup';
import Test from './Vue/test';
import Header from './Vue/Header';

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
