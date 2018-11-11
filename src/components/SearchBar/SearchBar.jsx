// @flow
import React, { useState } from 'react';

export function SearchBar({
  query = '',
  onSubmit = console.log,
}: {
  query: string,
  onSubmit: string => *,
}) {
  const [ q, setQuery ] = useState(query);

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(q);
    }}
    >
      <label>Альбом:</label>
      <input type="text" value={q} onChange={handleQueryChange} />
      <input type="submit" value="Search" />
    </form>
  );
}
