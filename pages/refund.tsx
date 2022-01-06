import Layout from "@/components/Layout"

function Refund() {
  return (
    <Layout title="Refund &amp; cancellation" attachNavbar>
      <main>
        <header className="mx-4 my-4">
          <h1 className="text-2xl font-bold">Refund and cancellation policy</h1>
        </header>
        <div className="mx-8 my-6">
          <ul className="font-medium list-disc">
            <li>Get instant refund if product does not met conditions as described</li>
            <li>Get refund within a day</li>
            <li>It can take 3-4 business days on any technical issue</li>
            <li>Cancel your order within a half hour of ordering</li>
          </ul>
        </div>
      </main>
    </Layout>
  )
}

export default Refund
