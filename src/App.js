import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';

function App() {
  return (
    <Router>
      <div className="main">
        <h2>Simple Article Crud</h2>
        <div>
          <Route exact path="/create" component={Create} />
        </div>
        <div>
          <Route exact path="/read" component={Read} />
        </div>
         <Route exact path="/update" component={Update} />
      </div>
    </Router>
  );
}

export default App;
