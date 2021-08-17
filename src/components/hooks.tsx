
import React from "react";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect, useRef } from "react";

enum MediaSize{
    large,
    middle,
    small
}

export {MediaSize};

//screen size hook
const useMediaSize = <none, MediaSize>() => {
    const largeScreen = useMediaQuery({minWidth: 1000});
    const middleScreen = useMediaQuery({minWidth: 500});
    //const smallScreen = useMediaQuery({maxWidth: 499});

    if (largeScreen){
        return MediaSize.large;
    } else if (middleScreen){
        return MediaSize.middle;
    } else {
        return MediaSize.small;
    }
};

export {useMediaSize};

//hook to get ref element's dimension
const useTargetDimension = () => {
    const targetRef = useRef(null);
    const [targetWidth, setTargetWidth] = useState<number>(0);
    const [targetHeight, setTargetheight] = useState<number>(0);

    //useEffect not needed?
    useEffect( () => {

    }, []);

    useEffect( () => {

    });

    
    return [targetWidth, targetHeight, targetRef];
}