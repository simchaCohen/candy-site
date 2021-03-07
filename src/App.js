import './App.css';
// import CandyList from "./manager/candy-list/candy-list";
import { Provider } from 'react-redux';
import store from './store/store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import ManagerRoute from './manager/manager-raute';
// import EditCandy from './manager/edit-candy/edit-candy';
// import Container from 'react-bootstrap/Container'
// import AddCandy from './manager/add-candy/add-candy';
import Home from './home/home';
import RouteApp from './route-app/route-app';
import ClientRoute from "./client/client-route";
import src from "./assets/candyHome.jpg";
function App() {
  const history = useHistory();

  return (
    <Provider store={store} >

      <div className="App">
        {/* <Container> */}

          <Router history={history}>
            <RouteApp>
            </RouteApp>
            <Switch>
              <Route path="/manager">
               <ManagerRoute></ManagerRoute>
              </Route>
              <Route path="/client">
               <ClientRoute></ClientRoute>
              </Route>
              {/* <Route path="/show-candy">
               <ShowCandy></ShowCandy>
              </Route> */}
              <Route path="/">
                <Home srcImg={src}></Home>
              </Route>
            </Switch>
          </Router>
        {/* </Container> */}
      </div>
    </Provider>
  );
}

export default App;
