import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Add, Search } from '../icons';
import PatientList from '../components/PatientList';
import { useState, useEffect } from 'react';
import { getAllPatient } from '../api/patient-api';

export default function AllPatientPage() {
  const [patientList, setPatientList] = useState([]);

  useEffect(() => {
    getAllPatient().then((res) => {
      // console.log(res);
      setPatientList(res);
    });
  }, []);

  return (
    <div className="w-full h-auto">
      <Navbar />
      <div className="w-full h-10"> </div>
      <div className="text-4xl font-bold mb-10 p-4 text-blue-900 w-full text-center bg-blue-200">
        Patient System
      </div>
      <div className="flex justify-center gap-4">
        <input
          type="search"
          className="block w-[500px] text-blue-900 shadow rounded-md border px-3 outline-none text-xl focus:ring"
          placeholder="Search Name or HN "
        />
        <button
          type="submit"
          className="flex justify-center items-center gap-2 text-blue-900 text-xl font-bold px-4 py-2 rounded-lg shadow-lg bg-blue-200 hover:bg-gray-300 w-44 h-14"
        >
          <Search /> Search
        </button>
        {/* <SearchForm /> */}
        <Link to="/addpatient">
          <button className="flex justify-center items-center gap-2 text-blue-900 text-xl font-bold px-4 py-2 rounded-lg shadow-lg bg-yellow-300 hover:bg-gray-300 w-48 h-14">
            <Add /> New Patient
          </button>
        </Link>
      </div>
      <div>
        <PatientList
          list={patientList}
          getAllPatient={getAllPatient}
          setPatientList={setPatientList}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
