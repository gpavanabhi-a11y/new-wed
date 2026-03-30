import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const App =() => {
  const [count, setCount] = useState(0)
  const [data, dataset] = useState({
    Username: '',
    email: '',
    password: '',
    confirmpassword: '',

  })
  const {Username ,email,password} = data;
  const changeHandler = e =>{
    setData=({...data,[e.target.name]:[e.target.name]})
  }
  const sumbitHandler = e => {
    e.preventDefault();
    console.log(data);
    if(password==confirmpassword){
      console.log(data);
    }else{
      console.log("pass word is incorrect");
    }
  }

  return (
    <div>
      <center>
      <form onsumbit ={"sumbitHandler"}>
        <input type ="text" name="Username" value={Username}/><br/>
        <input type ="email" name="email" value={email}/><br/>
        <input type ="password" name="password" value={password}/><br/>
        
      

      </form>
      </center>
    
       
    </div>
  )
}

export default App
