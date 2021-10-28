import React, { useContext, useState } from 'react';
import { UseContext } from './createContext.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// deposit react component
function Deposit() {
  const [balance, setBalance] = useContext(UseContext);
  const [addMoney, setAddMoney] = useState(0);

  function calculate() {

    setBalance(balance + addMoney);
    console.log(balance);
 
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

    setAddMoney(0);
  }

  // Rendering the form inside bootstrap card; balance and deposit information
  return (
    <div class="card" style={{ margin: '20px'}}>
      <div class="card-body">
        <h1>Your Current Balance:$ {balance}</h1>
        <br/>
        <form>
          <div className="form-group" controlId="formBasicEmail">
              <label>Deposit Amount</label>
              <input class="form-control"
                type="number"
                min='0'
                value={addMoney}
                onChange={e => setAddMoney(parseInt(e.target.value))}
                placeholder="Enter deposit amount"
              />
            </div>

          <button type="button" class="btn btn-primary" onClick={calculate} disabled={!addMoney}>
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