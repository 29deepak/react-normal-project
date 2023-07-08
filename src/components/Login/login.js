import React,{useState} from 'react'
import axios from 'axios';
import {AiFillEye} from 'react-icons/ai';
import {AiFillEyeInvisible} from 'react-icons/ai'
import {useHistory} from 'react-router-dom'
const Login = ({setLoginUser}) => {
    const history =useHistory()

    const [user,setUser] = useState({
        email:'',
        password:'',
    })
    const [show,setShow]=useState(false)
    const handleShow=()=>{
        setShow(!show)
    }

    const handleChange = e=>{
        const {name,value} = e.target
        console.log(name,value)
        setUser({
            ...user,
            [name]:value
        })
    }
    const Register =()=>{
        const {name,email,password} =user
        if(name && email && password){
            alert("posted")
        axios.post("http://localhost:4000/login",user)
        .then((res)=>{
            console.log(res)
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
        }else{
            alert("invalid input")
        }
        
    }
  return (
    <form>
        {console.log(user)}
        <label >Email:</label>
        <input type="text" name="email" value ={user.email} placeholder='Enter your Email' onChange={handleChange} ></input>,
        <label >password:</label>
        <input type={show ? "text" :"password"} name="password"  value ={user.password}placeholder='Enter your Password' onChange={handleChange} ></input>
        <label onClick={handleShow}>{show ? <AiFillEye/> :<AiFillEyeInvisible/>}</label>
        <button className='button' onClick={Register} >Login</button>
        <button className='button'onClick ={()=>history.push("/")}>Signup</button>

    </form>
  )
}

export default Login