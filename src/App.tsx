import React, { useEffect, useState } from "react";
import { Asset } from "./types";
import loader from "./assets/loader.png";
import AssetList from "./components/asset_list";

function App() {
  useEffect(() => {
    // simulating network request to fetch data
    const fakeNetworkRequest = new Promise<Boolean>((res, rej) => {
      setTimeout(() => {
        res(true);
      }, 1000);
    });

    setFetchInProgress(true);
    fakeNetworkRequest
      .then(() => {
        setAssets([
          {
            id: "btc",
            name: "Bitcoin (BTC)",
            price: 31200.8,
            tvl: 60000,
            change: 10,
            popularPairs: ["sol", "eth", "bnb"],
          },
          {
            id: "sol",
            name: "Solana (SOL)",
            price: 31200.8,
            tvl: 60000,
            change: -12.32,
            popularPairs: ["btc", "eth", "bnb"],
          },
          {
            id: "eth",
            name: "Ethereum (ETH)",
            price: 31200.8,
            tvl: 60000,
            change: -11.93,
            popularPairs: ["sol", "btc", "bnb"],
          },
          {
            id: "bnb",
            name: "Binance USD (BUSD)",
            price: 31200.8,
            tvl: 60000,
            change: 0.26,
            popularPairs: ["sol", "eth", "bnb"],
          },
          {
            id: "shib",
            name: "Shiba Inu (SHIB)",
            price: 31200.8,
            tvl: 60000,
            change: -8.1,
            popularPairs: ["sol", "eth", "bnb"],
          },
        ]);
      })
      .finally(() => {
        setFetchInProgress(false);
      });
  }, []);

  const [assets, setAssets] = useState<Array<Asset>>([]);
  const [fetchInProgress, setFetchInProgress] = useState(false);
  return (
    <div className="bg-primary min-w-full h-screen flex flex-col justify-center font-tomorrow scroll-smooth">
      {!fetchInProgress ? (
        <AssetList assets={assets} />
      ) : (
        <img
          src={loader}
          alt="loader"
          className="h-12 w-12 animate-spin self-center"
        />
      )}
    </div>
  );
}

export default App;
