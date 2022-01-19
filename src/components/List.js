import Employees from '../employees.json'

const List = () => {
  return <div>
      <h2>Employees</h2>
      <table border="3">
                        <tbody>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Company</th>
                            </tr>
                           
                            {Employees.map((employee, i) => (
                                <tr key={i}>
                                    <td>{i}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.address}</td>
                                    <td>{employee.company}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
  </div>;
};

export default List;
