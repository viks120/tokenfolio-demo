import Image from "next/image";
import CryptoTable from "./cryptos/cryptoTable";
import SearchBar from "./cryptos/searchBar";
import CryptoDetails from "./cryptos/cryptoDetails";

export default function Home() {
  return (
    <div>
        <CryptoTable />
    </div>
  );
}
