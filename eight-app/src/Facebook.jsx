import { useEffect, useState } from 'react';
import './Facebook.css';

function Facebook() {

  let [Uname, setUname] = useState("");
  let [pwd, setPwd] = useState("");
  let [Admins, setAdmin] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res = await fetch("http://localhost:1000/Admin");
      let data = await res.json();
      setAdmin(data)
    }
    fetchData()
  }, [])
  console.log(Admins);

  let isPresent = Admins.filter((user) => {
    return (
      user.name === Uname && user.password === pwd
    )
  })
  console.log(Uname);

  function Val_Facebook() {
    if (isPresent.length > 0) {
      alert("Login Successfull")
    }
    else {
      alert("Login Failed")
    }
  }

  return (
    <>
      <div className="facebook">
        <div className="thumbnail">
          <h1>facebook</h1>
        </div>
        <form action="">
          <h2>Log in to Facebook</h2>
          <input value={Uname} onChange={(e) => { setUname(e.target.value) }} type="text" placeholder='Enter email or mobile number' />
          <input value={pwd} onChange={(e) => { setPwd(e.target.value) }} type="password" placeholder='Enter Password' />
          <button onClick={Val_Facebook}>Login</button>
          <a href="">Forgot Password</a>
        </form>
      </div>
    </>
  )
}

export default Facebook
