import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Signup from './routes/signup';
import Login from './routes/login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
