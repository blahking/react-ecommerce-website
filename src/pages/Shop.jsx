import { useState, useRef } from "react";

import Helmet from "../components/Helmet/Helmet";
import Banner from "../components/UI/Banner";
import Container from "../components/Layout/Container";
import products from "../assets/data/products";
import ProductsList from "../components/Products/ProductsList";

const sortArrByProductName = (arr, type) => {
  const sortedResult = arr.slice().sort((first, second) => {
    const fristProductName = first.productName;
    const secondProductName = second.productName;
    let idx = 0;

    while (
      fristProductName.charCodeAt(idx) === secondProductName.charCodeAt(idx)
    ) {
      idx++;
    }

    if (type === "ascending") {
      return (
        fristProductName.charCodeAt(idx) - secondProductName.charCodeAt(idx)
      );
    }

    if (type === "descending") {
      return (
        secondProductName.charCodeAt(idx) - fristProductName.charCodeAt(idx)
      );
    }
  });

  return sortedResult;
};

const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const sortRef = useRef();

  //filter productsData by category's name and sort the productsData
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    const sortType = sortRef.current.value;

    if (filterValue === "") {
      sortProducts(products, sortType);
    } else {
      const filteredProducts = products.filter(
        (item) => item.category === filterValue
      );

      sortProducts(filteredProducts, sortType);
    }
  };

  //sort the productsData
  const sortProducts = (products, type) => {
    const sortedProducts = sortArrByProductName(products, type);

    setProductsData(sortedProducts);
  };

  const handleSearch = (e) => {
    const searchWord = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName
        .toLocaleLowerCase()
        .includes(searchWord.toLocaleLowerCase())
    );

    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <Banner title="Products" />
      <Container className="grid grid-cols-2 lg:grid-cols-4 items-center gap-y-5 lg:mt-[30px]">
        <div>
          <select onChange={handleFilter} className="filter__select">
            <option value="">Filter By Category</option>
            <option value="sofa">Sofa</option>
            <option value="mobile">Mobile</option>
            <option value="chair">Chair</option>
            <option value="watch">Watch</option>
            <option value="wireless">Wireless</option>
          </select>
        </div>
        <div className="justify-self-end lg:justify-self-start">
          <select
            className="filter__select"
            ref={sortRef}
            onClick={() => {
              sortProducts(productsData, sortRef.current.value);
            }}
          >
            <option>Sort By</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
        <div className="col-span-2 relative border">
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearch}
            className="w-full py-2 pl-[40px] border-none outline-none"
          />
          <span className="absolute left-0 top-1/2 translate-y-[-50%] text-xl pl-2">
            <i className="ri-search-line"></i>
          </span>
        </div>
      </Container>
      <Container>
        <div>
          {productsData.length === 0 ? (
            <h1 className="text-3xl lg:text-5xl text-center py-[100px]">
              No products are found!
            </h1>
          ) : (
            <ProductsList products={productsData} />
          )}
        </div>
      </Container>
    </Helmet>
  );
};

export default Shop;
