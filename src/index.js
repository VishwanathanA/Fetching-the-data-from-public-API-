import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Header from './components/header';
// import Footer from  './components/Footer';

// class Main extends Component{
//   render(){
//     return (<div>
//       <Header/>
//       <p></p>
//       <Footer/>
//     </div>);
//   }
// }
// ReactDOM.render(<Main/>,document.getElementById('root'));
function Example(){
  const[user,setusers]=useState([]);
  const[loading,setloading]=useState(true);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>Response.json())
    .then(data=>{
    setusers(data);
    setloading(false);
  })
  .catch(error=>{
      console.error("if it is not loading will be error message");
      setloading(false);
    });
  },[]);
  if(loading){
    return<p>loading</p>;
  }
  return(
    <div>
      <h1>list out the user in API</h1>
      <ul>
        {user.map((user)=>{
          return(
            <li key={user.id}>{user.name}</li>
            );
            })}
            </ul>
    </div>
  );
}
ReactDOM.render(<Example/>,document.getElementById('root'));