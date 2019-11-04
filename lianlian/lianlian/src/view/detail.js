import React, { Component } from 'react';
import {connect} from "react-redux"
import {action_list,action_unlist} from "../store/store"
import collect from './collect';
export class Detail extends Component {
    render() {
        var item=this.props.location.state
        return (
            <div className="main">
                 {
                      <div className="list">
                        <h3>{item.title}</h3>
                      </div>
                 }  
                 {
                   this.props.list.find((good)=>{return good.id==item.id})?
                   <button onClick={()=>this.props.btnc(item.id)}>取消收藏</button>:
                   <button onClick={()=>this.props.btns(item)}>收藏</button>
                 }
                 {
                   this.props.list.find((good)=>{return good.id=item.id})?
                   
                 }

            </div>
        );
    }
}

export default connect(
     (state)=>{
        return{
          stata:list
        }
     },
     (dispatch)=>{
        return{
          btns:function(good){
            action_list(dispatch(good));
          }
        }
     }
)(Detail);
