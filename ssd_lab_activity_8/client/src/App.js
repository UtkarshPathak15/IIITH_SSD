import './App.css';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Student from './components/Student';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Query from './components/Query';

function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="signup" element={<SignUpForm />}/>
        <Route path="student" element={<Student />}/>
        <Route path="login" element={<LoginForm />}/>
        <Route path="query" element={<Query />}/>
    </Routes>
  </BrowserRouter>);
}

export default App;