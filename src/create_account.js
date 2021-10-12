import React from 'react';
import { useFormik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from './createContext.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
    name: '',
    email: '',
    password: ''
  };
  
const onSubmit = values => {
  console.log('Form data : ', values);
  };
  
const validate = values => {
  // values.name values.email values.password
  // errors.name errors.email errors.password
  // errors.name = 'This field is required'
  let errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }

    if (!values.email) {
     errors.email = 'Required';
    } else if (
     !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email)
    ) {
      errors.email = 'Not Valid Email';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password < 8) {
      errors.password = 'Minimum 8 characters required';
    }
    return errors;
  };


function CreateAccount() {

  const [info, setInfo] = React.useContext(UserContext);

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    console.log('Form values : ', formik.values); // getting the values from formik
    console.log('Form Errors : ', formik.errors); // this one is for seeing the errors

    function thisOne(e) {
        e.preventDefault();

        toast.success('Success!', {
            position: 'top-center',
            autoClose: 3000,
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
    <div style={{ margin: 'auto', width: '400px' }}>

        <form>
          <div class="form-group" controlId="formBasicEmail">  
            <label>First Name</label>
              <input class="form-control"
                  type="text"
                  name="name"
                  placeholder="Enter name" 
                  onChange={formik.handleChange} 
                  value={formik.values.name}/>

                  {formik.errors.name ? (
                      <div style={{ color: 'red' }}> {formik.errors.name}</div>
                      ) : null}
            </div>

          <div class="form-group" controlId="formBasicEmail">
              <label>Email Address</label>
                <input class="form-control" 
                  type="email" 
                  name="email"
                  placeholder="Enter email" 
                  onChange={formik.handleChange} 
                  value={formik.values.email} />

                  {formik.errors.email ? (
                    <div style={{ color: 'red' }}> {formik.errors.email}</div>
                    ) : null}     

            </div>

          <div class="form-group" controlId="formBasicPassword">
                <label>Password</label>
                  <input class="form-control" 
                    type="password" 
                    name="password"
                    placeholder="Password" 
                    onChange={formik.handleChange} 
                    value={formik.values.password} />

                  {formik.errors.password ? (
                    <div style={{ color: 'red' }}> {formik.errors.password}</div>
                    ) : null}   
            </div>


            <button type="button" class="btn btn-primary" disabled={
            (!formik.values.name, !formik.values.email, !formik.values.password)
          }
            onClick={thisOne}
          >
                Submit
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
);
}

export default CreateAccount;
