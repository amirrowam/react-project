import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fetchApi from '../../Utils/fetchApi';

export function ProductCard({ img, name, price, desc, id, }) {
  return (
    <div class="bg-white/85 shadow-md  py-12 md:px-5 md:py-4 px-5 rounded-2xl">
      <img className="w-full h-30% lg:h-[50%] rounded-md" src={img} alt="products-img" />
      <h4 className="text-center mt-3 text-2xl">{name}</h4>
      <div className="text-sky-400">PRICE : ${price}</div>
      {desc.split(" ").slice(0, 10).join(" ")}...
      <div className="mt-3">
        <Link to={`/product-details/${id}/${name.split(" ").join("-")}`}>
          <span className="bg-slate-200 inline-flex items-center rounded-full p-0.5 float-end"><box-icon name='shopping-bags' type='solid' color='grey' ></box-icon>
          </span>
        </Link>
        <box-icon name='star' color='#fed7aa' type='solid'></box-icon>
        <box-icon name='star' color='#fed7aa' type='solid'></box-icon>
        <box-icon name='star' color='#fed7aa' ></box-icon>
        <box-icon name='star' color='#fed7aa' ></box-icon>
        <box-icon name='star' color='#fed7aa' ></box-icon>
      </div>
    </div>
  );
}

export default function Product() {
  const [rangeValue, setRangeValue] = useState(1000);
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState('createdAt:asc');
  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };
  useEffect(() => {
    (async () => {
      const res = await fetchApi(
        `products?populate=*${categoryName !== "all-categories"
          ? `&filters[categories][name][$eqi]=${categoryName}`
          : ""
        }&filters[price][$lte]=${rangeValue}&sort=${sort}`
      );
      console.log(res)
      setProducts(res.data);
    })();
  }, [rangeValue, categoryName, sort])

  const items = products?.map((e, index) => {
    return (
      <ProductCard
        key={index}
        id={e.id}
        name={e?.attributes?.name}
        price={e?.attributes?.price}
        desc={e?.attributes?.description}
        img={
          import.meta.env.VITE_BASE_URL +
          e?.attributes.images?.data[0]?.attributes?.url
        }
      />
    );
  });
  console.log(products)
  return (
    <>
      <div className='mx-4 mt-16 lg:mt-36 lg:flex'>
        <div className='w-full lg:w-[20%] border rounded-md p-3 min-h-5 select-none'>
          <label htmlFor="medium-range" className="block mb-2 text-gray-900 text-xl">Filter by Price</label>
          <p>Price : $0 - ${rangeValue}</p>
          <input id="medium-range" min={0} step={10} max={1000} type="range" value={rangeValue} onChange={(e) => setRangeValue(e.target.value)} className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointe" />

          <label htmlFor='sortSection' className='block mb-2 text-gray-900 text-xl'>Filter by</label>
          <select id='sortSection' onChange={handleChangeSort} className='block w-full p-2 mb-6 text-[1.1rem] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500' value={sort}>
            <option value={'createdAt:desc'}>Newest</option>
            <option value={'createdAt:asc'}>Oldest</option>
            <option value={'discount:desc'}>Offers</option>
            <option value={'price:desc'}>Highest price</option>
            <option value={'price:asc'}>Lowest price</option>
          </select>
        </div>
        <div className='w-full lg:w-[80%]'>
          <div className="lg:container mt-10 lg:mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 md:gap-5">
              {items}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
