import ProductCard from "../Card/productCard";

const HandOfProducts = ({ products }) => {
  return (
    <div class="flex flex-wrap relative justify-center top-10 ">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default HandOfProducts;
