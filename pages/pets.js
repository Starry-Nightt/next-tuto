import React from "react";
import Image from "next/image";

function Pets() {
  return (
    <div>
      Pets
      {["1", "2", "3"].map((path) => (
        <Image src={`/${path}.jpg`} width={1000} height={1000} />
      ))}
    </div>
  );
}

export default Pets;
