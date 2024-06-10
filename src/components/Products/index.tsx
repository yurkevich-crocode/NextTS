import Image from "next/image";
import Container from "../Container";
import Title from "../Title";
import Link from "next/link";

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
  return page === true ? (
    <div>
      <Container>
        <Title text="Products" />
        <div className="grid grid-cols-[repeat(4,_1fr)] gap-[30px]">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link href={`product/${product.id}`}>
                <div className="relative pt-[56.25%] h-[300px] bg-[white]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute left-[0] top-[0] w-full h-[300px] object-contain"
                  />
                </div>
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
    <div>
      <div className="grid grid-cols-[repeat(4,_1fr)] gap-[30px]">
        {products?.map((product) => (
          <div key={product.id} className="group">
            <Link href={`/product/${product.id}`}>
              <div className="relative pt-[56.25%] h-[300px] bg-[white]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute left-[0] top-[0] w-full h-[300px] object-contain"
                />
              </div>
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
    </div>
  );
};

export default Products;
