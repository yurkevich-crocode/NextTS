import Image from "next/image";
import Container from "../Container";
import Title from "../Title";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addCart } from "@/features/cartSlice";
import Button from "../Button";
import { useState } from "react";

interface ProductsInterface {
  products: [
    product: {
      id: number;
      title: string;
      image: string;
      price: string;
    }
  ];
  page?: boolean;
}

const Products: React.FC<ProductsInterface> = ({ products, page }) => {
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();

  const addToCart = (product: {}) => {
    dispatch(addCart(product));
    setDisable(true);

    setTimeout(() => {
      setDisable(false);
    }, 1000);
  };

  return page === true ? (
    <div>
      <Container>
        <Title text="Товары" />
        <div className="grid grid-cols-[repeat(4,_1fr)] gap-[30px]">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative pt-[56.25%] h-[300px] bg-[white]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute left-[0] top-[0] w-full h-[300px] object-contain"
                />
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Button
                    text="В корзину"
                    onClick={() => addToCart(product)}
                    disable={disable}
                  />
                </div>
              </div>
              <Link href={`product/${product.id}`}>
                <h2 className="group-hover:text-blue-500 transition-colors duration-200">
                  {product.title}
                </h2>
                <p className="text-end group-hover:text-blue-500 transition-colors duration-200">
                  {product.price} $
                </p>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  ) : (
    <div className="grid grid-cols-[repeat(4,_1fr)] gap-[30px]">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <div className="relative pt-[56.25%] h-[300px] bg-[white]">
            <img
              src={product.image}
              alt={product.title}
              className="absolute left-[0] top-[0] w-full h-[300px] object-contain"
            />
            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Button
                text="Add to cart"
                disable={disable}
                onClick={() => addToCart(product)}
              />
            </div>
          </div>
          <Link href={`/product/${product.id}`}>
            <h2 className="group-hover:text-blue-500 transition-colors duration-200">
              {product.title}
            </h2>
            <p className="text-end group-hover:text-blue-500 transition-colors duration-200">
              {product.price} $
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
