import { users } from "../data/data";

const Exercise1 = () => {
  const userList = users.map((user) => (
    <li key={user.id}>
      {user.name}
      {user.age >= 18 && "（成人）"}
    </li>
  ));

  return <ul>{userList}</ul>;
};

export default Exercise1;
