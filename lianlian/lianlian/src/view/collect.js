import React, { Component } from 'react';
import {connect} from "react-redux"
export class Collect extends Component {
    render() {
        var list=this.props.list;
        console.log(this.props)
        return (
            <div className="main">
              {
                    list.length>0&&
                    list.map((item,index)=>{
                        return(
                            <div className="list" key={index} onClick={()=>{this.props.history.push("/detail",item)}}>
                                <h3>{item.title}</h3>
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
     },
     ()=>{
       return{
           
       }
     }
)(Collect);
