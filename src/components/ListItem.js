import React, { memo } from "react";
import '../App.css'

const ListItem = memo(({ index, employee, handleChange, checkedState }) => {
  return (
    <tr className={checkedState[index] ? 'checked' : null }>
      <td>
        <input
          type="checkbox"
          value={index}
          name={index}
          onChange={() => handleChange(index)}
          checked={checkedState[index]}
        ></input>
      </td>
      <td>{index + 1}</td>
      <td>{employee.name}</td>
      <td>{employee.address}</td>
      <td>{employee.company}</td>
    </tr>
  );
});

export default ListItem;
