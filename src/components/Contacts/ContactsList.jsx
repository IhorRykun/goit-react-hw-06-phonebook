import css from '../Contacts/ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeContact,
  getStoreContacts,
  getStoreFilter,
} from 'Redux/phonebook/phonebookSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contactGallery = useSelector(getStoreContacts);
  const filter = useSelector(getStoreFilter);

  const henandleDelete = id => {
    dispatch(removeContact(id));
  };

  let rendered = [];
  const normalizedFilter = filter.toLowerCase().trim();
  const filterContacts = contactGallery.filter(cont =>
    cont.name.toLowerCase().includes(normalizedFilter)
  );

  filter.length === 0
    ? (rendered = contactGallery)
    : (rendered = filterContacts);
  return (
    <ul className={css.list}>
      {rendered.map(cont => (
        <li className={css.item}>
          <span>{cont.name}: </span>
          <span>{cont.number}</span>
          <button
            className={css.button__del}
            onClick={e => henandleDelete(cont.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
