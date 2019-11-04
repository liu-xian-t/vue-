import React, { Component } from 'react';
import {connect} from "react-redux"
import {action_add, action_jian} from "../store/store"
export class Shopcar extends Component {
    render() {
        var list=this.props.list
        return (
            <div className="main">
               {
                   list.length>0&&
                   list.map((item,index)=>{
                       return(
                        <div className="list" key={index}>
                            <h3>{item.title}</h3>
                            <button className="jia" onClick={()=>this.props.jia(item.id)}>+</button>
                              <span>{item.count}</span>
                            <button className="jian" onClick={()=>this.props.jian(item.id)}>-</button>
                            {
                                console.log(this.props.list)
                            }
                        </div>
                       )
                   })
               }
            </div>
        );
    }
}

export default connect(
    (state)=>{
       return{
           list:state
       }
    },(dispatch)=>{
       return{
         jia(id){
             dispatch(action_add(id))
         },
         jian(id){
             dispatch(action_jian(id))
         }
       }
    }
)(Shopcar);
