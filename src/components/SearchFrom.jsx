import React, { useState } from 'react';
import SearchInput from './SearchInput';

function SearchForm({ keyword }) {
  const [patientlist, setPatientlist] = useState([]);
  const [searching, setSearching] = useState([]);
  const updateKeyword = (keyword) => {
    const filter = patientlist.filter((patient) => {
      return patient.hnId.toLowerCase().includes(keyword.toLowerCase());
    });
    setSearching(updateKeyword);
  };
  return (
    <div>
      <SearchInput keyword={keyword} onChange={updateKeyword} />
    </div>
  );
}

export default SearchForm;
