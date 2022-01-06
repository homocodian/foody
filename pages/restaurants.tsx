import Layout from "@/components/Layout";
import RestaurantCard from "@/components/RestaurantCard";
import { Data } from "@/types/Result";
import { GetStaticProps } from "next";
import { reviews } from "@/utilities/reviews";

interface IProps {
  data: Data;
}

function Restaurants({ data }: IProps) {
  return (
    <Layout title="Restaurants" attachNavbar attachFooter>
      <main className="m-6">
        <header className="mb-4">
          <h1 className="text-lg font-bold">Our Partnered Restaurants</h1>
          <h3 className="my-2">
            Reviews of restaurants by our happy customers.
          </h3>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {!data ? (
            <p className="text-center">No data try later</p>
          ) : (
            data.results.map((result,index) => {
              if (!result.urls) return;
              return (
                <RestaurantCard
                  key={result.id}
                  src={result.urls?.raw}
                  reviewStar={reviews[index].star}
                  reviews={reviews[index].reviews}
                  likes={result.likes}
                />
              );
            })
          )}
        </div>
      </main>
    </Layout>
  );
}

export default Restaurants;

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(
    `https://api.unsplash.com/search/photos?query=restaurant&per_page=20&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`
  ).then((res) => res.json());
  return {
    props: {
      data,
    },
  };
};
