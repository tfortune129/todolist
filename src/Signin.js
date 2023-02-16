import React from 'react'

export default function Signin() {
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

 

//     const url = 'http://localhost:5000/api/signin'
//     const options = {
//         method: "POST",
//         headers: {
//             Authorization: `Basic ${btoa(username+':'+password)}`
//         }
//     }
  

//     const res = await fetch(url, options);
//     const data = await res.json();
//     console.log(data)
//     if (data.status == 'ok'){
//       console.log('Logged in')
//     }


// };   




  return (
  

    <center>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
    {/* <p>Please enter your email and password to log in:</p> */}

    <form className="form-inline">
    
      <div className="form-group mx-sm-3 mb-2">
        <input type="email" className="form-control" placeholder="Email" style={{width: "300px"}} />
      </div>
      <div className="form-group mx-sm-3 mb-2">
        <input type="password" className="form-control" placeholder="Password" style={{width: "300px"}} />
      </div>

      <button type="submit" className="btn btn-primary mb-2">Enter</button>
    </form>
    </center>
  )
}

