import React from "react";
import { ResponsiveLine } from "@nivo/line";

const MyResponsiveLine = ({ data }) => (
  <div style={{ height: "80vh" }}>
    <ResponsiveLine
      data={[
        {
          id: "japan",
          color: "hsl(233, 70%, 50%)",
          data: [
            {
              x: "plane",
              y: 280,
            },
            {
              x: "helicopter",
              y: 34,
            },
            {
              x: "boat",
              y: 92,
            },
            {
              x: "train",
              y: 270,
            },
            {
              x: "subway",
              y: 208,
            },
            {
              x: "bus",
              y: 89,
            },
            {
              x: "car",
              y: 269,
            },
            {
              x: "moto",
              y: 210,
            },
            {
              x: "bicycle",
              y: 177,
            },
            {
              x: "horse",
              y: 213,
            },
            {
              x: "skateboard",
              y: 181,
            },
            {
              x: "others",
              y: 273,
            },
          ],
        },
        {
          id: "france",
          color: "hsl(108, 70%, 50%)",
          data: [
            {
              x: "plane",
              y: 243,
            },
            {
              x: "helicopter",
              y: 33,
            },
            {
              x: "boat",
              y: 229,
            },
            {
              x: "train",
              y: 294,
            },
            {
              x: "subway",
              y: 274,
            },
            {
              x: "bus",
              y: 214,
            },
            {
              x: "car",
              y: 14,
            },
            {
              x: "moto",
              y: 62,
            },
            {
              x: "bicycle",
              y: 92,
            },
            {
              x: "horse",
              y: 113,
            },
            {
              x: "skateboard",
              y: 21,
            },
            {
              x: "others",
              y: 246,
            },
          ],
        },
        {
          id: "us",
          color: "hsl(135, 70%, 50%)",
          data: [
            {
              x: "plane",
              y: 88,
            },
            {
              x: "helicopter",
              y: 3,
            },
            {
              x: "boat",
              y: 186,
            },
            {
              x: "train",
              y: 138,
            },
            {
              x: "subway",
              y: 254,
            },
            {
              x: "bus",
              y: 286,
            },
            {
              x: "car",
              y: 222,
            },
            {
              x: "moto",
              y: 281,
            },
            {
              x: "bicycle",
              y: 274,
            },
            {
              x: "horse",
              y: 79,
            },
            {
              x: "skateboard",
              y: 257,
            },
            {
              x: "others",
              y: 237,
            },
          ],
        },
        {
          id: "germany",
          color: "hsl(29, 70%, 50%)",
          data: [
            {
              x: "plane",
              y: 171,
            },
            {
              x: "helicopter",
              y: 215,
            },
            {
              x: "boat",
              y: 132,
            },
            {
              x: "train",
              y: 139,
            },
            {
              x: "subway",
              y: 77,
            },
            {
              x: "bus",
              y: 49,
            },
            {
              x: "car",
              y: 23,
            },
            {
              x: "moto",
              y: 122,
            },
            {
              x: "bicycle",
              y: 35,
            },
            {
              x: "horse",
              y: 229,
            },
            {
              x: "skateboard",
              y: 52,
            },
            {
              x: "others",
              y: 191,
            },
          ],
        },
        {
          id: "norway",
          color: "hsl(279, 70%, 50%)",
          data: [
            {
              x: "plane",
              y: 48,
            },
            {
              x: "helicopter",
              y: 129,
            },
            {
              x: "boat",
              y: 292,
            },
            {
              x: "train",
              y: 234,
            },
            {
              x: "subway",
              y: 97,
            },
            {
              x: "bus",
              y: 181,
            },
            {
              x: "car",
              y: 128,
            },
            {
              x: "moto",
              y: 258,
            },
            {
              x: "bicycle",
              y: 21,
            },
            {
              x: "horse",
              y: 57,
            },
            {
              x: "skateboard",
              y: 281,
            },
            {
              x: "others",
              y: 187,
            },
          ],
        },
      ]}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      colors={{ scheme: "nivo" }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  </div>
);

// const Result = () => {
//   return (
//     <div style={{ height: "80vh" }}>
//       <MyResponsiveLine></MyResponsiveLine>
//     </div>
//   );
// };

export default MyResponsiveLine;
