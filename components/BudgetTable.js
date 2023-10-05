import useSWR from "swr";
import { Fragment } from "react";

export default function BudgetTable({ tableType }) {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:1323/64090f517c37e8edc3516ac4/accounts/643445c6379339c42eedc68d/categories?" +
      new URLSearchParams({ type: tableType === "expenses" ? 0 : 1 }),
    fetcher
  );

  if (error) {
    console.log(error);
    return <div>Error to load</div>;
  }
  if (isLoading) return <div>Loading...</div>;

  return (
    <table className="rounded table-fixed w-full text-left text-black-500 dark:text-gray-400">
      <thead className="text-xs uppercase bg-indigo-500 dark:bg-indigo-500">
        <tr>
          <th className="w-3/6 px-6 py-3">Category</th>
          <th className="w-1/6 px-6 py-3">Planned</th>
          <th className="w-1/6 px-6 py-3">Actual</th>
          <th className="w-1/6 px-6 py-3">Diff</th>
        </tr>
      </thead>
      <tbody>
        {data.data.category_groups.map((group) => (
          <Fragment key={group.ID}>
            <tr
              key={group.ID}
              className="w-1/1 bg-indigo-300 dark:bg-indigo-300 text-xs uppercase"
            >
              <th className="w-3/6 px-6 py-3">{group.name}</th>
              <td className="w-1/6 px-6 py-3"></td>
              <td className="w-1/6 px-6 py-3"></td>
              <td className="w-1/6 px-6 py-3"></td>
            </tr>
            {group.categories.map((category) => (
              <tr
                key={category.ID}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-sm"
              >
                <th
                  scope="row"
                  className="w-3/6 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {category.name}
                </th>
                <td className="w-1/6 px-6 py-3">500.00</td>
                <td className="w-1/6 px-6 py-3">250.00</td>
                <td className="w-1/6 px-6 py-3">250.00</td>
              </tr>
            ))}
          </Fragment>
        ))}
      </tbody>
      <tfoot className="text-xs uppercase bg-indigo-500 dark:bg-indigo-500">
        <tr>
          <th className="w-3/6 px-6 py-3">Totals</th>
          <th className="w-1/6 px-6 py-3">1500.00</th>
          <th className="w-1/6 px-6 py-3">750.00</th>
          <th className="w-1/6 px-6 py-3">750.00</th>
        </tr>
      </tfoot>
    </table>
  );
}
