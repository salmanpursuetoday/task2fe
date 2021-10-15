import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RollNumber = () => {
  const history = useHistory();

  const [rollNumber, setRollNumber] = useState();

  const handleSubmit = () => {
    if (!rollNumber || rollNumber?.length > 6 || rollNumber?.length < 6) {
      alert("Roll Number should be 6 digits")
      return;
    }
    history.push(`/result/${rollNumber}`)

  }
  return (
    <div className="container-fluid">
      <div className="row mt-5 text-center">
        <div className="col-md-12" >
          <h1 className="text-uppercase heading1">Bise Lahore</h1>
          <h6 className="headig2">Board of Intermediate and Secondary Education Lahore</h6>
          <center>
            <div className="result-criteria text-center mt-5">
              <p className="text-light">RESULT SEARCHING CRITERIA</p>
              <p className="text-light">INTERMEDIATE ANNUAL EXAMINATION, 2021</p>
            </div>
          </center>

          <center>
            <div className="search-div mt-5" style={{ width: '32%', }}>

              <p className="search-by-rollno text-light">SEARCH  BY ROLLNO..</p>
              <h2 className="enter-rollno">Enter Roll No</h2>
              <input className="mt-3 mb-3 roll-no-input text-center" type="number" maxLength="6" value={rollNumber} onChange={(e) => setRollNumber(e?.target?.value)} /><br />
              <button className="text-uppercase get-result-button text-light mb-4" type="submit" onClick={handleSubmit}>get result</button>
            </div>
          </center>

          <center>
            <p className="link mt-5">Click Here To Download: <a href="https://drive.google.com/file/d/1Z8JgnPKyDuu5NYBkQMMM_PkmvXV0Xx0P/view" target="_blank" className="link">Result Gazette INTERMEDIATE ANNUAL EXAMINATION, 2021</a> </p>
          </center>



        </div>
      </div>
    </div>
  );
};

export default RollNumber