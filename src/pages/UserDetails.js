import ReactDOM from "react-dom/client";
import useFetch from "../pages/UsersData";

const Users = () => {
  const [data] = useFetch("https://reqres.in/api/users?page=2");

  return (
    <div id="usersdata">
      <h2 className='m-0 p-5'>Users List</h2>
      <table>
        <thead>
          <tr>
            <th className='w-1/12'>Id</th>
            <th className='w-1/5'>First Name</th>
            <th className='w-1/5'>Last Name</th>
            <th className='w-1/5'>Email</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((user) => (
              <tr key={user.id}>
                <td className='w-1/12'>{user.id}</td>
                <td className='w-1/5'>{user.first_name}</td>
                <td className='w-1/5'>{user.last_name}</td>
                <td className='w-1/5'>{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Loading users data...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Users;