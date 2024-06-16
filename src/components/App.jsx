import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Onboarding from './Onboarding';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;

