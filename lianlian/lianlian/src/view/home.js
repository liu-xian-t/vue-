import React, { Component } from 'react';
import axios from "axios"
import "../mock/mock"
import {connect} from "react-redux"
import {action_shop} from "../store/store"
export class Home extends Component {
    constructor(){
        super();
        this.state={
            list:[],
            currentIndex:0,
        }
    }
    componentDidMount(){
        axios.get("/api").then(res=>{
            this.setState({
                list:res.data.list
            })
        })
    }
    saveIndex=(index)=>{
        this.setState({
            currentIndex:index
        })
    }
    render() {
        return (
            <div className="wrap">
                <div className="head">
                   {
                       this.state.list.map((item,index)=>{
                          return(
                            <span className={`sp ${this.state.currentIndex==index?"active":""}`} key={index} onClick={()=>this.saveIndex(index)}>
                            {item.navtitle}
                            </span>
                          )
                       })
                   }
                </div>
                <div className="main">
                   {
                       this.state.list.length>0&&
                       this.state.list[this.state.currentIndex].content.map((item,index)=>{
                           return(
                            <div className="list" key={index}>
                                <h3 onClick={()=>this.props.history.push("/detail",item)}>{item.title}</h3>
                                <button className="shopadd" onClick={()=>this.props.addshop(item)}>加入购物车</button>
                            </div>
                           )
                       })
                   }
                   {
                       console.log(this.props.list)
                   }
                   
                   <button onClick={()=>this.props.history.push("/shopcar")}>购物车</button>
                </div>
                <button className="btn" onClick={()=>this.props.history.push("/collect")}>我的收藏</button>
            </div>
        );
    }
}

export default connect(
    (state)=>{
       return{
         list:state
       }
    },
    (dispatch)=>{
      return{
        addshop(item){
          dispatch(action_shop(item))
        }
      }
    }
)(Home);
