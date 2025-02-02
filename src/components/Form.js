// import React, { useState } from 'react'
// import './style.css'


// export function Form()  {

//     const [name,setName] = useState("");
//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");

//     const collectData = async (e) =>{
//         e.preventDefault();
//         let result = await fetch('http://localhost:4000/',{
//             method:'post',
//             body:JSON.stringify({name,email,password}),
//             headers:{
//                 'content-Type':'application/json'
//             },
//         })
//         result = await result.json
//         localStorage.setItem("user",JSON.stringify(result))
//     }

//   return (
//     <div className='container'>
//         <form onSubmit={collectData}>
//             <h2 className='text-center pt-3'> Sign up form  </h2>

//             <div className='mb-3 mt-3'>
//                 <label className='form-label'> Username </label>
//                 <input type='text' className='form-control'
//                 value={name} onChange={(e) =>setName(e.target.value)}/>
//             </div>

//             <div className='mb-3'>
//                 <label className='form-label'> Email </label>
//                 <input type='email' className='form-control'
//                 value={email} onChange={(e) =>setEmail(e.target.value)}/>
//             </div>

//             <div className='mb-3'>
//                 <label className='form-label'> Password </label>
//                 <input type='password' className='form-control'
//                 value={password} onChange={(e) =>setPassword(e.target.value)}/>
//             </div>

//             <button type='submit' className='btn btn-success'> Submit </button>

//         </form>
//     </div>
//   )
// }

import React, { useState } from 'react'
import './style.css'

export function Form()  {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const collectData = async (e) => {
        e.preventDefault();

        let result = await fetch('http://localhost:4000/', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // FIX: You need to call result.json() as a function
        result = await result.json();  // <-- The missing parentheses

        localStorage.setItem("user", JSON.stringify(result));
    }

    return (
        <div className='container'>
            <form onSubmit={collectData}>
                <h2 className='text-center pt-3'>Sign up form</h2>

                <div className='mb-3 mt-3'>
                    <label className='form-label'>Username</label>
                    <input type='text' className='form-control'
                        value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input type='email' className='form-control'
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input type='password' className='form-control'
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
        </div>
    )
}

