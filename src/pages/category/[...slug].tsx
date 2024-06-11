import Link from "next/link";
import HeadWrapper from "@/components/HeadWrapper";
import Container from "@/components/Container";
import Title from "@/components/Title";
import Products from "@/components/Products";

interface CategoryPage {
  title: string;
}

interface CategoryProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ products, title }: CategoryPage) {
  return (
    <>
      <HeadWrapper title={`Категория: ${title}`} />
      <main>
        <Container>
          <div>
            <div className="flex gap-[5px] mb-[60px]">
              <Link href="/">На главную</Link>/
              <span className="text-[gray]">{title}</span>
            </div>
            <div>
              <Title text={`Категория: ${title}`} />
              <Products page={false} products={products} />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}

export async function getServerSideProps({ params }: CategoryProps) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${params.slug}`
  );
  const products = await res.json();
  const title = params.slug;

  const resCat = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await resCat.json();

  return {
    props: {
      products,
      title,
      categories,
    },
  };
}
