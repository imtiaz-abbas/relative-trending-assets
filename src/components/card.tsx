import cardBackground from "./../assets/card_bg.png";
import { Asset } from "../types";
import { useState } from "react";
import AssetTextBox from "./text_box";
import PopularPairs from "./popular_pairs";
import { assetThemeColor, getImage } from "../utils";

function Card({ asset }: { asset: Asset }) {
  return (
    <div className="flex flex-col items-center w-[290px]">
      <div
        className={`w-[100px] h-[100px] rounded-full bg-gradient-to-b from-[#626A881A] ${assetThemeColor(
          asset.id,
        )} -mb-[50px] flex justify-center items-center`}
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
          <div className="mt-[75px] mb-[4px] flex flex-col items-center">
            <div className="h-[30px] flex flex-col justify-center">
              <p className="text-grey">{asset.name}</p>
            </div>
          </div>
          <AssetTextBox
            label="Price"
            value={asset.price}
            change={asset.percentage_change}
          />
          <AssetTextBox label="TVL" value={asset.total_value_locked} />
          <PopularPairs items={asset.popularPairs} />
        </div>
      </div>
    </div>
  );
}

export default Card;
