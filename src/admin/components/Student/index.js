import React from 'react';
import moment from 'moment';
import Header from '../Header';

const Student = (props) => {
  const { students } = props;
  
  return (
    <div className="conatiner">
      <Header />
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-12">

            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Full name</th>
                  <th scope="col">Father Name</th>
                  <th scope="col">registration No</th>
                  <th scope="col">roll No</th>
                  <th scope="col">Created At</th>
                </tr>
              </thead>
              <tbody>
                {students?.map((item) =>
                  <tr>
                    <td>{item?.fullName}</td>
                    <td>{item?.fatherName}</td>
                    <td>{item?.registrationNo}</td>
                    <td>{item?.rollNumber}</td>
                    <td>{moment(item?.createdAt).utc(false).format('MM/DD/YYYY')}</td>
                  </tr>
                )}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;