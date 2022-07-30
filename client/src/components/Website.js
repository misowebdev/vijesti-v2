import { Fragment, useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

import { list } from "../api/newsApi";
import { newsHeader } from "../data/news";
import SingleNews from "./SingleNews";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

function Website({ website, updatedWebsite }) {
  const [news, setNews] = useState([]);
  const haveNewsRef = useRef(false);

  useEffect(() => {
    const getNews = async () => {
      const res = await list(website);
      if (res && !res.error) {
        setNews(res);
        haveNewsRef.current = true;
      }
    };
    if (!haveNewsRef.current) {
      getNews();
    } else if (website === updatedWebsite) {
      getNews();
    }
  }, [website, updatedWebsite]);

  const animation = useSpring({
    to:
      website === updatedWebsite
        ? { transform: "rotateY(0deg)", opacity: 1 }
        : { opacity: 1 },
    from:
      updatedWebsite === website
        ? { opacity: 0, transform: "rotateY(180deg)" }
        : { opacity: 1 },
    config: { duration: 1000 },
    reset: true,
  });

  return (
    <animated.div style={{ height: "100%", ...animation }}>
      <Card sx={{ height: "100%" }}>
        <Box sx={{ backgroundColor: newsHeader[website].bgColor, height: 60 }}>
          <Box
            component="img"
            src={newsHeader[website].logo}
            sx={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
        <CardContent
          sx={{
            height: "calc(100% - 60px)",
            display: "flex",
            flexDirection: "column",
            "&:last-child": { pb: "16px" },
            "hr:last-child": { display: "none" },
          }}
        >
          {news.map((singleNews) => (
            <Fragment key={singleNews._id}>
              <SingleNews news={singleNews} />
              <Divider sx={{ mt: "4px", mb: "4px" }} />
            </Fragment>
          ))}
        </CardContent>
      </Card>
    </animated.div>
  );
}

export default Website;
