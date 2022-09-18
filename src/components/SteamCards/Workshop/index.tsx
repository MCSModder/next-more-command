import React, { Component } from "react";
import ReactDom from "react-dom";
import axios,{AxiosRequestConfig} from "axios";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
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
  const {publishedfileids} = this.props
   let items = Array.isArray(publishedfileids) ? publishedfileids: [publishedfileids]
  const itemcount = items.length.toString();
  const form = new FormData() 
  form.append("itemcount",itemcount)
items.forEach((el,i) => {
  form.append(`publishedfileids[${i}]`,`${el}`)
})

  
console.log(FormData);

  const config:AxiosRequestConfig= {
method:'post',
data:form,
url:'https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/',
  }
   await axios(config)
  }
  render(): React.ReactNode {
    return(<div>
      测试
    </div>)
  }
}
