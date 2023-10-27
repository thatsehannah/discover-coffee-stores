import Head from 'next/head';
import { useRouter } from 'next/router';

const Blah = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.blah}</title>
      </Head>
      Page {router.query.blah}
    </div>
  );
};

export default Blah;
