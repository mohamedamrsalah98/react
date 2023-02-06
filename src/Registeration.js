import {useState} from "react"

function Registeration() {

 // ============================= variable ============================

const [data,setData] = useState({
    Name : "",
    email : "",
    userName : "",
    password : "",
    confirmPassword : ""
})

const [error,setError] = useState({
    NameErr : "",
    emailErr : "",
    userNameErr : "",
    passwordErr : "",
    confirmPasswordErr : ""
})
// ============================= function =============================

const changeData = (e) =>{
        if (e.target.name == "Name"){
            if(e.target.value.length > 0){
                setData({
                    ...data,
                    Name : e.target.value 
                })
                setError({
                    ...error,
                    NameErr : ""
                })
            }else{
                setError({
                    ...error,
                    NameErr : "Name is required"
                })
            }
        }else if(e.target.name == "email"){
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
        }
        else if (e.target.name == "userName"){
            if(e.target.value.length > 0 && !/\s/g.test(e.target.value) ){
                setData({
                    ...data,
                    userName : e.target.value 
                })
            setError({
                    ...error,
                    userNameErr : ""
                })
            }else{
                setError({
                    ...error,
                    userNameErr : "userName Containes Space or empty"
                })
            }
        }
        else if (e.target.name == "password"){
            if( e.target.value.length > 8 && /[^((0-9)|(a-z)|(A-Z)|\s)]/.test(e.target.value))
            {
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
        else if (e.target.name == "ConfirmPassword"){
            if(e.target.value != data.password ){
                setError({
                ...error,
                confirmPasswordErr : "password not match"
                })
            }else{
                setData({
                ...data,
                confirmPassword : e.target.value 
            })
            setError({
                ...error,
                confirmPasswordErr : ""
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
            <h1 className="text-center mb-5">Registeration</h1>
    <form onSubmit={(e) => submitUserData(e)} className="mb-5">
    <div className="">
    <label  className="form-label text-center ms-3 mb-3">Name</label>
    <input name="Name"  onChange ={(e) => changeData(e)} type="text" className="form-control"  />
    <p>{error.NameErr}</p>
  </div>
  <div className="mb-3">
    <label  className="form-label text-center ms-3 mb-3">Email</label>
    <input name="email"  onChange ={(e) => changeData(e)} type="email" className="form-control"  />
    <p>{error.emailErr}</p>
  </div>
  <div className="mb-3">
    <label  className="form-label text-center ms-3 mb-3">User Name</label>
    <input name="userName"  onChange ={(e) => changeData(e)} type="text" className="form-control"  />
    <p>{error.userNameErr}</p>
  </div>
  <div className="mb-3">
    <label  className="form-label ms-3 mb-3">Password</label>
    <input name="password"  onChange = {(e) => changeData(e)} type="password" className="form-control" />
    <p >{error.passwordErr}</p>
  </div>
  <div className="mb-3">
    <label  className="form-label ms-3 mb-3">Confirm Password</label>
    <input name="ConfirmPassword"  onChange = {(e) => changeData(e)} type="password" className="form-control" />
    <p >{error.confirmPasswordErr}</p>
  </div>
  <div className="text-center m-auto mt-5 ">
  <button type="submit" className="btn btn-secondary w-25 rounded">Submit</button>
  </div>
</form>
        </div>
        </div>
    )
}

export default Registeration;


