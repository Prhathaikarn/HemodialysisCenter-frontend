import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getPatientById } from '../api/patient-api';
import EditPatientForm from './EditPatientForm';

export default function PatientList(prop) {
  const { list, getAllPatient, setPatientList } = prop;

  // const inputEl = useRef();

  const fetchPatient = async (hnId) => {
    try {
      const res = await getPatientById(hnId);
      // console.log('---ress', res);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log('------', list);
  const arr = list.map((patient) => (
    <div
      className="border border-blue-900"
      id={patient.hnId}
      key={patient.hnId}
    >
      <div className="flex justify-center items-center hover:bg-blue-100 p-2">
        <Link
          to={`/patient/getpatientbyid/${patient.hnId}`}
          className="flex justify-between"
        >
          <div className="w-[120px]">{patient.hnId}</div>
          <div className="w-[220px]">
            {patient.firstName + ' ' + patient.lastName}
          </div>
          <div className="w-[220px]">
            {patient.doctorFname + ' ' + patient.doctorLname}
          </div>
        </Link>

        <div className="flex justify-between items-center w-[150px] ">
          <Link to={`/patient/getpatientbyid/${patient.hnId}`}>
            <div>{patient.updatedAt.toString().slice(0, 10)}</div>
          </Link>
          <div className="flex">
            <label
              htmlFor={`my-modal-${patient.hnId}`}
              className="flex justify-center items-center z-5 text-blue-900 text-xs font-bold px-2 py-2 rounded-lg shadow-lg bg-blue-200 hover:bg-gray-300  w-fit cursor-pointer"
              onClick={() => fetchPatient(patient.hnId)}
            >
              Edit
            </label>
            <input
              type="checkbox"
              id={`my-modal-${patient.hnId}`}
              className="modal-toggle"
            />
            <div className="modal">
              <div className="modal-box">
                <EditPatientForm
                  value={patient}
                  getAllPatient={getAllPatient}
                  setPatientList={setPatientList}
                />
              </div>
              <label
                className="modal-backdrop"
                htmlFor={`my-modal-${patient.hnId}`}
              >
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="flex justify-center items-center text-blue-900">
      <div>
        <div className="flex border border-blue-900  text-xl font-semibold bg-blue-200 mt-10 p-2">
          <div className="w-[120px]">HN</div>
          <div className="w-[220px]">Name</div>
          <div className="w-[220px]">Doctor's name</div>
          <div className="w-[150px]">Last update</div>
        </div>

        <div className="flex flex-col border border-blue-900 mb-10">{arr}</div>
      </div>
    </div>
  );
}
