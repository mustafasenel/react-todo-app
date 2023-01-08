import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import TodoList from "./pages/TodoList";

function App() {
  return (
    
      <Router>
        <div className='bg-gradient-to-r from-rose-100 to-teal-100 container flex flex-col h-full w-full justify-center items-center '>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="signup" element={<SignUp/>} />
            <Route path="signin" element={<SignIn/>} />
            <Route path="todos" element={<TodoList/>} />
        </Routes>

        </div>
      </Router>
   
  );
}

export default App;
