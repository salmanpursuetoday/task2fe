import React from 'react';

const ResultView = (props) => {
  const { result } = props;
  
  const part1 = result?.finalResults?.find((item) => item?.partNo === 1);
  const part2 = result?.finalResults?.find((item) => item?.partNo === 2);

  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-md-12">
          <div>
            <div style={{ width: '100%', margin: '0 auto' }}>
              <ul>
                <li style={{ display: 'inline-block' }}>
                  <table bordercolor="#345487" width="100%" cellPadding={3} cellSpacing={0} border={1} align="center" style={{ borderCollapse: 'collapse' }}>
                    <tbody><tr>
                      <td colSpan={3}>
                        <div style={{ width: '100%' }}>
                          <div className="hader-data">
                            <div className="rl">
                              <h1 className="h1">
                                BISE LAHORE</h1>
                              Board of Intermediate and Secondary Education Lahore</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                      <tr>
                        <td colSpan={3} align="center" className="pageheading">INTERMEDIATE (ANNUAL) EXAMINATION, 2021</td>
                      </tr>
                      <tr>
                        <td colSpan={3}>
                          <table width="100%" cellPadding={3} cellSpacing={0}>
                            <tbody><tr>
                              <td width="2%" />
                              <td width="28%" align="left" className="TextHeading">ROLL NO: </td>
                              <td width="70%" className="pagetext" align="left">{part1?.studentId?.rollNumber}</td>
                            </tr>
                              <tr>
                                <td />
                                <td align="left" className="TextHeading">FULL NAME: </td>
                                <td className="pagetext" align="left">{part1?.studentId?.fullName}</td>
                              </tr>
                              <tr>
                                <td />
                                <td align="left" className="TextHeading">FATHER NAME: </td>
                                <td className="pagetext" align="left">{part1?.studentId?.fatherName}</td>
                              </tr>
                              <tr>
                                <td />
                                <td align="left" className="TextHeading">REGISTRATION NO: </td>
                                <td className="pagetext" align="left">{part1?.studentId?.registrationNo}</td>
                              </tr>
                            </tbody></table>
                        </td>
                      </tr>
                      <tr>
                        <td className="pagetext" align="left" colSpan={3} style={{ color: '#FF0000', fontSize: 14 }} />
                      </tr>
                      <tr>
                        <td colSpan={3}>
                          <table width="100%" cellPadding={3} cellSpacing={0} border={1} bordercolor="#345487" style={{ borderCollapse: 'collapse' }}>
                            <tbody><tr bgcolor="#CCCCCC">
                              <td className="TextHeading"><strong>SUBJECT</strong></td>
                              <td className="TextHeading" align="center"><strong>THEORY - I</strong></td>
                              <td className="TextHeading" align="center"><strong>THEORY - II</strong></td>
                              <td className="TextHeading" align="center"><strong>PRACTICAL - I</strong></td>
                              <td className="TextHeading" align="center"><strong>PRACTICAL - II</strong></td>
                              <td className="TextHeading" align="center"><strong>TOTAL</strong></td>
                              <td className="TextHeading" align="center"><strong>PERCENTILE SCORE</strong></td>
                              <td className="TextHeading" align="center"><strong>RELATIVE GRADE</strong></td>
                              <td className="TextHeading" align="center"><strong>STATUS</strong></td>
                            </tr>
                              <tr>
                                <td className="TextHeading">URDU</td>
                                <td className="pagetext" align="center">{part1?.urdu}</td>
                                <td className="pagetext" align="center">{part2?.urdu}</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">{part1?.urdu+part2?.urdu}</td>
                                <td className="pagetext" align="center">48.00</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">PASS</td>
                              </tr>
                              <tr>
                                <td className="TextHeading">ENGLISH</td>
                                <td className="pagetext" align="center">{part1?.english}</td>
                                <td className="pagetext" align="center">{part2?.english}</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">{part1?.english+part2?.english}</td>
                                <td className="pagetext" align="center">48.00</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">PASS</td>
                              </tr>
                              <tr>
                                <td className="TextHeading">ISLAMIC EDUCATION</td>
                                <td className="pagetext" align="center">{part1?.islamicEducation}</td>
                                <td className="pagetext" align="center">{part2?.islamicEducation}</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">{part2?.islamicEducation+part1?.islamicEducation}</td>
                                <td className="pagetext" align="center">48.00</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">PASS</td>
                              </tr>
                              <tr>
                                <td className="TextHeading">PAKISTAN STUDIES</td>
                                <td className="pagetext" align="center">{part1?.pakistanStudies}</td>
                                <td className="pagetext" align="center">{part2?.pakistanStudies}</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">{part1?.pakistanStudies+part2?.pakistanStudies}</td>
                                <td className="pagetext" align="center">48.00</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">PASS</td>
                              </tr>
                              <tr>
                                <td className="TextHeading">Physics</td>
                                <td className="pagetext" align="center">{part1?.physics}</td>
                                <td className="pagetext" align="center">{part2?.physics}</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">{part1?.physics+part2?.physics}</td>
                                <td className="pagetext" align="center">51.52</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">PASS</td>
                              </tr>
                              <tr>
                                <td className="TextHeading">Computer</td>
                                <td className="pagetext" align="center">{part1?.computer}</td>
                                <td className="pagetext" align="center">{part2?.computer}</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">{part1?.computer+part2?.computer}</td>
                                <td className="pagetext" align="center">41.84</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">PASS</td>
                              </tr>
                              <tr>
                                <td className="TextHeading">Maths</td>
                                <td className="pagetext" align="center">{part1?.math}</td>
                                <td className="pagetext" align="center">{part2?.math}</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center" />
                                <td className="pagetext" align="center">{part2?.math+part1?.math}</td>
                                <td className="pagetext" align="center">46.94</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">PASS</td>
                              </tr>
                              <tr>
                                <td className="TextHeading" />
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center">---</td>
                                <td className="pagetext" align="center" />
                                <td className="pagetext" align="center" />
                                <td className="pagetext" align="center" />
                              </tr>
                              <tr>
                                <td />
                                <td />
                                <td />
                                <td />
                                <td className="TextHeading" align="center">TOTAL</td>
                                <td className="TextHeading" align="center">{result?.totalNo}</td>
                                <td className="pagetext" align="center">---</td>


                              </tr>
                              <tr>
                                <td className="TextHeading" style={{ font: 'bold' }} align="center" colSpan={8} />
                                <td className="TextHeading" align="center">PASS {result?.totalNo}</td>
                              </tr>
                            </tbody></table>
                        </td>
                      </tr>
                      <tr>
                        <td width="40%" align="center" className="resData">
                          <table align="center" width="98%" cellPadding={3} cellSpacing={0}>
                            <tbody><tr>
                              <td align="left" className="pagetext">
                                <ul>
                                  <li><b><em>The marks awarded are the best prediction of the performance and has been awarded under Covid-19 Examination Policy, hence considered as valid and fair.</em></b>
                                  </li><li> Students have to pass Theory and Practical both for Practical Subjects.</li>
                                  <li> The result of the candidates who appeared in  Intermediate (Annual) Examination 2021, is notified. Errors and Omissions excepted.</li>
                                </ul>
                              </td>
                            </tr>
                            </tbody></table>
                        </td>
                        <td width="30%" align="center" className="resData">
                          <table width="100%" cellPadding={2} cellSpacing={0}>

                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3} align="center" className="resData"><p><a href="/">GO BACK TO RESULT PAGE </a></p></td>
                      </tr>
                      <tr>
                        <td colSpan={3} /></tr>
                    </tbody></table>
                  <table border={0} height={8} width={700} align="center">
                    <tbody>
                      <tr>
                        <td>
                          <div align="center"><font className="resData"> Copyright © 2002-2020 <a href="/index.html" style={{ color: 'black' }}>B.I.S.E, Lahore. </a> All Rights Reserved.</font></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default ResultView;