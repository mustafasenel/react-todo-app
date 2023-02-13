import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NotesList from "./pages/NotesList";
import NotePage from "./pages/NotePage";
import Navbar from './components/Navbar'


function App() {
  return (
    
      <Router>
              <Navbar/>
        <div className='bg-gray-50 dark:bg-gray-800 flex flex-col h-full w-full items-center pt-4 '>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/notes" element={<NotesList/>} />
            <Route path="/notes/new" element={<NotePage/>} />
            <Route path="/note/:id/" element={<NotePage/>} />
        </Routes>

        </div>
      </Router>
   
  );
}

export default App;
