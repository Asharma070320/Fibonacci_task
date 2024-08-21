import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const[arr,setArr] = useState([]);
  const[val,setVal] = useState('');
  const api = async() => {
    const fetchData = await axios.get(`https://run.mocky.io/v3/90fc9e7a-53eb-4c28-9d9b-4f5aa6a441d2`);
    setArr(fetchData.data)
  }
  useEffect(()=>{
    api()
  },[])
  // console.log(arr);

  const clickBtn = () => {
    const newTask = {
      id: arr.length+1,
      tasks: [...arr,val],
      title: "Won't haves"
    }
    setArr(prevArr => [...prevArr,newTask])
    
  }
  console.log(arr);
  
  
  return (
    <>
      <input type="text" onChange={(e)=> setVal(e.target.value)} value={val} /> 
      <button onClick={clickBtn}>Add Item In tasks</button>
    <div className="container" style={{display:'flex',justifyContent:'space-around',margin:'1rem 0rem'}}>
    
      
        {
          arr.map((data,idx)=> {
            return <div key={idx}>
              <div className="wontHaves" style={{border:'1px solid '}}>
                <h2>{data.title}</h2>
                {
                  data.tasks.map((li,idx)=>{
                    return <div key={idx}>
                      <h2 style={{border:'2px solid cyan'}}>Title:- {li.title}</h2>
                      <h3>Description:- {li.description}</h3>
                    </div>
                    
                  })
                }
              </div>
              
            </div>
          })
        }
    </div>
    </>
  );
};

export default App;
