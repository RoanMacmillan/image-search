import Layout from "@/components/containers/layout";
import Masonry from "@/components/containers/masonry";
import Nav from "@/components/containers/nav";
import SearchComponent from "@/components/containers/search";
import React from "react";
import HomeCarousel from "@/components/containers/home-carousel";
import Related from "@/components/containers/related";
import { UnsplashImage } from "@/pages/s/photos/[id]";

import { GetStaticProps } from "next";

interface HomeProps {
  images: UnsplashImage[];
}

const Home = ({ images }: HomeProps) => {
  return (
    <>
      <Layout title="Home">
        <Nav></Nav>
        <HomeCarousel></HomeCarousel>
        {/* <SearchComponent></SearchComponent> */}
       

         

        <Related images={images}></Related>
        {/* <EmblaCarousel></EmblaCarousel> */}
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const url = `https://api.unsplash.com/search/photos?query=minimal&per_page=10&client_id=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      images: data.results,
    },
  };
};

export default Home;
