import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Signup from './routes/signup';
import Login from './routes/login';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
const root = ReactDOM.createRoot(document.getElementById('root'));
// const createUser = ({user}) => {
//   console.log(user.username + "\n" + user.password)
//   fetch('http://127.0.0.1:3000/signup', {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       "Access-Control-Allow-Origin": '*'
//   },
//   method: "POST",
//   body: JSON.stringify({
//           user: {
//             username: user.username,
//             password: user.password
//           }})

//   }).then(resp => resp.json()).then(json => {
//     console.log("received \n\n")
//     console.log(json)
//   }).catch(error => console.log(error))
// }

const store = createStore(rootReducer)

root.render(
  <Provider store={store} >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup createUser={createUser}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
