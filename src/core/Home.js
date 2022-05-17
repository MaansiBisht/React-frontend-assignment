import React, {useState} from 'react';
import "../styles.css";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
// import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';



 const Home = () => {


    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        number: "",
        error: "",
        success: false,
        nameerror : "",
        passworderror : "",
        confirmpassworderror : "",
        numbererror : "",
        didRedirect :false
      });
    
      const { name, email, password, confirmpassword, number, error, success ,emailerror,passworderror, numbererror, confirmpassworderror, nameerror, didRedirect} = values;
    
      const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
      };
    
      const onSubmit = event => {
        event.preventDefault();
         Validation(values)      
       
      }

      const successMessage = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div
                className="alert alert-success"
                style={{ display: success ? "" : "none" }}
              >
                New account was created successfully. Please
                <Link to="/signin">Login Here</Link>
              </div>
            </div>
          </div>
        );
      };

      const performRedirect = () => {
        if(didRedirect){
            return <Redirect  to= "/Bar"/>
        }
      }
    
      const errorMessage = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div
                className="alert alert-danger"
                style={{ display: error ? "" : "none" }}
              >
                {error}
              </div>
            </div>
          </div>
        );
      };
    
      
    
      const Validation = (values) => {
        
    let numbererror = "";
    let emailerror = "";
    let passworderror = "";
    let confirmpassworderror = "";
    let nameerror = "";

    if (!name) {
      nameerror = "Name field is required";
    }
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email || reg.test(email) === false) {
      emailerror = "Email Field is Invalid ";
    }
    if (!password) {
      passworderror = "Password field is required";
    }
    const reg2 = /^\d+/;
    if (!number || reg2.test(number) === false || number.length < 8) {
        numbererror = "Number is Invalid ";
      }
    if(password !== confirmpassword){
        confirmpassworderror = "Password and confirm password does not match";
    }
    if (emailerror || passworderror) {
      setValues({...values,nameerror: nameerror, emailerror:emailerror, passworderror:passworderror, numbererror:numbererror, confirmpassworderror:confirmpassworderror });
      return false;
    }
    if(!emailerror || !passworderror || !nameerror || !confirmpassworderror || !numbererror){
        setValues({...values, didRedirect:true})
    }
   return true;
  }
      
     
     

      const signUpForm = () =>{
        return (
            <div className="container-fluid div1">
                <div className="row no-gutter div1">
                    <div className="col-md-6 d-none d-md-flex bg-image"></div>
                    <div className="col-md-6 bg-dark">
                        <div className="login d-flex align-items-center py-5">
            
                           
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 col-xl-7 mx-auto">
                                        <h3 className="display-9  text-white">Create an account</h3>
                            
                                        <form> 
                                            <div className="form-group mb-3">
                                                <label className='text-white'>email id</label>
                                                <input id="inputEmail"
                                                 value = {email} 
                                                 onChange={handleChange("email")} 
                                                
                                                 type="email"  required="" className="form-control rounded-pill border-0 shadow-sm px-4"/>
                                                 <span role="alert" id="emailError" aria-hidden="true"> {emailerror}</span>
                                            </div>
                                            <div className="form-group mb-3">
                                            <label className='text-white'>password</label>
                                                <input id="inputPassword"
                                                 value = {password} 
                                                 onChange={handleChange("password")} 
                                                 
                                                 type="password"  required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                                {(passworderror)  && <span role="alert" id="passwordError"> {passworderror}</span>}
                                            </div>
                                            <div className="form-group mb-3">
                                            <label className='text-white'>confirm password</label>
                                                <input id="inputConfirmedPassword" 
                                                value = {confirmpassword} 
                                                onChange={handleChange("confirmpassword")} 
                                                type="password"  required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                                {(confirmpassworderror) && <span role="alert" id="confirmpasswordError" aria-hidden="true"> {confirmpassworderror}</span>}
                                            </div>
                                            <div className="form-group mb-3">
                                            <label className='text-white'>name</label>
                                                <input id="inputName" 
                                                value = {name} 
                                                onChange={handleChange("name")} 
                                                type="name"  required=""  className="form-control rounded-pill border-0 shadow-sm px-4"/>
                                                 {(nameerror) && <span role="alert" id="nameError" aria-hidden="true"> {nameerror}</span>}
                                            </div>
                                            <div className="form-group mb-3">
                                            <label className='text-white'>number</label>
                                                <input id="inputNumber" 
                                                value = {number} 
                                                onChange={handleChange("number")} 
                                                type="tel" required=""  className="form-control rounded-pill border-0 shadow-sm px-4"/>
                                                  {(numbererror) && <span role="alert" id="numberError" aria-hidden="true"> {numbererror}</span>}
                                            </div>
                                            <div className="custom-control custom-checkbox mb-3">
                                                <input id="customCheck1" type="checkbox" readOnly className="custom-control-input"/>
                                                <label className="custom-control-label text-white">I read and agree Terms and conditions</label>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={(event) => {
                                                onSubmit(event)
                                            }}>Create account</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
            
                        </div>
                    </div>
            
                </div>
            </div>
            
              )
      }


     return (
    <div>
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      {performRedirect()}
      <p className="text-white text-center"></p>
    </div>
  );
  
}

export default Home