import { useState } from "react";
import Employees from "../employees.json";

const List = () => {
  const [checkedState, setCheckedState] = useState(
    new Array(Employees.length).fill(false)
  );
  const [totalSelected, setTotalSelected] = useState([]);

  const handleChange = (position) => {
    const updatedCheckedState = checkedState.map((isChecked, i) =>
      i === position ? !isChecked : isChecked
    );

    setCheckedState(updatedCheckedState);

    const selected = updatedCheckedState.reduce(
      (selectedList, currentState, index) => {
        if (currentState === true) {
          selectedList.push(index);
        }
        return selectedList;
      },
      []
    );

    setTotalSelected(selected);
  };
  return (
    <div>
      <h2>Employees</h2>
      <h3>
        Selected:{" "}
        {totalSelected.map((i) => (
          <span key={i}>{i + 1}, </span>
        ))}{" "}
      </h3>
      <table border="3">
        <tbody>
          <tr>
            <th></th>
            <th></th>
            <th>Name</th>
            <th>Address</th>
            <th>Company</th>
          </tr>

          {Employees.map((employee, index) => (
            <tr key={index}>
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
