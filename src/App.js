import { useState } from "react";
import Employees from "./employees.json";
import List from "./components/List";

function App() {
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
        if (currentState) {
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
      <List
        checkedState={checkedState}
        totalSelected={totalSelected}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
