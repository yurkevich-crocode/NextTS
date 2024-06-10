import Image from "next/image";
import Container from "../Container";
import Title from "../Title";

interface Banner {
  image: string;
  title: string;
}

const Banner = ({ image, title }: Banner) => {
  return (
    <section>
      <Container>
        <div className="flex gap-[50px] items-center justify-center">
          <div>
            <Title text={title} />
            <p>
              fakeStoreApi is a free online REST API that you can use whenever
              you need Pseudo-real data for your e-commerce or shopping website
              without running any server-side code. It's awesome for teaching
              purposes, sample codes, tests, etc.
            </p>
          </div>
          <div className="w-full flex justify-center p-[40px]">
            <Image
              src={image}
              width={450}
              height={100}
              alt="banner"
              quality={100}
            ></Image>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
