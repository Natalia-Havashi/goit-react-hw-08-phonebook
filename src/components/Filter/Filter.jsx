import {
  FilterContainer,
  FilterInput,
  FilterTitle,
} from 'components/styled.styled';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/Contacts/filterSlice';
import { getFiltered } from 'redux/Contacts/selector';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFiltered);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <FilterContainer>
      <FilterTitle>Find contacts by me</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        onChange={handleFilterChange}
        value={filter}
      />
    </FilterContainer>
  );
};

export default Filter;
