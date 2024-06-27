import "./styles/App.css";
import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome.jsx";
import Login from "./Login.jsx";
import CreateAccount from "./CreateAccount.jsx";
import ConfirmationPage from "./ConfirmationPage.jsx";
import CreatePassword from "./CreatePassword.jsx";
import Home from "./Home/HomePage/Home.jsx";
import Search from "./Home/SearchPage/Search.jsx";
import MainLayout from "./Home/MainLayout.jsx";
import ListingDetails from "./Home/SearchPage/ListingComponents/ListingDetails.jsx";
import ListingMap from "./Home/SearchPage/ListingComponents/ListingMap.jsx"
import ListingDetailsCard from "./Home/SearchPage/ListingComponents/ListingDetailsCard.jsx";
import RoomDetails from "./Home/SearchPage/ListingComponents/RoomDetails.jsx";
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
        <Route path="home" element={<MainLayout><Home /></MainLayout>} />     
        <Route path="search" element={<MainLayout><Search/></MainLayout>}/>
        <Route path="listing-details" element={<ListingDetails/>}/>
        <Route path="listing-card" element={<ListingDetailsCard/>}/>
        <Route path="listing-map" element={ <ListingMap />} />
        <Route path="room-details/:id" element={ <RoomDetails />} />
        {/* Add other routes here */}
      </Routes>
    </Suspense>
  </Router>
  );
};

export default App;
