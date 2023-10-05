import Head from "next/head";
import Sidebar from "@/components/sidebar";
import CategoriesInsertForm from "@/components/categoriesInsertForm";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Categories() {
  return (
    <>
      <Head>
        <title>Buckz -Categories</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
      <CategoriesInsertForm />
    </>
  );
}
