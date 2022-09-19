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
//   const {publishedfileids} = this.props
//    let items = Array.isArray(publishedfileids) ? publishedfileids: [publishedfileids]
//   const itemcount = items.length.toString();
//   const form = new FormData() 
//   form.append("itemcount",itemcount)
// items.forEach((el,i) => {
//   form.append(`publishedfileids[${i}]`,`${el}`)
// })

  
// console.log(FormData);

//   const config:AxiosRequestConfig= {
// method:'post',
// data:form,
// url:'/dev_api/ISteamRemoteStorage/GetPublishedFileDetails/v1/',
// headers: {
//   'Content-Type':'application/x-www-form-urlencoded',
// }
//   }
  //await axios(config)

  const result =await fetch("https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/",{
    body:`itemcount=1&publishedfileids[0]=2844206862`,
    method:"post",
    headers:{
       'Content-Type':'application/x-www-form-urlencoded',
       "Access-Control-Allow-Origin":"*"
    },mode:"no-cors"
  }).then(v=>{
    console.log(v);
    
  })
  console.log(result);
  
  }
  render(): React.ReactNode {
    return(<div>
      测试
    </div>)
  }
}
