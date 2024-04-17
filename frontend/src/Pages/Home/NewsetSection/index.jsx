import React, { useEffect, useState } from "react";
import fetchApi from "../../../Utils/fetchApi";
import { Link } from "react-router-dom";
export default function NewestSection() {
    const [newestProduct, setNewestProduct] = useState();
    const [sort, setSort] = useState('createdAt:asc');
    useEffect(() => {
        (async () => {
            let res = await fetchApi(`products?populate=*&sort=${sort}`);
            setNewestProduct(res.data);
            console.log(res.data[0, 1, 2, 3])
        })();
    }, []);
    const slideItems = newestProduct?.slice(0, 5).map((e, index) => (
        <div class="bg-white/85 shadow-md py-0 md:px-5 md:py-4 px-2 lg:py-16 rounded-2xl overflow-auto " key={index}>
            <img className="w-full h-[40%] lg:h-[40%] xl:h-[70%] rounded-md" src={import.meta.env.VITE_BASE_URL + e?.attributes?.images?.data[0]?.attributes?.url} alt={e?.attributes?.name} />
            <h4 className="text-left mt-3 text-base md:text-2xl">{e?.attributes?.name}</h4>
            <div className="text-xs sm:text-lg">MAIN PRICE: <s className="text-red-600">${e?.attributes?.price}</s></div>
            <div className="text-xs sm:text-lg">DISCOUNT PRICE: <span className="text-sky-400">${e?.attributes?.price * (1 - e?.attributes?.discount / 100)}</span></div>
            <div className="mt-3">
                <Link to={`product-details/${e?.id}/${e?.attributes?.name.split(' ').join('-')}`}>
                    <span className="bg-slate-200 inline-flex items-center rounded-full p-0.5 float-end"><box-icon name='shopping-bags' type='solid' color='grey' ></box-icon></span>
                </Link>
                <box-icon name='star' color='#fed7aa' type='solid'></box-icon>
                <box-icon name='star' color='#fed7aa' type='solid'></box-icon>
                <box-icon name='star' color='#fed7aa' ></box-icon>
                <box-icon name='star' color='#fed7aa' ></box-icon>
            </div>
        </div>
    ));
    return (
        <>
            <div className="container">
                <div class="lg:text-3xl text-xl mx-auto mt-10 mb-4">NEWEST PRODUCTS</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-5">
                    {slideItems}
                </div>
            </div>
        </>
    );
}
