import HeroBanner from "@/components/HeroBanner"
import ProductCard from "@/components/ProductCard"
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api" 

export default function Home({ products }) {
  return (
    <main>
      <HeroBanner />
      <h1 className="text-xl md:text-3xl font-semibold mt-24 ml-5 ">Fresh Arrivals</h1>
      <Wrapper>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 my-10 px-3 md:px-0 content-evenly">
          {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
      </Wrapper>
    </main>
  )
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
    props: { products },
  }
}
