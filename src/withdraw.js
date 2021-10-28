import React, { useContext, useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { UseContext } from './createContext.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// withdraw react component
function Withdraw() {
  const [balance, setBalance] = useContext(UseContext);
  const [getmoney, setGetmmoney] = useState(0);


  function calculate() {

    if (getmoney > balance){
      toast.error('Transaction Failed: Insufficient Funds', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      return
    }
    else 
    setBalance(balance - getmoney);
    //setGetmmoney(0);

    if( balance > 0 ){

      // user success notification 
      toast.success('Balance Updated!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }

  }

// Rendering the form inside bootstrap card; balance and withdraw information
  return (
    <div class="card" style={{ margin: '20px'}}>
      <div class="card-body">
        <h1>Your Current Balance:$ {balance}</h1>
        <br/>
        <form>
          <div className="form-group" controlId="input">
            <label>Withdraw Amount</label>
            <input class="form-control"
              type="number"
              value={getmoney}
              placeholder="Enter a withdrawl amount"
              onChange={e => setGetmmoney(parseInt(e.target.value))}
            />
          </div>

          <ReactBootstrap.Button variant="primary" onClick={calculate} disabled={!getmoney}>
            Withdraw
          </ReactBootstrap.Button>

          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

        </form>
      </div>
    </div>
  );
}

export default Withdraw;