import PropTypes from 'prop-types';
import css from '../Filter/Filterds.module.css';
import { useDispatch } from 'react-redux';
import { isFilter } from 'Redux/phonebook/phonebookSlice';

export const Filterds = () => {
  const dispatch = useDispatch();

  const hendleFilter = e => {
    dispatch(isFilter(e.target.value));
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input className={css.input} type="text" onChange={hendleFilter} />
    </div>
  );
};

Filterds.propTypes = {
  onInput: PropTypes.func,
};
