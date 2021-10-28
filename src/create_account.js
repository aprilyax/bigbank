import React from 'react';
import { useFormik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseContext } from './createContext.js';
import { ToastContainer, toast } from 'react-toastify';

// form validation: fields may not be null; email must be x@xx.co; pw must be 8 or more characters
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

// create account react component
function CreateAccount() {
  // user input
  const [info, setInfo] = React.useContext(UseContext);  
  
  // keep track of form state; initial form field values empty
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validate,
  });

  // function passed onClick
  function handleClick(e) {
    e.preventDefault();    // prevent browser refresh (only call once when click on submit)
    
    // user success notification 
    toast.success('Success!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

    // set values of each of the form fields based to user input and reset form fields
    setInfo([...info,formik.values.name,formik.values.email, formik.values.password]);
          formik.values.name = '';
          formik.values.email = '';
          formik.values.password = '';
      }
 
  // Rendering the form inside bootstrap card
  // call handleClick on submit
  return (
    <div class="card" style={{ margin: '20px'}}>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label>Name:</label>
            <br/>
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
            <br/>
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
            <br/>
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
          
            <button type="submit" ClassName='button' id="button"
            disabled={!(formik.isValid && formik.dirty)} 
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
