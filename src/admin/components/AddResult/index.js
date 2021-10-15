import React, { useState, useContext } from 'react';
import Header from '../Header';

import './Style.css';

const AddResult = (props) => {
  const { students, handleAddResult } = props;
  const [rollNo, setRollNo] = useState();
  const [partNo, setPartNo] = useState(1);
  const [urdu, setUrdu] = useState();
  const [english, setEnglish] = useState();
  const [islamicEducation, setIslamicEducation] = useState();
  const [pakistanStudies, setPakistanStudies] = useState();
  const [physics, setPhysics] = useState();
  const [computer, setComputer] = useState();
  const [math, setMath] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const exist = students?.find((item) => item?.rollNumber == rollNo);
    if (!exist) {
      alert("this roll number not exist");
      return;
    }
    const data = {
      studentId: exist?._id,
      partNo: Number(partNo),
      urdu: Number(urdu),
      english: Number(english),
      islamicEducation: Number(islamicEducation),
      pakistanStudies: Number(pakistanStudies),
      physics: Number(physics),
      computer: Number(computer),
      math: Number(math)
    }
    const res = handleAddResult(data);
  }

  return (
    <div className="container-fluid">
      <Header/>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 mt-5">
          <form onSubmit={(e) => handleSubmit(e)} >
            <div className="row styled-from">
              <div className="col-md-12 text-center mb-3">
                <h2>Enter Result</h2>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Roll No</label>
                  <input type="number" className="form-control" required value={rollNo} onChange={(e) => setRollNo(e?.target?.value)} />
                </div>
              </div>
              <div className="col-6">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Part No</label>
                  <select class="form-control" id="exampleFormControlSelect1" value={partNo} onChange={(e) => setPartNo(e?.target?.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Urdu</label>
                  <input type="number" className="form-control" required value={urdu} onChange={(e) => setUrdu(e?.target?.value)} />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">English</label>
                  <input type="number" className="form-control" required value={english} onChange={(e) => setEnglish(e?.target?.value)} />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Islamic Studies</label>
                  <input type="number" className="form-control" required value={islamicEducation} onChange={(e) => setIslamicEducation(e?.target?.value)} />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Pakistan Studeis</label>
                  <input type="number" className="form-control" required value={pakistanStudies} onChange={(e) => setPakistanStudies(e?.target?.value)} />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Physics</label>
                  <input type="number" className="form-control" required value={physics} onChange={(e) => setPhysics(e?.target?.value)} />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Computer</label>
                  <input type="number" className="form-control" required value={computer} onChange={(e) => setComputer(e?.target?.value)} />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Math</label>
                  <input type="number" className="form-control" required value={math} onChange={(e) => setMath(e?.target?.value)} />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group mt-2">
                  <input type="submit" value="Submit" className="ui positive icon button btn btn-primary w-100 mt-4"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
};

export default AddResult;