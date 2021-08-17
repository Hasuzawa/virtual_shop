
import React from "react";
import { useMediaQuery } from "react-responsive";

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