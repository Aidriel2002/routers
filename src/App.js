import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

import Auth from "./pages/auth/Auth";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/todo/Dashboard";
import Trash from "./pages/todo/Trash";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
      }
      setUser(user);
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      {user ? (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route path="/trash" element={<Trash />} />
          </Routes>
        </Router>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
