import HeroBanner from "@/components/HeroBanner"
import ProductCard from "@/components/ProductCard"
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api" 

export default function Home({ products }) {
  return (
    <main className="h-[3000px]">
      <HeroBanner />
      <h1>{products?.data?.[0]?.attributes?.name}</h1>
      <Wrapper>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0 content-evenly">
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
