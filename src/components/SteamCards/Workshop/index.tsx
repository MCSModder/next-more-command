import React, { Component } from "react";
import ReactDom from "react-dom";
import axios,{AxiosRequestConfig} from "axios";
interface ISteamCardsWorkshopProps{
  publishedfileids:number|number[]
}

export default class SteamCardsWorkshop extends React.Component<ISteamCardsWorkshopProps> {
  publishedfileids: number | number[];
  constructor(props:ISteamCardsWorkshopProps) {
    super(props)
    this.publishedfileids = props.publishedfileids;
  }

 async componentDidMount(){

  const result =await fetch("/steam-api/ISteamRemoteStorage/GetPublishedFileDetails/v1/",{
    body:`itemcount=1&publishedfileids[0]=2844206862`,
    method:"post",
    headers:{
       'Content-Type':'application/x-www-form-urlencoded'
    }
  })
  console.log(await result.json());
  
  }
  render(): React.ReactNode {
    return(<div>
      测试
    </div>)
  }
}
