import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

import Skeleton from "@mui/material/Skeleton";

function Media(props) {
  const { loading = false } = props;

  return (
    <Card sx={{ width: 800, height: 300, m: "auto" }}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton animation="wave" width={155} height={155} />
          ) : (
            "jiheon"
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={100}
              width="100%"
              style={{ marginBottom: 25 }}
            />
          ) : (
            "Ted"
          )
        }
      />
      {loading ? (
        <Box
          sx={{
            width: "75%",
            marginBottom: 300,
            height: 300,
            float: "right ",
            rows: 6,
          }}
        >
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      ) : (
        "jiheon"
      )}
    </Card>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Skeletons() {
  return (
    <div>
      <Media loading />
      <Media loading />
      <Media loading />
      <Media loading />
    </div>
  );
}
