import { StarIcon } from "@heroicons/react/solid";

const customers = [
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
]

function CustomerReviews() {
  return (
    <div className="mt-4">
      <div className="flex items-center space-x-2 text-base">
        <div className="mt-3 flex -space-x-2 overflow-hidden">
          {customers.map((customer,index) => (
            <img key={index} className="inline-block w-10 h-10 overflow-hidden rounded-full ring-2 ring-white object-cover" src={customer} alt="customer" />
          ))}
        </div>
        <div className="flex items-center flex-col gap-1 text-base">
          <h3 className="font-bold text-dark text-sm">Our Happy Customers</h3>
          <p className="inline-flex items-center gap-1 text-sm">
            <StarIcon className="h-5 w-5 text-yellow"/>
            <span>4.8</span>
            <span className="text-gray">{"(12.8k Reviews)"}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CustomerReviews
