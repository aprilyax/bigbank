import React from 'react';
import { useFormik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from './createContext.js';
import { ToastContainer, toast } from 'react-toastify';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } 

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length <= 7) {
    errors.password = 'Must be 8 characters or more';
  }
  return errors;
};

function CreateAccount() {

  const [info, setInfo] = React.useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validate,
  });

  function handleClick(e) {
    e.preventDefault();   
    
    toast.success('Success!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

    setInfo([...info,formik.values.name,formik.values.email, formik.values.password]);
          formik.values.name = '';
          formik.values.email = '';
          formik.values.password = '';
      }
 

  return (
    <div class="card" style={{ margin: '20px'}}>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label>Name:</label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            {formik.touched.name && formik.errors.name ? (
              <div style={{color:'red'}}>{formik.errors.name}</div>
            ) : null}
          </div> 

          <div class="form-group" controlId="formBasicEmail">
            <label>Email Address:</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            {formik.touched.email && formik.errors.email ? (
              <div style={{color:'red'}}>{formik.errors.email}</div>
            ) : null}
          </div>

          <div class="form-group" controlId="formBasicEmail">
            <label>Password:</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            {formik.touched.password && formik.errors.password ? (
              <div style={{color:'red'}}>{formik.errors.password}</div>
            ) : null}
          </div>

            <button type="submit" class="btn btn-primary" id="button"
            disabled={formik.errors.email || formik.errors.password || formik.errors.name} 
            onClick={handleClick}>Submit</button> 

          <ToastContainer
            position="center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </form>
      </div>  
    </div>
  );
};

export default CreateAccount;
