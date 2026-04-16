import React, { useContext } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { FriendsContext } from "../../../context/FriendsContextProvider";

const Analytics = () => {
  const { connectList } = useContext(FriendsContext);

  const totalCall = connectList.filter((list) => list.connectType === "Call");
  const totalText = connectList.filter((list) => list.connectType === "Text");
  const totalVideo = connectList.filter((list) => list.connectType === "Video");

  const data = [
    { name: "Call", value: totalCall.length, fill: "#244D3F" },
    { name: "Text", value: totalText.length, fill: "#7E35E1" },
    { name: "Video", value: totalVideo.length, fill: "#37A163" },
  ];

  return (
    <section className="container mx-auto px-5 py-20">
      <div>
        <div>
          <h2 className="mb-6 text-[#1F2937] text-5xl font-bold">
            Friendship Analytics
          </h2>

          <div className="p-8 pb-12 bg-base-100 border border-base-100 rounded-lg shadow">
            <h4 className="mb-6 text-[#244D3F] text-xl font-medium">
              By Interaction Type
            </h4>

            <div>
              <div>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={data}
                      innerRadius="80%"
                      outerRadius="100%"
                      cornerRadius={50}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={index} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Legend wrapperStyle={{ transform: "translateY(30px)" }} />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
