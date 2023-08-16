import styles from "./index.module.css";
import Head from "next/head";
import Link from "next/link";
import ItemCard from "../../components/itemCard";

export const metadata = {
  title: 'Escape From Tarkov Weapons Page',
  description: 'Weapons Page',
}

export default function weapons() {
    return (
      <>
          <ItemCard />
      </>
    );
  }