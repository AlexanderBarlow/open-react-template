import styles from "./index.module.css";
import Head from "next/head";
import Link from "next/link";
import ItemCard from "../../components/itemCard";

export const metadata = {
  title: 'About EFT Wiki',
  description: 'About Page',
}

export default function about() {
    return (
      <>
      <div className="flex h-screen items-center justify-center">
          <h1 className="conter-center flex">IN DEVELOPMENT</h1>
          </div>
      </>
    );
  }