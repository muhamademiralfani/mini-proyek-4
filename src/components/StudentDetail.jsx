/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const StudentDetail = ({ togleModal, student }) => {
  return (
    <div className='modal-overlay modal-open'>
      <div className='modal-content'>
        <div className='modal-header '>
          <h5 className='modal-title' id='inputDataModalLabel'>
            Student Detail
          </h5>
          <button
            onClick={togleModal}
            type='button'
            className='btn-close'
            aria-label='Close'
          />
        </div>
        <div className='modal-body '>
          <div>
            <table className='table table-bordered'>
              <tbody>
                <tr>
                  <th className='bg-light' style={{ width: '30%' }}>
                    Name
                  </th>
                  <td>{student.name}</td>
                </tr>
                <tr>
                  <th className='bg-light'>NIM</th>
                  <td>{student.nim}</td>
                </tr>
                <tr>
                  <th className='bg-light'>Class</th>
                  <td>{student.class}</td>
                </tr>
                <tr>
                  <th className='bg-light'>Year</th>
                  <td>{student.year}</td>
                </tr>
                <tr>
                  <th className='bg-light'>Guardian Name</th>
                  <td>{student.guardian_name}</td>
                </tr>
                <tr>
                  <th className='bg-light'>Birth Date</th>
                  <td>{student.birthDate}</td>
                </tr>
                <tr>
                  <th className='bg-light'>Address</th>
                  <td>{student.address}</td>
                </tr>
                <tr>
                  <th className='bg-light'>Gender</th>
                  <td>{student.gender}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
