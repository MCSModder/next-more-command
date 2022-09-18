import React from "react";
import axios from "axios";
function getPublishedFileDetails(items:number[]) {
  let publishedFileIds = "";
   for (let i = 0; i < items.length; i++) {
            publishedFileIds += `&publishedfileids[${i}]=${items[i]}`;
        }

  const itemcount = items.length;
axios.post("https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/?format=json",{itemcount,publishedfileids:items}).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}
export default function SteamCardsWorkshop({publishedfileids}) {
  console.log(publishedfileids);
  
  getPublishedFileDetails(publishedfileids)
  return (
    <div>测试</div>
  )
}
