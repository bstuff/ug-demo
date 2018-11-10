// @flow
import React, { useState } from 'react';

export function SearchBar({
  onSubmit = console.log,
}: {
  onSubmit: string => *,
}) {
  const [ query, setQuery ] = useState('');

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(query);
    }}>
      <label>Альбом:</label>
      <input type="text" value={query} onChange={handleQueryChange} />
      <input type="submit" value="Search" />
    </form>
  );
}
