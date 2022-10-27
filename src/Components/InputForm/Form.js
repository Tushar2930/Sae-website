import React, { useEffect, useState} from 'react';
import FileBase from 'react-file-base64';
import { dataRef } from "../Data_controller/firebase";
import "./Form.css";


function InputForm() {

    const [data, setData] = useState({
        topic:"", date:"",head:"",selectedFile:"",content:""
   });

   function handleSubmit(e){
    e.preventDefault();
    dataRef.ref().child('data').push(data);
    
    alert("Data Submitted");
    setData({topic:"", date:"",head:"",selectedFile:"",content:""});

   }

    return (<div><div className="row">
    <div className="col-md-12">
      <form  onSubmit={handleSubmit}>
        <h1> BLOG CONTENT </h1>
        
        <fieldset>
         
          <h2>Topics</h2>
          <input type="text" id="name" name="topic" value={data.topic} onChange={(e) => setData({ ...data, topic: e.target.value })}/>
        
          <h2>Head</h2>
          <input type="text" id="mail" name="head" value={data.head} onChange={(e) => setData({ ...data, head: e.target.value })}/>
    
          <h2>Date</h2>
          <input type="date" id="password" name="date" value={data.date} onChange={(e) => setData({ ...data, date: e.target.value })}/> 
        
 
         <h2>Content</h2>
          <textarea id="bio" name="content" value={data.content} onChange={(e) => setData({ ...data, content: e.target.value })}></textarea>
          <h2>Image</h2>
          <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setData({ ...data, selectedFile: base64 })} /></div>
          
         </fieldset>
       
        <button className='submitButton' type="submit">SUBMIT</button>
        
       </form>
        </div>
      </div></div>
    );
  }
  
  export default InputForm;