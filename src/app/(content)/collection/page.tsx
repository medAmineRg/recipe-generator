import Item from "@/components/Item";
import React from "react";

const Collection = () => {
  return (
    <div className="mt-10 p-5">
      <div className="grid place-items-center gap-10 md:grid-cols-2  lg:grid-cols-3">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Collection;
