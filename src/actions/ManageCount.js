export function addCount(val){
    return {type:'ADD',count:val}
}

export function deleteCount(val){
    return{type:'DELETE',count:val}
}

export default addCount