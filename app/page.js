import Header from "@/components/Header";
import CartModal from "@/components/Modal";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main>
      <Header/>
      <ProductList />
      <CartModal/>
    </main>
  );
}
