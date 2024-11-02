/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const StudentForm = ({
  onChange,
  togleModal,
  isEdit,
  onSubmit,
  student,
  error,
  fieldErrors,
}) => {
  return (
    <div className='container-cstm'>
      <div className='modal-overlay modal-open'>
        <div className='modal-content'>
          <div className='modal-header '>
            <h5 className='modal-title' id='inputDataModalLabel'>
              {isEdit ? 'Edit Data Mahasiswa ' : 'Input Data Mahasiswa '}
            </h5>
            <button
              type='button'
              onClick={togleModal}
              className='btn-close'
              aria-label='Close'
            />
          </div>
          {error && (
            <div className='alert alert-danger'>
              <i className='bi bi-exclamation-triangle me-2'></i>
              {error}
            </div>
          )}
          <div className='modal-body-scrollable'>
            <form onSubmit={onSubmit} className='needs-validation'>
              <div className='row'>
                {/* Kolom pertama */}
                <div className='col-12 col-md-6'>
                  <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>
                      Nama
                    </label>
                    <input
                      type='text'
                      id='name'
                      value={student.name}
                      className={`form-control ${
                        fieldErrors.name ? 'is-invalid' : ''
                      }`}
                      onChange={onChange}
                      name='name'
                      placeholder='Masukkan Nama'
                      required=''
                    />
                    {fieldErrors.name && (
                      <div className='invalid-feedback'>{fieldErrors.name}</div>
                    )}
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='class' className='form-label'>
                      Kelas
                    </label>
                    <input
                      type='text'
                      name='class'
                      className={`form-control ${
                        fieldErrors.class ? 'is-invalid' : ''
                      }`}
                      value={student.class}
                      onChange={onChange}
                      id='class'
                      placeholder='Masukkan Kelas'
                      required
                    />
                    {fieldErrors.class && (
                      <div className='invalid-feedback'>
                        {fieldErrors.class}
                      </div>
                    )}
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='guardian_name' className='form-label'>
                      Nama Wali
                    </label>
                    <input
                      type='text'
                      onChange={onChange}
                      className={`form-control ${
                        fieldErrors.guardian_name ? 'is-invalid' : ''
                      }`}
                      value={student.guardian_name}
                      name='guardian_name'
                      id='guardian_name'
                      placeholder='Masukkan Nama Wali'
                      required
                    />
                    {fieldErrors.guardian_name && (
                      <div className='invalid-feedback'>
                        {fieldErrors.guardian_name}
                      </div>
                    )}
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='address' className='form-label'>
                      Alamat
                    </label>
                    <textarea
                      className={`form-control ${
                        fieldErrors.address ? 'is-invalid' : ''
                      }`}
                      value={student.address}
                      id='address'
                      name='address'
                      onChange={onChange}
                      rows={2}
                      placeholder='Masukkan Alamat'
                      required=''
                    />
                    {fieldErrors.address && (
                      <div className='invalid-feedback'>
                        {fieldErrors.address}
                      </div>
                    )}
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='mb-3'>
                    <label htmlFor='nim' className='form-label'>
                      NIM
                    </label>
                    <input
                      type='text'
                      className={`form-control ${
                        fieldErrors.nim ? 'is-invalid' : ''
                      }`}
                      inputMode='numeric'
                      maxLength={10}
                      value={student.nim}
                      onChange={onChange}
                      id='nim'
                      name='nim'
                      placeholder='Masukkan NIM'
                      required
                    />
                    {fieldErrors.nim && (
                      <div className='invalid-feedback'>{fieldErrors.nim}</div>
                    )}
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='year' className='form-label'>
                      Tahun
                    </label>
                    <input
                      type='text'
                      inputMode='numeric'
                      maxLength={2024}
                      value={student.year}
                      min={2000}
                      name='year'
                      onChange={onChange}
                      className={`form-control ${
                        fieldErrors.year ? 'is-invalid' : ''
                      }`}
                      id='year'
                      placeholder='Masukkan Tahun'
                      required
                    />
                    {fieldErrors.year && (
                      <div className='invalid-feedback'>{fieldErrors.year}</div>
                    )}
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='birthDate' className='form-label'>
                      Tanggal Lahir
                    </label>
                    <input
                      type='date'
                      value={student.birthDate}
                      onChange={onChange}
                      name='birthDate'
                      className={`form-control ${
                        fieldErrors.birthDate ? 'is-invalid' : ''
                      }`}
                      id='birthDate'
                      required=''
                    />
                    {fieldErrors.birthDate && (
                      <div className='invalid-feedback'>
                        {fieldErrors.birthDate}
                      </div>
                    )}
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Jenis Kelamin</label>
                    <select
                      className={`form-control ${
                        fieldErrors.gender ? 'is-invalid' : ''
                      }`}
                      name='gender'
                      onChange={onChange}
                      value={student.gender}
                      id='gender'
                      required>
                      <option>Pilih Jenis Kelamin</option>
                      <option value='male'>Laki-laki</option>
                      <option value='female'>Perempuan</option>
                    </select>
                    {fieldErrors.gender && (
                      <div className='invalid-feedback'>Invalid Message</div>
                    )}
                  </div>
                </div>
              </div>

              <div className='modal-footer'>
                {isEdit ? (
                  <button type='submit' className='btn btn-warning'>
                    <i className='bi bi-pencil-square'></i> Edit
                  </button>
                ) : (
                  <button type='submit' className='btn btn-primary'>
                    <i className='bi bi-arrow-up-square'></i> Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
