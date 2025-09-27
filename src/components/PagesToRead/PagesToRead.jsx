
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const data = [
    { name: "Book A", pages: 120 },
    { name: "Book B", pages: 400 },
    { name: "Book C", pages: 90 },
    { name: "Book D", pages: 150 },
  ]
const MyBarChart = () => {
  // useState data
  

  return (
    <div className="w-full h-80 my-10">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pages" fill="#4F46E5" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyBarChart;
