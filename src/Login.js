
import {useState} from "react"

function Login() {

 // ============================= variable ============================

const [data,setData] = useState({
    email : "",
    password : ""
})

const [error,setError] = useState({
    emailErr : "",
    passwordErr : ""
})

// ============================= function =============================

const changeData = (e) =>{

    if(e.target.name == "email" ){
        if(e.target.value.length > 0 && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)){
        setData({
           ...data,
           email : e.target.value 
        })
        setError({
            ...error,
            emailErr : ""
         })
    }else{
          setError({
            ...error,
            emailErr : "email not valid"
         })
    }

    }else{
        if( e.target.value.length > 8 ){
            setData({
               ...data,
               password : e.target.value 
            })
            setError({
                ...error,
                passwordErr : ""
             })
        }else{
              setError({
                ...error,
                passwordErr : "password not valid"
             })
        }
    }

}

// ================================= prvent Default =================================

const submitUserData = (e) => {
    e.preventDefault()
}

// ==================================== return ====================================

    return (
    <div style={{height : "93.1vh"}} className=" container-fluid bg-dark position-relative">
        <div className="w-50 m-auto text-white position-absolute top-50 start-50 translate-middle mb-5">
        <h1 className="text-center mb-5">Login</h1>
    <form onSubmit={(e) => submitUserData(e)} className="mb-5">
  <div className="my-5">
    <label  className="form-label text-center ms-4 mb-4">Email address</label>
    <input name="email"  onChange ={(e) => changeData(e)} type="email" className="form-control"  />
    <p>{error.emailErr}</p>
  </div>
  <div className="my-5">
    <label  className="form-label text-center ms-4 mb-4">Password</label>
    <input name="password"  onChange = {(e) => changeData(e)} type="password" className="form-control" />
    <p >{error.passwordErr}</p>
  </div>
  <div className="text-center m-auto mt-5 ">
  <button disabled={error.emailErr || error.passwordErr && "disabled"} type="submit" className="btn btn-secondary w-25 rounded">Submit</button>
  </div>
</form>
        </div>
        </div>
    )
}

export default Login;