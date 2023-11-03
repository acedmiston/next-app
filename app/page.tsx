import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";


export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link data-testid="product-card" href="/users">Users</Link>
      <ProductCard />
    </main>
  )
}
