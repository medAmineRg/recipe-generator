import Item from "@/components/Item";
import React from "react";

const Collection = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col justify-center items-center gap-5 lg:flex-row">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Collection;
