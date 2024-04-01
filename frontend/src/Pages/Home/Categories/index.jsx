import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchApi from "../../../Utils/fetchApi";

export const CategoryCard = ({ img, name }) => {
  return (
    <>
      <Link to={`/products/${name}`}>
        <img src={img} className="w-24 h-24 rounded-full" />
        <h4 className="mt-1">
          {name}
        </h4>
      </Link>
    </>
  );
};

export default function Categories() {
  const [categories, setCategories] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchApi("categories?populate=*");
      setCategories(res.data);
    })();
  }, []);
  const items = categories?.map((e, index) => (
    <CategoryCard
      key={index}
      name={e.attributes.name}
      img={
        import.meta.env.VITE_BASE_URL +
        e?.attributes?.images?.data[0]?.attributes?.url
      }
    />
  ));
  return (
    <>
      <div className="container my-24 text-center select-none">
        <div className="flex justify-center gap-5 lg:gap-x-40">
          {items}
        </div>
      </div>
    </>
  );
}
