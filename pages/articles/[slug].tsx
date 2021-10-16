import { Article } from ".contentlayer/types";
import Page from "components/pages/articles/[slug]";
import {
  getAllArticles,
  getCurrentArticle,
  getNextArticles,
} from "lib/get-articles-data";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface IProps {
  mdxSource: Article;
  nextArticles: Article[];
}

const ArticlesSlugPage: NextPage<IProps> = ({ mdxSource, nextArticles }) => {
  return <Page article={mdxSource} nextArticles={nextArticles} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: getAllArticles().map((article) => {
      return {
        params: {
          slug: article.slug,
        },
      };
    }),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentArticle = getCurrentArticle(params);
  const nextArticles = getNextArticles(params);

  return {
    props: {
      mdxSource: currentArticle,
      nextArticles,
    },
  };
};

export default ArticlesSlugPage;
