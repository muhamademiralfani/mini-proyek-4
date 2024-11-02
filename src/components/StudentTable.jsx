/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const StudentTable = ({
  toggleModalForm,
  togleModalDetail,
  students,
  handleDeleteStudent,
}) => {
  return (
    <div className='table-responsive'>
      <div>
        <h3 className='text-center mb-5'>List Of Students</h3>
      </div>
      <button
        onClick={() => toggleModalForm(false)}
        className='btn btn-primary float-start fw-bold mb-3'>
        Add Student
      </button>
      <table className='table table-bordered '>
        <thead>
          <tr>
            <th scope='col'>No</th>
            <th scope='col'>Name</th>
            <th scope='col'>NIM</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {students.map((student, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{student.name}</td>
              <td>{student.nim}</td>
              <td className='justify-content-end itemcenter d-flex flex-row h-100'>
                <button
                  onClick={() => togleModalDetail(student, student.id)}
                  className='btn btn-outline-primary btn-sm float-end'>
                  <i className='bi bi-eye'></i>
                </button>
                <button
                  onClick={() => toggleModalForm(true, student, student.id)}
                  className='btn btn-outline-warning btn-sm mx-2 float-end'>
                  <i className='bi bi-pencil-square'></i>
                </button>
                <button
                  onClick={() => handleDeleteStudent(student.id)}
                  className='btn btn-outline-danger btn-sm  float-end'>
                  <i className='bi bi-trash'></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
