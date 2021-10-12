import React, { useContext, useState } from 'react';
import { UserContext } from './createContext.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Deposit() {
  const [balance, setBalance] = useContext(UserContext);
  const [balance_1, setBalance1] = useState(0);

  function calculate() {

    setBalance(balance + balance_1);
    console.log(balance);
 
      toast.success('Balance Updated!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });

    setBalance1(0);
  }

  return (
    <div class="card">
      <div class="card-body">
        <h1>Your Current Balance:$ {balance}</h1>
        <br/>
        <form>
          <div className="form-group" controlId="formBasicEmail">
              <label>Deposit Amount</label>
              <input class="form-control"
                type="number"
                min='0'
                value={balance_1}
                onChange={e => setBalance1(parseInt(e.target.value))}
                placeholder="Enter deposit amount"
              />
            </div>

          <button type="button" class="btn btn-primary" onClick={calculate} disabled={!balance_1}>
            Deposit
          </button>

          <ToastContainer
            position="top-center"
            autoClose={5000}
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

export default Deposit;