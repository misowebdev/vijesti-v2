import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import useIsNew from "../hooks/useIsNew";

function SingleNews({ news }) {
  const priority = useIsNew(news.createdAt);

  return (
    <Box
      component="a"
      color="text.primary"
      underline="none"
      href={news.link}
      target="_blank"
      sx={{
        display: "flex",
        flex: 1,
        maxHeight: "24%",
        borderRadius: 2,
        p: 1,
        backgroundColor:
          priority === 1 ? "red" : priority === 2 ? "#fd4545d9" : null,
      }}
    >
      <Box width="30%" mr={2} sx={{ position: "relative" }}>
        <Box
          component="img"
          src={news.image}
          sx={{
            width: "100%",
            maxHeight: "100%",
            objectFit: "cover",
            borderRadius: 2,
          }}
        />
        <Typography
          component="div"
          variant="subtitle2"
          color="text.time"
          sx={{
            position: "absolute",
            bottom: 0,
            pl: 1,
            pr: 1,
            bgcolor: "#000000a6",
            borderRadius: "0 8px 0 8px",
          }}
        >
          {new Date(news.createdAt).toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
        <Typography
          color={priority === 1 || priority === 2 ? "text.highlighted" : null}
          component="div"
          variant="h5"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textTransform: "uppercase",
            fontWeight: 800,
          }}
        >
          {news.title}
        </Typography>
      </Box>
    </Box>
  );
}

export default SingleNews;
