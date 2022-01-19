import Employees from "../employees.json";
import "../App.css";
import ListItem from "./ListItem";

const List = ({ totalSelected, handleChange, checkedState }) => {
   
  return (
    <div className="App">
      <h2>Employees</h2>
      <h3>
        Selected:{" "}
        {totalSelected.map((i) => (
          <span key={i}>{i + 1}, </span>
        ))}{" "}
      </h3>
      <table className="table" border="2">
        <tbody>
          <tr>
            <th></th>
            <th></th>
            <th>Name</th>
            <th>Address</th>
            <th>Company</th>
          </tr>

          {Employees.map((employee, index) => (
            <ListItem key={index} employee={employee} index={index} handleChange={handleChange} checkedState={checkedState}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
