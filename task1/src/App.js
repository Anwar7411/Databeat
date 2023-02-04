import React, { useState } from "react";
import { Formio } from "react-formio";
import "formiojs/dist/formio.full.css";
import { FormBuilder } from '@formio/react';


const formIoData = {
  display: "form",
  components: []
};

function App() {
  const [formData, setFormData] = useState(formIoData);
  const printResult = () => {
    Formio.createForm(document.getElementById("formio-result"), {
      components: formData.components
    }).then((form) => {
      console.log(form.component.components);
      form.on("submit", (data) => console.log("submit", data));
    });
    
  };
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
