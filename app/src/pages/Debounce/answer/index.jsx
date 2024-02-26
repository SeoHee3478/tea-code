import React, { useState, useEffect } from 'react';
import { SearchBox } from './SearchBox';
import { SearchResults } from './SearchResult'
import { fetchCountries } from './countries';

const Debounce = () => {
  // const [query, setQuery] = useState("");
  // const [debouncedQuery, setDebouncedQuery] = useState(query);
  // const [countries, setCountries] = useState([]);
  // const [searching, setSearching] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => setDebouncedQuery(query), 1_000);
  //   return () => clearTimeout(timeout);
  // }, [query]);

  // useEffect(() => {
  //   setSearching(true);
  //   fetchCountries(debouncedQuery).then((countries) => {
  //     setCountries(countries);
  //     setSearching(false);
  //   });
  // }, [debouncedQuery]);

  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState(query);
  const [countries, setCountries] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceQuery(query), 1000);
    return () => clearTimeout(timeout);
  }, [query])

  useEffect(() => {
    setSearching(true);
    fetchCountries(debounceQuery).then((countries) => {
      setCountries(countries);
      setSearching(false);
    });
  }, [debounceQuery]);


  return (
    <>
      <SearchBox value={query} onChange={(e) => setQuery(e.target.value)} />
      <SearchResults countries={countries} searching={searching} />
    </>
  );
}


export default Debounce;