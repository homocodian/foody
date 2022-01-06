import Layout from "@/components/Layout";
import Scrollup from "@/components/Scrollup";
import cities from "@/utilities/cities";

function Cities() {
  return (
    <Layout title="Cities we deliver to" attachNavbar={true} attachFooter={true}>
      <main className="bg-dark">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full text-white p-6 md:p-8">
        {cities.map((city) => (
          <p key={city} title={city} className="cursor-pointer px-2 py-1 rounded-sm hover:bg-slate sm:truncate">{city}</p>
        ))}
      </div>
      </main>
      <Scrollup />
    </Layout>
  );
}

export default Cities;
