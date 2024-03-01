import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContainerSearch, Input, Label } from './SearchBox.styled';
import { updateFilter } from '../../redux/filtersSlice';
import { selectSearchFilter } from '../../redux/selectors';

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const searchFilter = useSelector(selectSearchFilter);

  const handleChange = e => {
    const { value } = e.target;
    dispatch(updateFilter(value));
  };

  return (
    <ContainerSearch>
      <Label htmlFor={searchId}>Find contacts by name</Label>
      <Input type="text" name="search" id={searchId} value={searchFilter} onChange={handleChange} />
    </ContainerSearch>
  );
};

export default SearchBox;
