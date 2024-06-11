import HeadWrapper from "@/components/HeadWrapper";
import Products from "@/components/Products";
import Banner from "@/components/Banner";
import Notification from "@/components/Notification";

interface HomeProps {
  products: [];
  categories: [];
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
  const products = await res.json();

  const resCat = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await resCat.json();

  return {
    props: {
      products,
      categories,
    },
  };
}
