import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import OurServices from './Pages/OurServices/OurServices';
import NotFound from './components/NotFound/NotFound';
import More from './Pages/More/More';
import SignUp from './Pages/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Thanks from './Pages/Thanks/Thanks';
import Form from './Pages/Form/Form';
import AddedService from './components/AddedService/AddedService';
import Body from './components/DashBoard/Body/Body';
import Login from './Pages/Login/Login';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/addedservice'>
              <AddedService></AddedService>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Body></Body>
            </PrivateRoute>
            <PrivateRoute path='/more/:id'>
              <More></More>
            </PrivateRoute>
            <Route path='/allproducts'>
              <OurServices></OurServices>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <SignUpPage></SignUpPage>
            </Route>
            <Route path='/thanks'>
              <Thanks> </Thanks>
            </Route>
            <Route path='/form'>
              <Form></Form>
            </Route>
            <Route path='/addedservice'>
              <AddedService></AddedService>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
