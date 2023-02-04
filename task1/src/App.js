import React, { useState } from "react";
import "formiojs/dist/formio.full.css";
import { FormBuilder } from '@formio/react';


const formIoData = {
  display: "form",
  components: []
};

function App() {
  const [formData, setFormData] = useState(formIoData);
  const printResult=()=>{
    console.log(formData)
  }
  return (
    <div className="App">
       
        <button className="green" onClick={printResult}>
          display result
        </button>
        <FormBuilder form={formData}
           onChange={(schema) => console.log("schema",schema)}                  
         />, document.getElementById('builder')   
    </div>
  );
}

export default App;
