import Signup from './components/Register/signup'
import Login from './components/Login/login'
import { BrowserRouter as Router , Switch ,Route } from 'react-router-dom';
import { useState } from 'react';
const App =() =>{
  const [user,setLoginUser] = useState({
  })
  return (
    <div>
    {/* <Signup /> */}
    {/* <Login /> */}
    <Router>
      <Switch>
      {/* <Route exact path="/Home">
        {
          user && user._id ?<Signup/>: <Login setLoginUser ={setLoginUser}/>
        }
        </Route> */}
        <Route exact path="/"><Signup/></Route>
        <Route exact path="/login"><Login setLoginUser ={setLoginUser}/></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;



// useEffect(function persistForm() {
//   localStorage.setItem('formData', name);
// });

// // 3. Use the surname state variable
// const [surname, setSurname] = useState('Poppins');

// // 4. Use an effect for updating the title
// useEffect(function updateTitle() {
//   document.title = name + ' ' + surname;
// });
