import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout title="Home">
        <Link href="/about">
            <a>Go to about</a>
        </Link>
        <p>welcome</p>
    </Layout>
  );
};

export default Index;
