import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface NFTItem {
  id: string;
  name: string;
  image: string;
  price: string;
  endTime: number;
}

interface CoinGeckoData {
  id: string;
  contract_address: string;
  name: string;
  asset_platform_id: string;
  symbol: string;
}

interface NFTState {
  items: NFTItem[];
  status: "idle" | "loading" | "failed";
}

const initialState: NFTState = {
  items: [],
  status: "idle",
};

const LOCAL_IMAGES = [
  "/images/nft-1.png",
  "/images/nft-2.png",
  "/images/nft-3.png",
  "/images/nft-4.png",
  "/images/nft-5.png",
];

export const fetchNFTs = createAsyncThunk<NFTItem[]>(
  "nfts/fetchNFTs",
  async () => {
    try {
      const response = await axios.get<CoinGeckoData[]>(
        "https://api.coingecko.com/api/v3/nfts/list"
      );

      const rawData = response.data.slice(0, 15);

      return rawData.map((item, index) => ({
        id: item.id,
        name: item.name,
        image: LOCAL_IMAGES[index % LOCAL_IMAGES.length],
        price: (Math.random() * 5).toFixed(2),
        endTime: Date.now() + Math.floor(Math.random() * 12 * 60 * 60 * 1000),
      }));
    } catch (error) {
      console.error("API Error:", error);
      return Array.from({ length: 15 }).map((_, index) => ({
        id: `nft-${index}`,
        name: "Sun-Glass",
        image: LOCAL_IMAGES[index % LOCAL_IMAGES.length],
        price: "1.75",
        endTime: Date.now() + 100000000,
      }));
    }
  }
);

const nftSlice = createSlice({
  name: "nfts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNFTs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNFTs.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(fetchNFTs.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default nftSlice.reducer;
