import React, { useState } from "react";
import { FormBuilder, Formio } from "react-formio";
import "formiojs/dist/formio.full.css";


const formIoData = {
  display: "form",
  components: [
    // {
    //   label: "Checkbox",
    //   tableView: false,
    //   key: "checkbox",
    //   type: "checkbox",
    //   input: true
    // },

    // {
    //   label: "Text Field",
    //   tableView: true,
    //   validate: {
    //     // pattern: "/^([A-Z][a-z .'-]*)*$/",
    //     customMessage: "Test error",
    //     // "custom": "valid = (input !== 'Joe')",
    //     minLength: 3,
    //     maxLength: 10
    //   },
    //   errorLabel: "Please fill in only letters.",
    //   key: "textField",
    //   type: "textfield",
    //   input: true
    // },
    // {
    //   type: "button",
    //   label: "Submit",
    //   key: "submit",
    //   disableOnInvalid: true,
    //   input: true,
    //   tableView: false
    // }
  ]
};

function App() {
  const [formData, setFormData] = useState([]);
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

        <FormBuilderIo
          form={formData}
          //onChange={schema => setFormData(schema)}
          // onSubmit={(data) => {
          //   console.log(data);
          // }}
          // saveForm={(data) => setFormData(data)}
          // saveText="Save Form"
           onSubmitDone={(data) => console.log(data)}
           
           
        />
        {/* <div style={{ display: "none" }}>
          <div id="formio-result" />
        </div> */}
    </div>
  );
}

export default App;
