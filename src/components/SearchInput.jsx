import React from 'react';

export default function SearchInput({ keyword, onChange }) {
  return (
    <input
      key="search-bar"
      value={keyword}
      placeholder="Search"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
