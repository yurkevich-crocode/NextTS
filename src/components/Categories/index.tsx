import Image from "next/image";
import Container from "../Container";
import Title from "../Title";
import Link from "next/link";
import CateroiesInterface from "@/interfaces/interfaces";

const Categories = ({ categories }: CateroiesInterface) => {
  return (
    <div>
      <Container>
        <Title text="Categories" />
        <div className="grid grid-cols-[repeat(4,_1fr)] gap-[30px]">
          {categories.map((category) => (
            <Link href={`/product/${category}`}>
              <span>{category}</span>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
