import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterStorageContacts } from '../../redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
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
    <input name="filter" type="text" onChange={handleChange} value={filter} />
  );
}
