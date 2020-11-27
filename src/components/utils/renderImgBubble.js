import React from 'react';
import { getRandomInt } from "components/utils/getRandomInt";

const backgroundColor = ["orange", "green", "blue", "pink", "purple"];

export const renderImgBubble = (img, name) => {

    const colorPicker = (colors) => {
        const randInt = getRandomInt(0, colors.length);
        return colors[randInt];
    };

    if (img === "" || img === null) {
        const nameSplit = name.split(" ");
        const nameInitials = [
            nameSplit[0][0],
            nameSplit[nameSplit.length - 1][0],
        ].join("");

        return (
            <div
                className={`img-bubble__placeholder image-background-color--${colorPicker(
                    backgroundColor
                )}`}
            >
                {nameInitials}
            </div>
        );
    } else {
        return (
            <img
                src={img}
                alt={`${name} headshot`}
                className="img-bubble__img"
            />
        );
    }
};

