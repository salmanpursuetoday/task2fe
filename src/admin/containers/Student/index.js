import React from 'react';
import StudentView from '../../components/Student';

import axios from '../../../utils/helpers/axios';

const Student = () => {

  const handleAddStudent = async (data)=>{
    const res = await axios.post('/student/create', data)
    console.log("test123 res", res)
    
  }

  return (
    <StudentView {...{handleAddStudent}} />
  );
};

export default Student;