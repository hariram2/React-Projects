import React, { createRef } from "react";
import '../style.css';
import { PieChart, Pie } from "recharts";
import { useScreenshot, createFileName } from "use-react-screenshot";

export default function Icons() {
  const ref_charts = createRef(null);

  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0
  });

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref_charts.current).then(download);

  return (
    <div ref={ref_charts}>
      <button className='screen__btn' onClick={downloadScreenshot}>Download screenshot</button>
      <h2 style={{textAlign:"center"}}>Charts</h2>
      <PieChart width={770} height={350} style={{background:"lightslategrey"}}>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
}

const data01 = [
  {
    name: "Group A",
    value: 400
  },
  {
    name: "Group B",
    value: 300
  },
  {
    name: "Group C",
    value: 300
  },
  {
    name: "Group D",
    value: 200
  },
  {
    name: "Group E",
    value: 278
  },
  {
    name: "Group F",
    value: 189
  }
];
const data02 = [
  {
    name: "Group A",
    value: 2400
  },
  {
    name: "Group B",
    value: 4567
  },
  {
    name: "Group C",
    value: 1398
  },
  {
    name: "Group D",
    value: 9800
  },
  {
    name: "Group E",
    value: 3908
  },
  {
    name: "Group F",
    value: 4800
  }
];
