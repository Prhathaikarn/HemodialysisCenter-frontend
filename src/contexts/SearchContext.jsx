import { createContext, useContext, useEffect, useState } from 'react';

export const SearchContext = createContext();

export default function SearchContextProvider({ children }) {
  const [searchInput, setSearchInput] = useState('');
  const [searching, setSearching] = useState(null);

  const searchPatient = (searchValue) => {
    const searching = searchInput.filter((patient) =>
      patient.hnId.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchInput(searching);
  };

  return (
    <PatientContext.Provider
      value={{
        searchInput,
        setSearchInput,
        searching,
        setSearching,
        searchPatient,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
}

export const useSearchPatient = () => {
  return useContext(SearchContext);
};
