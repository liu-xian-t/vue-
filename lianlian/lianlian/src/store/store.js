import {createStore} from "redux"
function action_list(good){
    return{
        type:"COLLECT",
        good,
    }
}
function action_unlist(id){
    return{
        type:"UNCOLLECT",
        id,
    }
}
function action_shop(item){
    return{
       type:"SHOP",
       item
    }
}
function action_add(id){
     return{
         type:"ADD",
         id,
     }
}
function action_jian(id){
    return{
        type:"JIAN",
        id,
    }
}
function reducer(state=[],action){
    var newState=JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "COLLECT":
            newState.push(action.good);
            console.log(newState);
            return newState;
        case "UNCOLLECT":
            var findIndex=newState.findIndex((item)=>{
                return item.id==action.id
            });
            if(findIndex != -1){
                  newState.splice(findIndex,1)
            }
            return newState;
        case "SHOP":
             newState.push(action.item)
             return newState
        case "ADD":
             
            let index=newState.findIndex((item,index)=>{
                return item.id==action.id
            })
            newState[index].count++;
            return newState
        case "JIAN":
            let indexs=newState.findIndex((item)=>{
                return item.id == action.id
            })
            if(newState[indexs].count>1){
                newState[indexs].count--
            }
            return newState
            default: 
               return  state; 
    }
}
var store=createStore(reducer)

export {
    store,
    action_list,
    action_unlist,
    action_add,
    action_shop,
    action_jian
}