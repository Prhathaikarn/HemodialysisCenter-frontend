import AddPatientInput from './AddPatientInput';
import validateAddPatient from '../validators/validate-addPatient';
import InputErrorMessage from './InputErrorMessage';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addPatient } from '../api/patient-api';
import { toast } from 'react-toastify';

const initialInput = {
  firstName: '',
  lastName: '',
  hnId: '',
  gender: '',
  birthDate: '',
  age: '',
  mobilePhone: '',
  thaiNationalId: '',
  doctorFname: '',
  doctorLname: '',
};

export default function AddPatientForm() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    // console.log(e);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      // console.log('sdfsfs');

      const result = validateAddPatient(input);
      // console.log('result------', result);

      if (result) {
        return setError(result);
      }
      setError({});
      await onSubmit(input);
      setInput(initialInput);
    } catch (err) {
      // console.log('err-------', err);
    }
  };

  const onSubmit = async (value) => {
    try {
      // console.log('value------', value);
      const result = await addPatient(value);
      if (result) {
        navigate('/patient/getallpatient');
        toast.success('Add Patient Success!')
      }
    } catch (err) {
      // toast.error(err.message)
      console.log(err)
    }
  };

  return (
    <form
      className="text-blue-900 font-semibold text-lg"
      onSubmit={handleSubmitForm}
    >
      <div>
        <div className="grid grid-cols-3 gap-x-3 gap-y-4 mb-4">
          <div>
            <AddPatientInput
              name="firstName"
              placeholder="First name"
              value={input.firstName}
              onChange={handleChangeInput}
              isInvalid={error.firstName}
            />
            {error.firstName && <InputErrorMessage message={error.firstName} />}
          </div>
          <div>
            <AddPatientInput
              name="lastName"
              placeholder="Last name"
              value={input.lastName}
              onChange={handleChangeInput}
              isInvalid={error.lastName}
            />
            {error.lastName && <InputErrorMessage message={error.lastName} />}
          </div>
          <div>
            <AddPatientInput
              name="hnId"
              placeholder="HN"
              value={input.hnId}
              onChange={handleChangeInput}
              isInvalid={error.hnId}
            />
            {error.hnId && <InputErrorMessage message={error.hnId} />}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-4 text-center items-center mb-4">
          <div className="text-start">
            <div className="flex gap-10">
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChangeInput}
                />
                <label htmlFor="Male">Male</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChangeInput}
                />
                <label htmlFor="Female">Female</label>
              </div>
              <div className="flex gap-2 ">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  onChange={handleChangeInput}
                />
                <label htmlFor="Other">Other</label>
              </div>
            </div>
            {error.gender && <InputErrorMessage message={error.gender} />}
          </div>

          <div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-4">
              <div>
                <AddPatientInput
                  name="birthDate"
                  placeholder="Date of birth"
                  type="date"
                  value={input.birthDate}
                  onChange={handleChangeInput}
                  isInvalid={error.birthDate}
                />
                {error.birthDate && (
                  <InputErrorMessage message={error.birthDate} />
                )}
              </div>
              <div>
                <AddPatientInput
                  name="age"
                  placeholder="Age"
                  value={input.age}
                  onChange={handleChangeInput}
                  isInvalid={error.age}
                />
                {error.age && <InputErrorMessage message={error.age} />}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-4">
          <div>
            <AddPatientInput
              name="mobilePhone"
              placeholder="Mobile Number"
              value={input.mobilePhone}
              onChange={handleChangeInput}
              isInvalid={error.mobilePhone}
            />
            {error.mobilePhone && (
              <InputErrorMessage message={error.mobilePhone} />
            )}
          </div>
          <div>
            <AddPatientInput
              name="thaiNationalId"
              placeholder="Thai National ID"
              value={input.thaiNationalId}
              onChange={handleChangeInput}
              isInvalid={error.thaiNationalId}
            />
            {error.thaiNationalId && (
              <InputErrorMessage message={error.thaiNationalId} />
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-4">
          <div className="col-span-full mt-12">Doctor's Name</div>
          <div>
            <AddPatientInput
              name="doctorFname"
              placeholder="First name"
              value={input.doctorFname}
              onChange={handleChangeInput}
              isInvalid={error.doctorFname}
            />
            {error.doctorFname && (
              <InputErrorMessage message={error.doctorFname} />
            )}
          </div>
          <div>
            <AddPatientInput
              name="doctorLname"
              placeholder="Last name"
              value={input.doctorLname}
              onChange={handleChangeInput}
              isInvalid={error.doctorLname}
            />
            {error.doctorLname && (
              <InputErrorMessage message={error.doctorLname} />
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-16 gap-8">
        <button
          type="submit"
          className="flex justify-center items-center gap-2 text-blue-900 text-xl font-bold px-4 py-2 rounded-lg shadow-lg bg-yellow-300 hover:bg-gray-300 w-44 h-14"
          // onClick={handleSubmitForm(onSubmit)}
        >
          Submit
        </button>
        <Link to="/patient/getallpatient">
          <button className="flex justify-center items-center gap-2 text-blue-900 text-xl font-bold px-4 py-2 rounded-lg shadow-lg bg-gray-300 hover:bg-gray-300 w-44 h-14">
            Cancel
          </button>
        </Link>
      </div>
    </form>
  );
}
