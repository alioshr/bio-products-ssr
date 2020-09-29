export const mapProducts = (object) => {
  const array = [];
  for(let key in object) {
    array.push({
          id: key,
          ...object[key]
      })
  }
  return array;
}

//used to transform nested objects chunks into arrays for mapping purposes
export const objChunkToArr = (object, key) => {
    const chunk = [];
    Object.keys(object).some(function (k) {
      if (k === key) {
        for (let item in object[k]) {
          chunk.push({
            id: item,
            ...object[k][item],
          });
        }
        object[k] = chunk;
      }
      if (object[k] && typeof object[k] === "object") {
        objChunkToArr(object[k], key);
      }
      if (Array.isArray(object[k])) {
        object[k].forEach((item) => objChunkToArr(item, key));
      }
    });
    return object;
  };
  
  //used to move one level up on the obj/array of objects tree 
  //if you have the name of the ancestor and the full obj/arr of objects to loop in
  export const findObjParent = (object, key) => {
    let parent = undefined;
    Object.keys(object).some((k) => {
      if (k === key || object[k].id === key) {
        return (parent = object);
      }
      if (key !== k && object[k] && typeof object[k] === "object") {
        parent = findObjParent(object[k], key);
        return parent !== undefined;
      }
    });
    return parent;
  };
  
  //used to transform the first obj layer into an array
  export const objToArray = (obj) => {
    const sideDrawer = [];
    for (let item in obj) {
      sideDrawer.push({
        id: item,
        ...obj[item],
      });
    }
    return sideDrawer;
  };
  
  //used to set state on my reducers
  export const setState = (state, newState) => {
    return {
      ...state,
      ...newState,
    };
  };
