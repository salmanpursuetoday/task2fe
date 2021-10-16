import React, { useEffect, useState } from 'react';
import AddResultView from '../../components/AddResult';

import axios from '../../../utils/helpers/axios';

const AddResult = () => {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, [])


  const getStudents = async () => {
    const res = await axios.get('/student/get');
    setStudents([...res?.data?.data])
  }

  const handleAddResult = async (data) => {
    const res = await axios.post('/result/create', data);
    alert(res?.data?.message);
    return res?.data;
  }

  return (
    <AddResultView {...{ students, handleAddResult }} />
  );
};

export default AddResult;