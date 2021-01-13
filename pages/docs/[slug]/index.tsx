import Page from "components/pages/docs/[slug]";
import fs from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import dynamic from "next/dynamic";
import path from "path";
import React from "react";

const Callout = dynamic(
  import(/* webpackChunkName: "Callout" */ "components/mdx/callout")
);

const Jumbotron = dynamic(
  import(/* webpackChunkName: "Jumbotron" */ "components/mdx/jumbotron")
);

const Link = dynamic(
  import(/* webpackChunkName: "Link" */ "components/mdx/link")
);

const root = process.cwd();
const components = { Callout, Jumbotron, Link };
interface IProps {
  mdxSource: MdxRemote.Source;
  frontMatter: any;
  docs: any;
  slug: string;
}

const DocsSlugPage: NextPage<IProps> = ({
  docs,
  mdxSource,
  frontMatter,
  slug,
}) => {
  const content = hydrate(mdxSource, { components });

  return (
    <Page content={content} frontMatter={frontMatter} docs={docs} slug={slug} />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: fs.readdirSync(path.join(root, "data", "docs")).map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
  };
}

export async function getStaticProps({ params }) {
  const docsRoot = path.join(root, "data", "docs", `${params.slug}`);
  const docs = fs.readdirSync(docsRoot).map((p) => {
    const content = fs.readFileSync(path.join(docsRoot, p), "utf8");

    return {
      slug: p.replace(/\.mdx/, ""),
      content,
      frontMatter: matter(content).data,
    };
  });

  const source = fs.readFileSync(
    path.join(root, "data", "docs", `${params.slug}`, "01-index.mdx"),
    "utf8"
  );
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [
        require("remark-slug"),
        require("remark-code-titles"),
        require("remark-toc"),
        require("remark-external-links"),
      ],
      rehypePlugins: [
        require("rehype-autolink-headings"),
        require("mdx-prism"),
      ],
      compilers: [],
    },
    scope: {},
  });

  return {
    props: {
      docs,
      mdxSource,
      frontMatter: data,
      slug: params.slug,
    },
  };
}

export default DocsSlugPage;
