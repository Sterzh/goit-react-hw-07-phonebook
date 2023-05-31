import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterStorageContacts } from '../../redux/filterSlice';
import { selectContacts } from 'redux/selectors';
import css from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const filterUpdate = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter);
    });

    dispatch(filterStorageContacts(filterUpdate));
  }, [contacts, dispatch, filter]);

  const handleChange = event => {
    setFilter(event.target.value.trim());

    const filterUpdate = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(event.target.value);
    });

    dispatch(filterStorageContacts(filterUpdate));
  };

  return (
    <>
      <p className={css.filterText}>Find contacts by name</p>
      <input
        name="filter"
        type="text"
        onChange={handleChange}
        value={filter}
        className={css.filterInput}
      />
    </>
  );
}
