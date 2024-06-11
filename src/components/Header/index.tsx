"use client";

import { Inter } from "next/font/google";
import Container from "../Container";
import Link from "next/link";
import Button from "../Button";
import Cart from "../Cart";
import { useEffect, useState } from "react";
import CateroiesInterface from "@/interfaces/interfaces";
import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

const Header: React.FC<CateroiesInterface> = ({ categories }) => {
  const [total, setTotal] = useState(0);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const testFc = () => {
    setIsOpenCart((prev) => !prev);
  };

  const selector = useSelector((state) => state.cart.cartTotal);

  useEffect(() => {
    setTotal(selector);
  }, [selector]);

  return categories ? (
    <header
      className={`${inter.className} px-[0] py-[20px] bg-[white] text-[black] [border-bottom:1px_solid_black]`}
    >
      <Container>
        <div className="flex justify-between">
          <div className="flex gap-[10px] items-center">
            <Link href="/">Главная</Link>
            <div className="relative group">
              <span className="group-hover:block cursor-pointer">
                {" "}
                Категории
                <span className="absolute rotate-0 -right-[15px] group-hover:rotate-90 transition-transform duration-200">
                  {">"}
                </span>
              </span>
              <div className="flex flex-col absolute bg-[white] px-[10px] py-[10px] pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200">
                {categories?.map((category) => (
                  <Link key={category} href={`/category/${category}`}>
                    <p className="px-[10px] py-[10px]">{category}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative">
              <Button text={"Корзина"} onClick={testFc} />
              <span className="p-[5px] text-[12px] text-[white] absolute -top-[5px] -right-[5px] bg-[red] rounded-full leading-[6px]">
                {total}
              </span>
            </div>

            {isOpenCart ? <Cart disable={false} /> : <Cart disable={true} />}
          </div>
        </div>
      </Container>
    </header>
  ) : null;
};

export default Header;
