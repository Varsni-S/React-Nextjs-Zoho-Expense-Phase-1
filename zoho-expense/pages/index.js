import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Middle from "../components/Middle";
import Footer from "../components/Footer";

export default function Home() {
  return (
      <>
        <Header />
        <Middle />
        <Footer />
      </>
  )
}