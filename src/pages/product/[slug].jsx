import Link from "next/link";
import HeadWrapper from "@/components/HeadWrapper";
import Container from "@/components/Container";
import Title from "@/components/Title";
import Button from "@/components/Button";
import { useDispatch } from "react-redux";
import { addCart } from "@/features/cartSlice";
import { useEffect, useState } from "react";

export default function ProductPage({ product }) {
  const dispatch = useDispatch();

  const addItemCart = (product) => {
    dispatch(addCart(product));
  };

  return (
    <>
      <HeadWrapper title={product.title} />
      <main>
        <Container>
          <div>
            <div className="flex gap-[5px] mb-[60px]">
              <Link href="/">На главную</Link>/
              <span className="text-[gray]">{product.title}</span>
            </div>
            <div className="flex md-lg:flex-col gap-[50px]">
              <div className="relative min-w-[300px] w-[300px] h-[300px] bg-[white]">
                <img
                  src={product.image}
                  alt={product.title}
                  className=" left-[0] top-[0] w-full h-[300px] object-contain"
                />
              </div>
              <div className="flex flex-col gap-[20px]">
                <Title text={product.title} />
                <span>Category: {product.category}</span>
                <p className="text-[20px]">{product.description}</p>
                <div className="flex gap-[10px] text-[30px]">
                  <span>Price: </span>
                  <p>{product.price} $</p>
                </div>
                <Button
                  text={"Добавить в корзину"}
                  onClick={() => addItemCart(product)}
                />
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.slug}`);
  const product = await res.json();

  const resCat = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await resCat.json();

  return {
    props: {
      product,
      categories,
    },
  };
}
