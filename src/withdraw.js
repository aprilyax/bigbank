import React, { useContext, useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { UserContext } from './createContext.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Withdraw() {
  const [balance, setBalance] = useContext(UserContext);
  const [balance_1, setBalance1] = useState(0);

  function calculate() {
    setBalance(balance - balance_1);
    setBalance1(0);

    console.log(balance)

    if (balance <= 0){

      toast.warn('You have low funds!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    }

    else if( balance > 0 ){

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

  return (
    <div class="card">
      <div class="card-body">
        <h1>Your Current Balance:$ {balance}</h1>
        <br/>
        <form>
          <div className="form-group" controlId="formBasicEmail">
            <label>Withdraw Amount</label>
            <input class="form-control"
              type="number"
              value={balance_1}
              placeholder="Enter a withdraw amount"
              onChange={e => setBalance1(parseInt(e.target.value))}
            />
          </div>

          <ReactBootstrap.Button variant="primary" onClick={calculate} disabled={!balance_1}>
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