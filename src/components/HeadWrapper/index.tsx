import Head from "next/head";

interface HeadInterface {
  title?: string | null;
}

const HeadWrapper: React.FC<HeadInterface> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
    </>
  );
};

export default HeadWrapper;
