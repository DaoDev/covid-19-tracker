import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import HighlightCard from "./HighlightCard";

function Highlight({ report }) {
  const data = report && report.length ? report[report.length - 1] : [];
  const summary = [
    {
      title: "So ca nhiem",
      count: data.Confirmed,
      type: "confirmed",
    },
    {
      title: "So ca khoi",
      count: data.Recovered,
      type: "recovered",
    },
    {
      title: "So ca tu vong",
      count: data.Deaths,
      type: "death",
    },
  ];
  return (
    <>
      <Grid container spacing={3}>
        {summary.map((item) => (
          <Grid item sm={4} xs={12}>
            <HighlightCard title={item.title} count={item.count} type={item.type} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Highlight;
