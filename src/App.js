import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './Pages/Home.js'
import Home2 from './Pages/Home2'
import Gallery from './Pages/Gallery.js'
import PrimarySearchAppBar from './Components/SearchAppBar';
import SimpleBottomNavigation from './Components/HomePage/BottomNavigation';
import TvShows from './Pages/TvShows';
import Serial1 from './Pages/Serial1';
import Serial2 from './Pages/Serial2';
import Serial3 from './Pages/Serial3';
import Serial4 from './Pages/Serial4';
 
 
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PrimarySearchAppBar/>
      
      </header>
      
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home2/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home2'} > <Home2/> </Route>
            <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery/> </Route>
            <Route path={process.env.PUBLIC_URL + '/tvshows'} > <TvShows/> </Route>
            <Route path={process.env.PUBLIC_URL + '/Serial1'} > <Serial1/> </Route>
            <Route path={process.env.PUBLIC_URL + '/Serial2'} > <Serial2/> </Route>
            <Route path={process.env.PUBLIC_URL + '/Serial3'} > <Serial3/> </Route>
            <Route path={process.env.PUBLIC_URL + '/Serial4'} > <Serial4/> </Route>

            
          </Switch>
 
      <footer className="App-footer">
      <SimpleBottomNavigation/>
      </footer>
    </div>
  );
  }
 
export default App;

