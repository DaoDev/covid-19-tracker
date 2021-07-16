import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highchart from "highcharts";
import highchartsMap from "highcharts/modules/map";

highchartsMap(Highchart);

const initOptions = {
  chart: {
    height: "500",
  },
  title: {
    text: null,
  },
  mapNavigation: {
    enabled: true,
  },
  colorAxis: {
    min: 0,
    stops: [
      [0.2, "#FFC4AA"],
      [0.4, "#FF8A66"],
      [0.6, "#FF392B"],
      [0.8, "#B71525"],
      [1, "	#7A0826"],
    ],
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "bottom",
  },
  series: [
    {
      mapData: {},
      name: "Dân số",
      joinBy: ["hc-key", "key"],
    },
  ],
};

function HighMaps({ mapData }) {
  const [options, setOptions] = useState({});
  console.log({ mapData });

  if (!mapData && !Object.keys(mapData).length) {
    useEffect(() => {
      const fakeData = mapData.features.map((features, index) => ({
        key: features.properties["hc-key"],
        value: index,
      }));
      console.log("fakeData", fakeData);
      setOptions({
        ...initOptions,
        series: [
          {
            ...initOptions.series[0],
            mapData: mapData,
            data: fakeData,
          },
        ],
      });
    }, [mapData]);
  }
  return <HighchartsReact highcharts={Highchart} options={{}} constructorType="mapChart" />;
}

export default HighMaps;
