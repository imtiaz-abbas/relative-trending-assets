import trendingIcon from "./../assets/ic_trending.png";
import { Asset } from "../types";
import Card from "./card";

function AssetList({ assets }: { assets: Array<Asset> }) {
  return (
    <div className="flex flex-col gap-[56px]">
      <div className="flex flex-row items-center gap-[16px] px-16">
        <img src={trendingIcon} alt="header" width={"16px"} height={"16px"} />
        <p className="text-white">Trending Assets</p>
      </div>
      <div className="overflow-x-auto flex flex-row gap-[69px] px-16 pb-16">
        {assets.map((asset) => (
          <div key={asset.id}>
            <Card asset={asset} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssetList;
