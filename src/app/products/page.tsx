import Link from "next/link";
import { Button, Checkbox } from "@/components";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const PRODUCTS = [
  {
    id: 1,
    name: "Design services",
    type: "Product",
    units: "Days",
    price: "100.00 €",
    vat: "16%",
  },
  {
    id: 2,
    name: "QA services",
    type: "Product",
    units: "Days",
    price: "100.00 €",
    vat: "16%",
  },
  {
    id: 3,
    name: "Backend development",
    type: "Product",
    units: "Days",
    price: "100.00 €",
    vat: "16%",
  },
  {
    id: 4,
    name: "Frontend development",
    type: "Product",
    units: "Days",
    price: "100.00 €",
    vat: "16%",
  },
  {
    id: 5,
    name: "Analysis implementation",
    type: "Product",
    units: "Days",
    price: "100.00 €",
    vat: "16%",
  },
];

export default function Products() {
  return (
    <section>
      <div className="flex justify-between mb-8">
        <div className="flex gap-8">
          <h1 className="text-5xl font-bold">Products</h1>
          <div>
            <Button variant="primary">Guide me!</Button>
          </div>
        </div>
        <div>
          <Link href="/products/new">
            <Button>Add New</Button>
          </Link>
        </div>
      </div>
      <div className="p-4">
        <table className="table-fixed border-collapse w-full">
          <thead>
            <tr>
              <th className="w-10 text-left">
                <div className="flex items-center">
                  <Checkbox />
                </div>
              </th>
              <th className="text-gray-300 w-60 font-normal tracking-wide text-left">
                Name
              </th>
              <th className="text-gray-300 font-normal tracking-wide text-left">
                Type
              </th>
              <th className="text-gray-300 font-normal tracking-wide text-left">
                Units
              </th>
              <th className="text-gray-300 font-normal tracking-wide text-left">
                Price
              </th>
              <th className="text-gray-300 font-normal tracking-wide text-left">
                VAT
              </th>
              <th className="text-gray-300 font-normal tracking-wide text-left"></th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map(({ id, name, type, units, price, vat }) => (
              <tr key={id}>
                <td className="pt-8">
                  <div className="flex items-center">
                    <Checkbox />
                  </div>
                </td>
                <td className="pt-8">{name}</td>
                <td className="pt-8">{type}</td>
                <td className="pt-8">{units}</td>
                <td className="pt-8">{price}</td>
                <td className="pt-8">{vat}</td>
                <td className="pt-8">
                  <EllipsisVerticalIcon className="size-6 text-gray-300" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
