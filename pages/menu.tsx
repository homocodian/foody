import Layout from "@/components/Layout";
import Dishes from "@/components/Dishes";
import Scrollup from "@/components/Scrollup";
import categories from "@/utilities/categories";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { Data } from "@/types/ApiDataType";
import { useRouter } from "next/router";
import { getSearchState } from "@/utilities/context/searchContext";
import SearchItems from "@/components/SearchItems";

interface IProps extends Data {}

function Menu({ ok, message, body }: IProps) {
  const { push } = useRouter();
  const { isSearchActive, setSearchStateActive, setActiveCategory } =
    getSearchState();
  return (
    <Layout
      title="Menu"
      attachNavbar
      attachFooter={isSearchActive || !ok ? false : true}
    >
      <main className="mt-4">
        {/* container */}
        <div className="flex flex-col justify-center gap-4 pb-8">
          {/* Category */}
          <header className="relative">
            <div
              className="flex scrollbar-hide items-center whitespace-nowrap
              space-x-10 3xl:space-x-20 overflow-x-scroll px-4 3xl:px-10 md:py-4 3xl:py-10"
            >
              {categories.map(({ id, name }) => (
                <h2
                  key={id}
                  className="last:pr-4 xl:pr-0 cursor-pointer capitalize transition 
                  duration-100 transform hover:scale-125 active:text-primary"
                  onClick={() => {
                    setSearchStateActive(false);
                    setActiveCategory(name);
                    push(`/menu?category=${name}`);
                  }}
                >
                  {name}
                </h2>
              ))}
            </div>
            <div
              className="absolute top-0 right-0 bg-gradient-to-l from-white h-10 
            w-1/12"
            />
          </header>

          {/* food items container */}
          <div>
            {ok && body ? (
              !isSearchActive ? (
                <Dishes data={body} />
              ) : (
                <SearchItems data={body} />
              )
            ) : (
              <p className="text-center text-primary text-2xl">
                {message || "No data found please try later."}
              </p>
            )}
          </div>
        </div>
      </main>
      <Scrollup />
    </Layout>
  );
}

export default Menu;

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<GetServerSidePropsResult<Data>> => {
  const category = context.query.category;
  try {
    const data: Data = await fetch(
      `${
        process.env.NEXT_PUBLIC_URL || process.env.NEXT_PUBLIC_VERCEL_URL
      }/api?category=${category || "indian"}`
    ).then((res) => res.json());
    if (!data || !data.ok) {
      return {
        props: {
          ok: false,
          message: "No data found 😔",
        },
      };
    }
    return {
      props: {
        ok: true,
        body: data.body,
        message: null,
      },
    };
  } catch (error) {
    return {
      props: {
        ok: false,
        message: "No data found 😔",
      },
    };
  }
};
