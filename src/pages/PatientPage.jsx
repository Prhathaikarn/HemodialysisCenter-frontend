import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Add, Lab, Med, State, Hospital } from '../icons';
import { getPatientById } from '../api/patient-api';
import { useParams } from 'react-router-dom';

export default function PatientPage() {
  const [patient, setPatient] = useState({});
  const [hnId, setHnId] = useState();

  const params = useParams();

  console.log(params);

  // useEffect(() => {
  //   setHnId(params.hnId); // 5 sec
  // }, []);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const res = await getPatientById(hnId);
        setPatient(res.data);
        setHnId(params.hnId);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPatient();
  }, [hnId]);

  // console.log(patient);

  return (
    <div>
      <div className="fixed top-0 left-0 w-screen">
        <Navbar />
      </div>
      <div className="flex mt-20 gap-4">
        <div className="flex-[2] py-10">
          <div className="flex gap-6 bg-gray-300 p-4 pl-8 rounded-lg text-xl text-blue-900">
            <div className="flex justify-center items-center">
              <Hospital />
            </div>
            <div>
              <p className="text-2xl font-bold">{patient?.hnId}</p>
              <p>{patient?.firstName + ' ' + patient?.lastName}</p>
              <p>
                Doctor : Dr.{patient?.doctorFname + ' ' + patient?.doctorLname}
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-10 gap-6 p-4 pl-32">
            <button className="flex justify-start items-center gap-2 pl-8 text-blue-900 text-xl font-bold px-4 py-2 rounded-lg shadow-lg bg-yellow-300 hover:bg-gray-300 hover:scale-125 duration-200 w-[220px] h-14">
              <Lab /> Laboratory
            </button>
            <button className="flex justify-start items-center gap-2 pl-8 text-blue-900 text-xl font-bold px-4 py-2 rounded-lg shadow-lg bg-blue-200 hover:bg-gray-300 hover:scale-125 duration-200 w-[220px] h-14">
              <Add /> Add new lab
            </button>
            <button className="flex justify-start items-center gap-2 pl-8 text-blue-900 text-xl font-bold px-4 py-2 rounded-lg shadow-lg bg-blue-200 hover:bg-gray-300 hover:scale-125 duration-200 w-[220px] h-14">
              <Med /> Medication
            </button>
            <button className="flex justify-start items-center gap-2 pl-8 text-blue-900 text-xl font-bold px-4 py-2 rounded-lg shadow-lg bg-blue-200 hover:bg-gray-300 hover:scale-125 duration-200 w-[220px] h-14">
              <State /> State of CKD
            </button>
          </div>
        </div>
        <div className="flex-[5]">
          <div>
            <div className="m-10 text-blue-900">
              <p className="text-center text-3xl font-semibold">
                Hemodialysis Laboratory Record
              </p>

              <div className="flex justify-center border border-blue-900 text-xl text-center font-semibold bg-blue-200 mt-5 p-2 w-[900px]">
                <div className="w-[220px]">Lab01</div>
                <div className="w-[220px]">Lab02</div>
                <div className="w-[220px]">Labo3</div>
                <div className="w-[220px]">Lab04</div>
                <div className="w-[220px]">Lab05</div>
              </div>

              <div className="w-[900px] h-96 border border-blue-900"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0  w-screen">
        <Footer />
      </div>
    </div>
  );
}
