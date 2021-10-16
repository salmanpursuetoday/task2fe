import React, { useState } from 'react';
import Header from '../Header';

const Student = (props) => {
  const { handleAddStudent } = props;

  const [fullName, setFullName] = useState();
  const [fatherName, setFatherName] = useState();
  const [registrationNo, setRegistrationNo] = useState();
  const [rollNumber, setRollNumber] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!rollNumber || rollNumber?.length>6 || rollNumber?.length<6){
      alert("Roll Number should be 6 digits");
    }
    const data = {
      fullName,
      fatherName,
      registrationNo,
      rollNumber
    }
    setFullName("");
    setFatherName("");
    setRollNumber("");
    setRegistrationNo("");
    const res = await handleAddStudent(data);
   
  }

  return (
    <div className="container-fluid">
      <Header />

      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 mt-5">

          <form onSubmit={handleSubmit} className="styled-from">
            <h2>Student Form</h2>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Full Name</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={fullName} onChange={(e)=>setFullName(e?.target?.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Father Name</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={fatherName} onChange={(e)=>setFatherName(e?.target?.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Roll Number</label>
              <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={rollNumber} onChange={(e)=>setRollNumber(e?.target?.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Registeration No</label>
              <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={registrationNo} onChange={(e)=>setRegistrationNo(e?.target?.value)}/>
            </div>
            <input type="submit" value="Submit" className="btn-primary w-100" />
          </form>



        </div>
      </div>
    </div>
  );
};

export default Student;