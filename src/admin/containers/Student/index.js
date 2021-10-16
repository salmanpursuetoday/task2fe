import React, { useEffect, useState } from 'react';

import StudentView from '../../components/Student';
import axios from '../../../utils/helpers/axios';

const Student = () => {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getStudents();
  }, [])

  const getStudents = async () => {
    setLoading(true);
    const res = await axios.get('/student/get');
    setStudents([...res?.data?.data]);
    setLoading(false);
  }

  if(loading) return <p>loading...</p>

  return (<StudentView {...{ students }} />
  );
};

export default Student;