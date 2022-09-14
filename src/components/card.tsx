import cardBackground from "./../assets/card_bg.png";
import { Asset } from "../types";
import { useState } from "react";
import btc from "./../assets/asset_images/btc.png";
import sol from "./../assets/asset_images/sol.png";
import bnb from "./../assets/asset_images/bnb.png";
import eth from "./../assets/asset_images/eth.png";
import shib from "./../assets/asset_images/shib.png";
import AssetTextBox from "./text_box";
import PopularPairs from "./popular_pairs";

export const getImage = (id: string) => {
  switch (id) {
    case "btc":
      return btc;
    case "sol":
      return sol;
    case "bnb":
      return bnb;
    case "eth":
      return eth;
    case "shib":
      return shib;
  }
};

export const assetThemeColor = (id: string): string => {
  switch (id) {
    case "btc":
      return "to-[#EAB3001A]";
    case "sol":
      return "to-[#DC1FFF1A]";
    case "bnb":
      return "to-[#EAB3001A]";
    case "eth":
      return "to-[#EDF0F41A]";
    case "shib":
      return "to-[#E42D041A]";
  }
  return "to-[#EDF0F41A]";
};

function Card({ asset }: { asset: Asset }) {
  return (
    <div className="flex flex-col items-center min-w-[290px]">
      <div
        className={`w-20 h-20 rounded-full bg-gradient-to-b from-[#626A881A] ${assetThemeColor(
          asset.id,
        )} -mb-12 flex justify-center items-center`}
      >
        <img
          src={getImage(asset.id)}
          alt="header_image"
          width={"50px"}
          height={"50px"}
        />
      </div>
      <div className="relative text-[12px]">
        <img src={cardBackground} alt="bg" width={"290px"} />
        <div className="absolute top-0 w-full h-full flex flex-col items-center">
          <div className="mt-[75px] flex flex-col items-center">
            <div className="h-[30px] flex flex-col justify-center">
              <p className="text-grey">{asset.name}</p>
            </div>
          </div>
          <AssetTextBox
            label="Price"
            value={asset.price}
            change={asset.change}
          />
          <AssetTextBox label="TVL" value={asset.tvl} />
          <PopularPairs items={asset.popularPairs} />
        </div>
      </div>
    </div>
  );
}

export default Card;
