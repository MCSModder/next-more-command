import React from "react";

export default function SteamCardsWidget ({appID,width,height}){
  return <iframe src={`https://store.cloudflare.steamstatic.com/widget/${appID}/`} frameBorder="0" width={width||"646"} height={height||"190"}>
  </iframe>
}
