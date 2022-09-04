import React from 'react';
import {useEffect} from "react";
import {useRef} from "react";

export const UseIntersection = (isLoading, lastElement, canLoad, callBack) => {
    const observer = useRef()

    useEffect(() => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect()
        let callback = function (entries, observer) {
            if (entries[0].isIntersecting && canLoad) {
                callBack()
            }
        }
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)
    }, [isLoading])
};
