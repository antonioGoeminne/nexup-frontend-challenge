import React from 'react';
import { ChangeEventHandler } from '../types/helpers';
import '../styles/SearchFilter.css';

interface SearchFilterProps {
  handleSearch: ChangeEventHandler;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({ handleSearch }) => {
  return (
    <input className="input" placeholder="Buscar..." onChange={handleSearch} />
  );
};
