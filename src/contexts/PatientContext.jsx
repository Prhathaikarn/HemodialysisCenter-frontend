import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import { getPatientById } from '../api/patient-api';

export const PatientContext = createContext();

export default function PatientProvider() {
  const [fetchPatient, setFetchPatient] = useState({});

  const getPatientByHnId = async (hnId) => {
    const res = await getPatientById(hnId);
    setFetchPatient(res.data);
  };

  return (
    <PatientContext.Provider
      value={{
        getPatientByHnId,
        fetchPatient,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
}

export const usePatient = () => {
  return useContext(PatientContext);
};
