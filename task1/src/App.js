import React, { useState } from "react";
import "formiojs/dist/formio.full.css";
import { FormBuilder } from '@formio/react';
import './App.css'
import RotateRightIcon from '@mui/icons-material/RotateRight';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const formIoData = {
  display: "form",
  components: []
};
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "600px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function App() {
  const [formData, setFormData] = useState(formIoData);
  const [jsondata, setJsondata] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const stack1 = formIoData;
  const stack2 = formIoData;

  const printResult = () => {
    let json = []
    formData.components?.forEach((el, i) => {
      let obj = {}
      if (el?.data?.values!==undefined) {
        obj = {
          "headings": [{ "heading": `${el.label}` }],
          "position": i + 1,
          "family": el.key,
          "answers": el.data.values
        }
      } else {
        obj = {
          "headings": [{ "heading": `${el.label}` }],
          "position": i + 1,
          "family": el.key,
        }
      }
      json.push(obj);

    })
    setJsondata(json);
    handleOpen() ;
  }

  const handleclear = () => {
    setFormData(formIoData)
  }

  const handleundo = () => {
    // stack2.components.push(stack1.components[stack1.components.length-1]);
    // stack1.components.pop();
    // setFormData(stack1)
    // console.log()
  }

  const handlredo = () => {
    // setFormData(stack2)
    // stack2.components.pop();
  }
  console.log("form", formData)
  return (
    <div className="App">
      <div className="buttons">
        <button className="submitbtn" onClick={() =>printResult()} >
          Preview
        </button>
        <button onClick={() => handleclear()}>Clear All</button>
        <div >
          <label>Redo</label>
          <RotateRightIcon onClick={handlredo} />
        </div>
        <div>
          <label>Undo</label>
          <RotateLeftIcon onClick={handleundo} />
        </div>
      </div>

      <FormBuilder
        form={formData}
        onChange={(schema) => setFormData(schema)}
      />

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              JSON :
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {JSON.stringify(jsondata)}
            </Typography>
          </Box>
        </Modal>
      </div>

    </div>
  );
}

export default App;
