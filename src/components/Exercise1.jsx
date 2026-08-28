import { users } from "../data/data";

const Exercise1 = () => {
  const listUsers = users.map((user) => (
    <li key={user.id}>
      {user.name}
      {user.age >= 18 && "（成人）"}
    </li>
  ));

  return <ul>{listUsers}</ul>;
};

export default Exercise1;
