import CollectionItems from "@/components/CollectionItems";

const Collection = () => {
  return (
    <div className="mt-10">
      <div className="grid place-items-center gap-10 md:grid-cols-2  lg:grid-cols-3">
        <CollectionItems />
      </div>
    </div>
  );
};

export default Collection;
