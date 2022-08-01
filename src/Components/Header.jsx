import React from 'react'
import{useState,useEffect} from 'react'
import '../Components/Header.css'
// import Home from './Home';
// import Contact from './Contact';
// import Second from './Second';

//import images from '../Components/images/img'
import img from './images/img.png'

function Header() {
  // const list =localStorage.getItem('listData') ||'[]';
  const formUrl='https://randomuser.me/api/?results=10';
  const[user,setUserProfile]=useState([]);
  const [find, findData] = useState('')
 console.log(formUrl);


 
  useEffect(()=>{
    fetch (formUrl).then((formData)=>{
      formData.json().then((dataForm)=>{
       console.log(dataForm)
        localStorage.setItem('listData',JSON.stringify(dataForm.results));
        setUserProfile(dataForm.results);
      })
     
    });
  }, [])


//search//
const findProfile =()=>{
  let findContact=user.filter((item) => item.name.first === find);
  setUserProfile(findContact);
}





  return (
    <div>
      <div className='head'>
        <img src={img} width='15%'/>
        <div className='home'>Home</div>
        <div className='content'>Content</div>
      </div>
      <div className='search'>
       <input type="text" placeholder='Search profile' id='search' onChange={(e)=>findData(e.target.value)}/>
       <button onClick={()=>findProfile()}>submit</button>
       </div>

    
      <div className='container'>
      {
      (user.length > 0 && user.map((obj,key)=> (
      <div className='contant' key={key}>
      <img src={obj.picture.large} />
      <div className='fix'>
      <div className='name'> Name:{obj.name.first}</div><br />
      <div className='email'> email:{obj.email}</div><br />
      <div className='location'> location:{obj.location.state}</div>
      </div>
     
      
      
    </div>

  )))
  }
      </div>
    </div>
  )
}

export default Header
