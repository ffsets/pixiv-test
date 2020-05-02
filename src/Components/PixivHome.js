import React, { useState, useEffect } from "react";
import Illust from "./Illust";

export default props => {
  const [pixiv, setPixiv] = useState(props.pixiv);
  const [illusts, setIllusts] = useState([]);

  useEffect(() => {
    const search = async () => {
      await pixiv
        .login()
        .catch(reason => console.log("pixiv login failed: " + reason));
      const json = await pixiv
        .searchIllust("艦これ10000users入り")
        .catch(reason => console.log("pixiv search failed: " + reason));
      console.log("searched illusts");
      setIllusts(
        json.illusts.map(illust => {
          return <Illust src={illust.imageUrls.large} />;
        })
      );
    };

    search().catch(reason => console.log("pixiv search failed: " + reason));
  }, [pixiv]);

  return <div>{illusts}</div>;
};
