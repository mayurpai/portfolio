import { Poetry } from "@/constants/Poetry";
import React from "react";

export default function PoetryCard() {
  return Poetry.map((item, id) => {
    return (
      <div key={id}>
        <p>{item.description}</p>
      </div>
    );
  });
}
