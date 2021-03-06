import React, { useContext } from 'react';
import { UseContext } from './createContext.js';

// all data react component
function AllData() {
  const [info] = useContext(UseContext);

  return (
    <div class="card" style={{ margin: '20px'}}>
      <div class="card-body">
      <h5 class="card-title">All Data</h5></div>
        <table class="card-table table">
        <thead>
          <tr class="table-secondary">
            <th>#</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{info[0]}</td>
            <td>{info[1]}</td>
            <td>{info[2]}</td>
          </tr>
          <tr class="table-light">
            <td>2</td>
            <td>{info[3]}</td>
            <td>{info[4]}</td>
            <td>{info[5]}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{info[6]}</td>
            <td>{info[7]}</td>
            <td>{info[8]}</td>
          </tr>
          <tr class="table-light">
            <td>4</td>
            <td>{info[9]}</td>
            <td>{info[10]}</td>
            <td>{info[11]}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{info[12]}</td>
            <td>{info[13]}</td>
            <td>{info[14]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AllData;