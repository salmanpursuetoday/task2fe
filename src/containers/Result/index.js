import React, { useEffect, useState } from 'react';

import ResultView from '../../components/Result';
import axios from '../../utils/helpers/axios';

const Result = (props) => {
  const [loading, setLoading] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    getResult();
  }, [props?.match?.params?.rollNumber])

  const getResult = async () => {
    setLoading(true)
    const res = await axios.get(`/result/get/${props?.match?.params?.rollNumber}`);
    setResult(res?.data?.data);
    setLoading(false)
  }

  if (!result && loading) return <p>Loading...</p>; 
  if (!result && !loading) return <h2>Result Not found</h2>;

  return (<ResultView {...{ result }} />
  );
};

export default Result;