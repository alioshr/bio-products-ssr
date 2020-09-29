import {useEffect, useState} from 'react';

export const useClientWindow = () => {
    const [clientWindow, setClientWindow] = useState(undefined);
    useEffect(() => {
      setClientWindow(window)
    },[])

    return clientWindow
}