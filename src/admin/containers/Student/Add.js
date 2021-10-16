import React from 'react';
import StudentView from '../../components/Student/Add';

import axios from '../../../utils/helpers/axios';

const Student = () => {

  const handleAddStudent = async (data) => {
    const res = await axios.post('/student/create', data)
    alert(res?.data?.message);
  }

  return (
    <StudentView {...{ handleAddStudent }} />
  );
};

export default Student;