import {createRef, useState} from 'react'

export const useElementCurrent = (ref, index, length) => {
    const arr = []
    for(let i; i < length; i++) {
        arr.push(ref)
    }
    console.log(arr)
    const catLength = length;
    const [elRefs, setElRefs] = useState([]);
    // useEffect(() => {
    //   setElRefs((elRefs) =>
    //     Array(catLength)
    //       .fill()
    //       .map((_, i) => elRefs[i] || createRef())
    //   );
    // }, []);
}