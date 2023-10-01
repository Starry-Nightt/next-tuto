import { GetServerSideProps } from "next";
import React from "react";

function News({ data }) {
  return (
    <div>
      <div>News</div>
      {data && !!data.length && (
        <ul>
          {data.map((item) => (
            <li key={item.id} className="font-semibold">{item.title} - {item.category}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

export default News;
