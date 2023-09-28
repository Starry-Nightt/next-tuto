import React from "react";
import User from "../../components/user";

function UserList({ data }) {
  return (
    <section>
      <b className="mb-6 block">List of user</b>
      <div className="flex flex-col gap-5">
        {data &&
          data.map((user, idx) => {
            return <User key={idx} {...user} />;
          })}
      </div>
    </section>
  );
}

export default UserList;

export const getServerSideProps = async (ctx) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
