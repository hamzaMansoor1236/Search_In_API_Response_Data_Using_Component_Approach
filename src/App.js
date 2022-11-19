import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import H1 from "./componets/H1";
import Input from "./componets/Input";
import Btn from "./componets/Btn";
import Table from "./Table";
function App() {

  var [master,setmaster]= useState([])
  var [arr,setarr]= useState([])
  var [inPut,setinput]=useState("");


  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => {
    setarr(data)
    setmaster(data)
  
  } );
  },[]);


  
 
  function handleChange(event) {

    setinput(event.target.value);

    if(event.target.value.toLowerCase()!=="")
    {
      var newArray = arr.filter(function (el) {
       
        return (el.name.toLowerCase().includes(event.target.value.toLowerCase()))
      });
      console.log(newArray)
      setarr(newArray);
    } 
    else{
      setarr(master);
    }
  }




  function handleClick() {
    var value=document.getElementById("one").value;
    console.log(value);

    if(value.toLowerCase()!=="")
    {
      var newArray = arr.filter(function (el) {
       
        return (el.name.toLowerCase().includes(value.toLowerCase()))
      });
      console.log(newArray)
      setarr(newArray);
    } 
    else{
      setarr(master);
    }
  }
  









  return (
    
    <div className="container border border-primary mt-5">

      <H1 value={"listings"}></H1>

      <div className="input-group ">
      <Input classname={"form-control rounded"} placeholder={"Search"} funChange={handleChange} id={"one"}  value={inPut}></Input>

        <Btn type="button" classname="btn btn-primary ms-3" text={"Search"} funClick={handleClick}></Btn>
      
      </div>
      
      <input className=" mt-2 mb-2 col-1 p-2" type="text" readOnly value={arr.length+" Users "}></input>

      <Table dataArr={arr}></Table>
    </div>
  );
}

export default App;
