import { useState } from "react";
import IconFavBlack from "../../assets/IconFavBlack.png";
import IconFav from "../../assets/IconFav.png";

const ProductCard = ({ product, backgroundColor }) => {
  const [selectedProduct, setSelectedProduct] = useState(false);
  const [likedProduct, setLikedProduct] = useState();
  const discountApplied = [];

  if (product.discount && !product.isVegan) {
    const discount = 15 / 100;
    const total = product.price - product.price * discount;
    discountApplied.push(total);
  }

  return (
    <div>
      <div
        class="flex relative "
        onMouseLeave={() => setSelectedProduct(!selectedProduct)}
        onMouseEnter={() => setSelectedProduct(!selectedProduct)}
      >
        <img
          class="relative w-60 border-solid border border-grey cursor-pointer md:w-94 h-98 "
          src={selectedProduct ? product.img2 : product.img1}
        />

        <img
          class="absolute w-7 h-7 z-10 right-5 top-96 cursor-pointer hover "
          onClick={() => setLikedProduct(!likedProduct)}
          src={!likedProduct ? IconFav : IconFavBlack}
        />
        {product.discount === true && product.isVegan === false ? (
          <span class="absolute w-9rem text-center text-white text-xs bg-brown p-2 right-px ">
            UP TO 15% OFF
          </span>
        ) : (
          <span class="absolute w-9rem text-center text-white text-xs bg-clearGreen p-2 right-px ">
            VEGAN
          </span>
        )}
      </div>
      <div>
        <div class="flex flex-col justify-center items-center w-60 h-24 border-solid border border-gray cursor-pointer md:w-94 h:24">
          {/*
           */}{" "}
          <div class="text-base">{product.name}</div>
          <div class="text-xs p-2">
            <span
              style={{
                color: "grey",
                textDecoration:
                  product.discount && !product.isVegan && "line-through",
              }}
            >
              {"€" + product.price}
            </span>
            {product.discount && !product.isVegan && (
              <span class="text-clearBrown">
                {"   From " + "€" + discountApplied}
              </span>
            )}
            {product.preOrder && <span class="text-green-800"> PRE-ORDER</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
