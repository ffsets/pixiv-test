const PixivAppApi = require("pixiv-app-api");

const pixiv = new PixivAppApi("user_htup3874", "fGs82D8fbGykrnq", {
  camelcaseKeys: true
});

(async () => {
  await pixiv.login();
  const json = await pixiv.searchIllust("艦これ10000users入り");
  console.log(json.illusts[0].title);
})();
