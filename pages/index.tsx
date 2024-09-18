import Layout from "@/components/containers/layout";
import Masonry from "@/components/containers/masonry";
import Nav from "@/components/containers/nav";
import SearchComponent from "@/components/containers/search";
import React from "react";
import HomeCarousel from "@/components/containers/home-carousel";
export default function Home() {
  return (
    <>
      <Layout title="Home">
        <Nav></Nav>
        <HomeCarousel></HomeCarousel>
      {/* <SearchComponent></SearchComponent> */}
      <Masonry></Masonry>

       </Layout>

      </>
  );
}
