// import { useEffect, useState } from "react";
// import useSingleUser from "../../../../Hook/useSingleUser";
// import { PieChart, Pie, Cell, Legend } from "recharts";
// import useAllAsset from "../../../../Hook/useAllAsset";

// const Chart = () => {
//   const singleUser = useSingleUser();

//   const [nonReturnable, setNonReturnable] = useState([]);
//   const [returnable, setReturnable] = useState([]);
//   const [assets] = useAllAsset();
//   useEffect(() => {
//     if (assets && singleUser?.email) {
//       const returnable = assets.filter(
//         (asset) => asset?.category === "Returnable"
//       );
//       const nonReturnable = assets.filter(
//         (asset) => asset?.category === "Non-returnable"
//       );
//       setReturnable(returnable);
//       setNonReturnable(nonReturnable);
//     }
//   }, [assets, singleUser]);

//   const data = [
//     { name: "Returnable", value: returnable.length },
//     { name: "Non-Returnable", value: nonReturnable.length },
//   ];

//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

//   const RADIAN = Math.PI / 180;
//   const renderCustomizedLabel = ({
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     percent,
//   }) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);

//     return (
//       <text
//         x={x}
//         y={y}
//         fill="white"
//         textAnchor={x > cx ? "start" : "end"}
//         dominantBaseline="central"
//       >
//         {`${(percent * 100).toFixed(0)}%`}
//       </text>
//     );
//   };

//   return (
//     <div>
//       <h1 className="lg:text-4xl text-2xl text-center font-bold">Chart</h1>
//       <div className="flex items-center justify-center">
//         <PieChart width={400} height={400}>
//           <Pie
//             data={data}
//             cx={200}
//             cy={200}
//             labelLine={false}
//             label={renderCustomizedLabel}
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//           >
//             {data.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={COLORS[index % COLORS.length]}
//               />
//             ))}
//           </Pie>
//           <Legend></Legend>
//         </PieChart>
//       </div>
//     </div>
//   );
// };

// export default Chart;


import { useEffect, useState } from "react";
import useSingleUser from "../../../../Hook/useSingleUser";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import useAllAsset from "../../../../Hook/useAllAsset";

const Chart = () => {
  const singleUser = useSingleUser();

  const [nonReturnable, setNonReturnable] = useState([]);
  const [returnable, setReturnable] = useState([]);
  const [assets] = useAllAsset();

  useEffect(() => {
    if (assets && singleUser?.email) {
      const returnable = assets.filter(
        (asset) => asset?.category === "Returnable"
      );
      const nonReturnable = assets.filter(
        (asset) => asset?.category === "Non-returnable"
      );
      setReturnable(returnable);
      setNonReturnable(nonReturnable);
    }
  }, [assets, singleUser]);

  const data = [
    { name: "Returnable", value: returnable.length },
    { name: "Non-Returnable", value: nonReturnable.length },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 lg:p-8">
      <h1 className="lg:text-4xl text-2xl text-center font-bold mb-8">Chart</h1>
      <div className="w-full lg:w-2/3">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius="80%"
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
