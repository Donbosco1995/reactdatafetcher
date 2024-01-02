import React, {useState, useEffect} from 'react';

function App () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers( data ))
    .catch(err => console.log(err))
  }, [])
console.log("hi");
return (
  <div>
    <center><h1 style={{ color: "gray" }}> API FETCHING </h1></center>
    <center>
      {users.map((user,index) => {
        
        return (
          <div key={index}
            style={{
              width: "15em",
              backgroundColor: "gray",
              padding: 2,
              borderRadius: 10,
              marginBlock: 10,
            }}
          >
            <p style={{ fontSize: 15, color: 'white' }}>
            {user.name}<br/>
            {user.email}<br/>
            {user.username}<br/>
            {user.address.street}<br/>
            {user.address.suite}<br/>
            {user.address.city}<br/>
            {user.address.zipcode}<br/>
            {user.address.geo.lat}<br/>
            {user.address.geo.lng}<br/>
            {user.phone}<br/>
            {user.website}<br/>
            {user.company.name}<br/>
            {user.company.catchPhrase}<br/>
            {user.company.bs}<br/>
            

            </p>
          </div>
        );
      })}
    </center>
  </div>
);
}

export default App;
