import { NONAME } from "dns";
import React from "react";
import { useMediaQuery } from "react-responsive";

enum MediaSize{
    large,
    middle,
    small
}

export {MediaSize};

const CheckMediaSize = () => {
    if (useMediaQuery({minWidth: 1000})){
        return <span>{MediaSize.large}</span>;
    } else if (useMediaQuery({minWidth: 500})){
        return <span>{MediaSize.middle}</span>;
    } else {
        return <span>{MediaSize.small}</span>;
    }
};

export {CheckMediaSize};