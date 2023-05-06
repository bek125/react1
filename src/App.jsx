// import { useEffect, useState } from "react";
// import { List } from "./Components/List";
// import axios from "axios";
// import { Profil } from "./Components/Profil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFount } from "./Components/NotFount";
// import { Userd, Users } from "./Pages/Users";
import { AbouteUs, Home, UserProfil, Users } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users/>} />
          <Route path="/aboutus" element={<AbouteUs />} />
          <Route
            path="/user/:userId"
            element={<UserProfil/>}
          />
          <Route path="*" element={<NotFount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
