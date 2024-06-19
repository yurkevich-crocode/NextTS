import HeadWrapper from "@/components/HeadWrapper";
import Products from "@/components/Products";
import Banner from "@/components/Banner";
import Notification from "@/components/Notification";

// Define the types
interface Product {
  id: number;
  title: string;
  image: string;
  price: string;
}

interface Category {
  name: string;
}

interface HomeProps {
  products: any;
  categories: Category[];
}

export default function Home({ products }: HomeProps) {
  return (
    <>
      <HeadWrapper title={"Главная"} />
      <main>
        <Banner
          title={"NextJs + TypeScript + FakeStoreAPI"}
          image={"/images/banner.webp"}
        />
        <Products products={products} page={true} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  const resCat = await fetch("https://fakestoreapi.com/products/categories");
  const categories: Category[] = await resCat.json();

  return {
    props: {
      products,
      categories,
    },
  };
}
