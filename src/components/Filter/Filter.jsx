import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterStorageContacts } from '../../redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const [filter, setFilter] = useState('');

  const handleChange = event => {
    setFilter(event.target.value.trim());

    const filterUpdateContacts = contacts.filter(contact => {
      // console.log(contact.name.toLowerCase().includes(event.target.value));
      return contact.name.toLowerCase().includes(event.target.value);
    });

    dispatch(filterStorageContacts(filterUpdateContacts));
  };

  return (
    <input name="filter" type="text" onChange={handleChange} value={filter} />
  );
}
