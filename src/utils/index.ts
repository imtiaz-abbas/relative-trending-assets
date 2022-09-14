import btc from "./../assets/asset_images/btc.png";
import sol from "./../assets/asset_images/sol.png";
import bnb from "./../assets/asset_images/bnb.png";
import eth from "./../assets/asset_images/eth.png";
import shib from "./../assets/asset_images/shib.png";

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
