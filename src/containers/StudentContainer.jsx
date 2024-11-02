/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import StudentForm from '../components/StudentForm';
import StudentTable from '../components/StudentTable';
import StudentDetail from '../components/StudentDetail';
import Loading from '../components/Loading';
import {
  fetchStudent,
  postStudent,
  putStudent,
  detailStudent,
  deleteStudent,
} from '../utils/api';

export class StudentContainer extends Component {
  state = {
    modalForm: false,
    modalDetail: false,
    isEdit: false,
    students: [],
    isLoading: false,
    fieldErrors: {},
    error: null,
    currentStudent: {
      id: '',
      name: '',
      class: '',
      nim: '',
      guardian_name: '',
      birthDate: '',
      address: '',
      gender: '',
    },
  };

  componentDidMount() {
    this.getStudent();
  }

  async getStudent() {
    try {
      this.setState({ isLoading: true });
      const response = await fetchStudent();
      this.setState({ students: response.data });
    } catch (error) {
      this.setState({ error: this.getErrorMessage(error) });
    }
    this.setState({ isLoading: false });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      currentStudent: {
        ...prevState.currentStudent,
        [name]: value,
      },
    }));
    console.log(this.state.currentStudent);
  };

  togleModalForm = (isEdit = false, student = null, id = '') => {
    this.setState({
      isEdit,
      error: null,
      isLoading: false,
      fieldErrors: {},
      modalForm: !this.state.modalForm,
      currentStudent: student
        ? { ...student }
        : {
            id,
            name: '',
            nim: '',
            class: '',
            guardian_name: '',
            year: '',
            birthDate: '',
            address: '',
            gender: '',
          },
    });
  };

  togleModalDetail = (student) => {
    if (this.state.modalDetail) {
      this.setState({
        fieldErrors: {},
        modalDetail: !this.state.modalDetail,
        error: null,
        currentStudent: {},
      });
    } else {
      this.setState({ isLoading: true });
      detailStudent(student.id || '')
        .then((res) => {
          this.setState({
            modalDetail: !this.state.modalDetail,
            currentStudent: res.data,
          });
        })
        .catch((error) => {
          this.setState({ error: this.getErrorMessage(error) });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  };

  handleAddStudent = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true, error: null });
    const { currentStudent } = this.state;
    postStudent(currentStudent)
      .then((res) => {
        this.setState({
          fieldErrors: {},
          modalForm: false,
          students: [...this.state.students, res.data],
        });
        console.log(res);
      })
      .catch((error) => {
        this.setState({ error: this.getErrorMessage(error) });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleEditStudent = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true, error: null });
    const { currentStudent } = this.state;
    putStudent(currentStudent, currentStudent.id)
      .then((res) => {
        const updatedStudentData = res.data;
        const updatedStudents = this.state.students.map((student) => {
          if (student.id === updatedStudentData.id) {
            return updatedStudentData;
          }
          return student;
        });
        this.setState({
          students: updatedStudents,
          modalForm: false,
        });
      })
      .catch((error) => {
        this.setState({ error: this.getErrorMessage(error) });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleDeleteStudent = (id) => {
    this.setState({ isLoading: true, error: null });
    deleteStudent(id)
      .then(() => {
        const updatedStudents = this.state.students.filter(
          (student) => student.id !== id
        );
        this.setState({
          students: updatedStudents,
        });
      })
      .catch((error) => {
        this.setState({ error: this.getErrorMessage(error) });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  getErrorMessage(error) {
    if (error.response) {
      const responseData = error.response.data;
      const fieldErrors = {};

      if (Array.isArray(responseData.data)) {
        responseData.data.forEach((err) => {
          fieldErrors[err.path] = err.msg;
        });

        this.setState({ fieldErrors });
      } else if (responseData.message) {
        return responseData.message;
      }
    }

    return 'An unexpected error occurred. Please try again.';
  }

  render() {
    const { modalForm, modalDetail, isEdit, isLoading, error } = this.state;
    return (
      <div className='container mt-5'>
        {modalForm && (
          <StudentForm
            error={error}
            onChange={this.handleInputChange}
            togleModal={this.togleModalForm}
            student={this.state.currentStudent}
            onSubmit={isEdit ? this.handleEditStudent : this.handleAddStudent}
            isEdit={this.state.isEdit}
            fieldErrors={this.state.fieldErrors}
          />
        )}

        {isLoading ? (
          <Loading />
        ) : (
          <StudentTable
            error={error}
            isLoading={isLoading}
            handleDeleteStudent={this.handleDeleteStudent}
            students={this.state.students}
            toggleModalForm={this.togleModalForm}
            togleModalDetail={this.togleModalDetail}
          />
        )}

        {modalDetail && (
          <StudentDetail
            togleModal={this.togleModalDetail}
            student={this.state.currentStudent}
          />
        )}
      </div>
    );
  }
}

export default StudentContainer;
