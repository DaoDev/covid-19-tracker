import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: (props) => {
    if (props.type === "confirmed") return { borderLeft: "5px solid #c9302c" };
    if (props.type === "recovered") return { borderLeft: "5px solid #28a745" };
    else return { borderLeft: "5px solid gray" };
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
  count: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

function HighlightCard({ title, count, type }) {
  const styles = useStyles({ type });
  return (
    <div>
      <Card className={styles.wrapper}>
        <CardContent>
          <Typography className={styles.title} component="p" variant="body2">
            {title}
          </Typography>
          <Typography className={styles.count} component="p" variant="body2">
            {count}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default HighlightCard;
