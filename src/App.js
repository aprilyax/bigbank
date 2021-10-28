import { useState } from 'react';
import { Route, Link, HashRouter } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import AllData from './all_data.js';
import Home from './home.js';
import Withdraw from './withdraw.js';
import CreateAccount from './create_account.js';
import Deposit from './deposit.js';
import { UseContext } from './createContext.js';
import './style.css';

export default function App() {
  const [info, setInfo] = useState(''); // this is for passing the information to the children
  const [balance, setBalance] = useState(0);

  // hashrouter to keep page display in sync with URL. (ie #/'name of page')(enables forward/backward nav)
  return (
    <HashRouter>
      <ReactBootstrap.Navbar bg="dark" variant="dark">
      <ReactBootstrap.Container>
          <Link to="/">
          {' '}
            <ReactBootstrap.Navbar.Brand>
              Bank
            </ReactBootstrap.Navbar.Brand>{' '}
          </Link>

          <ReactBootstrap.Nav className="me-auto">
            <Link to="/home">
              {' '}
              <ReactBootstrap.Nav.Link href="#home">
                Home
              </ReactBootstrap.Nav.Link>{' '}
            </Link>

            <Link to="/all_data">
              {' '}
              <ReactBootstrap.Nav.Link href="#all_data">
                All Data
              </ReactBootstrap.Nav.Link>{' '}
            </Link>

            <Link to="/create_account">
              {' '}
              <ReactBootstrap.Nav.Link href="#create_account">
                Create Account
              </ReactBootstrap.Nav.Link>{' '}
            </Link>

            <Link to="/withdraw">
              {' '}
              <ReactBootstrap.Nav.Link href="#withdraw">
                Withdraw
              </ReactBootstrap.Nav.Link>{' '}
            </Link>

            <Link to="/deposit">
              {' '}
              <ReactBootstrap.Nav.Link href="#deposit">
                Deposit
              </ReactBootstrap.Nav.Link>{' '}
            </Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Container>
      </ReactBootstrap.Navbar>

      <br />
      <UseContext.Provider value={[ info, setInfo ]}>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/all_data" component={AllData} />
        <Route path="/create_account" component={CreateAccount} />
      </UseContext.Provider>
      <UseContext.Provider value={[balance, setBalance]}>
        <Route path="/withdraw" component={Withdraw} />
        <Route path="/deposit" component={Deposit} />
      </UseContext.Provider>
    </HashRouter>
  );
}
// Context.Provider used to give context to child components:
// name, email, and pw shared to all data
// balance information shared to deposit and withdraw
