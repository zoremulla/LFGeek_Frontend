import React from "react";
import { observer } from "mobx-react";

// Components
import GuildCard from "./GuildCard";
// import SearchBar from "../SearchBar";

// Store
import guildsStore from "../../stores/guildsStore";
// import clans from "./data";

// function GuildsList() {
//   const GuildCards = clansStore.guild.map(clan => <GuildCard key={clan.id} clan={clan} />);
const GuildsList = () => {
  const GuildCards = guildsStore.guilds.map(guild => (
    <GuildCard key={guild.id} guild={guild} />
  ));
  console.log(guildsStore.guilds);
  return (
    <div className="guilds">
      <h3>Guilds LFG</h3>
      {/* <SearchBar store={clansStore} /> */}
      <div className="card-deck">{GuildCards}</div>
    </div>
  );
};

export default observer(GuildsList);
