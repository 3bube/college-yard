import "./styles/App.css";
import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome.jsx";
import Login from "./Login.jsx";
import CreateAccount from "./CreateAccount.jsx";
import ConfirmationPage from "./ConfirmationPage.jsx";
import CreatePassword from "./CreatePassword.jsx";
const Onboarding = lazy(() => import('./Onboarding.jsx'));

const App = () => {
  return (
    <Router>
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="confirmation" element={<ConfirmationPage />}/>
        <Route path="create-password" element={<CreatePassword />}/>
        {/* Add other routes here */}
      </Routes>
    </Suspense>
  </Router>
  );
};

export default App;
