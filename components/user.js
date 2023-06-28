
function User({ user, users }) {
  console.log(users);
  return (
    <div key={user.id}>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default User;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
