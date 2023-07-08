import React , {useState} from 'react'
import './signup.css';
import axios from 'axios';
import {AiFillEye, AiOutlineLogout} from 'react-icons/ai';
import {AiFillEyeInvisible} from 'react-icons/ai'
import {useHistory} from 'react-router-dom'
const Signup = () => {
    const history =useHistory()
    const [user,setUser] = useState({
        name:'',
        email:'',
        password:''
    })
    const [show,setShow]=useState(false)
    const handleShow=()=>{
        setShow(!show)
    }

    const handleChange = e=>{
        const {name,value} = e.target
        // console.log(name,value)
        setUser({
            ...user,
            [name]:value
        })
    }

    
    const Register =()=>{
        const {name,email,password} =user
        if(name && email && password){
            alert("posted")
        axios.post("http://localhost:4000/register",user)
        .then((res)=>{
            console.log(res)
            alert(res.data.message)
            history.push("/login")
        })
        }else{
            alert("invalid input")
        }
        
    }
  return ( 

    <form>
        {/* {console.log(user)} */}
        <label >Name:</label>
        <input type="text" name="name"  value ={user.name} placeholder='Enter your Name' onChange={handleChange} ></input>,
        <label >Email:</label>
        <input type="text" name="email" value ={user.email} placeholder='Enter your Email' onChange={handleChange} ></input>,
        <label >password:</label>
        <input type={show ? "text" :"password"} name="password"  value ={user.password}placeholder='Enter your Password' onChange={handleChange} ></input>,
        <label onClick={handleShow}>{show ? <AiFillEye/> :<AiFillEyeInvisible/>}</label>
        <button className='button' onClick={Register}>SignUp</button>
        <div className='button' onClick={()=>history.push('/login')}>Login</div>

    </form>
    
  )
}

export default Signup




// for AiOutlineLogout

// const homepage=({setLoginUser})=>{
    
// <button onClick={()=>setLoginUser({})}>logout</button>
// }
