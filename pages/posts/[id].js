import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className="font-bold text-3xl mb-2 mt-5 font-prata">
        {postData.title}
      </h1>

      <Date dateString={postData.date} />

      <div
        className="mt-5 content font-inter "
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />

    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
