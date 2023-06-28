import { useState } from "react";
import User from "../../components/user";

function UserList({ users }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>User List {count}</h2>
        <button onClick={() => setCount(count+1)}>Click me</button>
      {users &&
        users.length > 0 &&
        users.map((user) => {
          return (
            <User key={user.id} user={user} />
          );
        })}
    </>
  );
}

export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
