import { FaTrashAlt } from 'react-icons/fa';
const LineItem = ({ item, handleChange, handleDelete }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => {
          handleChange(item.id);
        }}
      />
      <label
        style={item.checked ? { textDecoration: 'line-through' } : null}
        onDoubleClick={() => {
          handleChange(item.id);
        }}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;
