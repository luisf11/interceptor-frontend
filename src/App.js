import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatDetails from './components/ChatDetails'


function App() {
  return (
    <div className="App">
      <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6">
        <span class="font-semibold text-xl tracking-tight">OpenFire Chat interceptor</span>
      </nav>
      <Router>
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/details/:id" component={ChatDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
