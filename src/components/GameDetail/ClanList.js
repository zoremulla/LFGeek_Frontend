import React from "react";
import { observer } from "mobx-react";

// Components
import ClanCard from "./ClanCard";
// import SearchBar from "../SearchBar";

// Store
// import clansStore from "./clansStore";
import clans from "./data";

function ClansList() {
  const ClanCards = clans.map(clan => <ClanCard key={clan.id} clan={clan} />);
  // const ClansList = () => {
  //   const ClanCards = clansStore.map(clan =>(
  //       <ClanCard key={clan.id} clan={clan} />
  //     ));
  return (
    <div className="clans">
      <h3>Clans LFG</h3>
      {/* <SearchBar store={clansStore} /> */}
      <div className="card-deck">{ClanCards}</div>
    </div>
  );
}

export default observer(ClansList);
