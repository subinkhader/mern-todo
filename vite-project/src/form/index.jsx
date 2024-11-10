import { useEffect, useState } from "react";
import axios from 'axios';



export const Form = () => {
  const [userRegistration, setuserRegistration] = useState({
    username: "",
    address: "",
    email: "",
    password: "",
  });
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8080/user')
    .then(response => setData(response.data))
    .catch(error => console.error('Error fetching data:', error));
  },[])
  
  console.log(data.userdata);
  


  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserRegistration({...userRegistration, [name] : value})
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post(`http://localhost:8080/user`,
      userRegistration
    )
 
    
  }

  return (
    <div style={{ width: "100%", height: "100%", margin: "250px" }}>
      <div
        style={{ border: "1px solid black", width: "500px" }}
      >
        <form action="" onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "30px",
              padding: "12px",
            }}
          >
            <label>Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={userRegistration.username}
              onChange={handleInput}
            />
            <label>Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              value={userRegistration.address}
              onChange={handleInput}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={userRegistration.email}
              onChange={handleInput}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={userRegistration.password}
              onChange={handleInput}
            />
            <button type="submit" style={{ marginTop: "15px" }}>Submit</button>
          </div>
        </form>
      </div>
      <div>
        <table>
          <tr>
            <th>Username</th>
            <th>Address</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
            
          {data.map(([data])=>[]
            return <tr>
            <td>{[data.userdata.name]}</td>
            <td>{data.userdata.address}</td>
            <td>{data.resdata.email}</td>
            <td>{data.resdata.password}</td>
          </tr>
          })}
          
            
         
        </table>
      </div>
    </div>
  );
};
