import { useLoaderData } from "react-router-dom";
import TableRow from "../components/TableRow";

const AllJobsList = () => {
  const data = useLoaderData();
  return (
    <table className="w-full">
      <thead className="min-w-full bg-gray-800 text-left text-gray-100">
        <tr>
          <th
            className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
            scope="col"
          >
            SI
          </th>
          {/* ::Name */}
          <th
            className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
            scope="col"
          >
            Job Title
          </th>
          {/* ::Job Title */}
          <th
            className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
            scope="col"
          >
            Job Posted On
          </th>
          {/* ::Email */}
          <th
            className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
            scope="col"
          >
            Deadline
          </th>
          {/* ::Created Date */}
          <th
            className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
            scope="col"
          >
            Salary
          </th>
          {/* ::Actions */}
          <th
            className="py-3 px-4 text-center text-sm font-medium uppercase tracking-wide"
            scope="col"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((job, idx) => (
          <TableRow key={idx} job={job} idx={idx}></TableRow>
        ))}
      </tbody>
    </table>
  );
};

export default AllJobsList;
