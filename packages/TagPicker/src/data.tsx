import React from "react";
import IconLockSolid from "@igloo-ui/icons/dist/LockSolid";
import type { TagItem } from "./TagPicker";

export const mockData: TagItem[] = [
    {
        id: "1",
        text: "A team",
        color: "#FF0000"
    },
    {
        id: "2",
        text: "A locked team!!!",
        icon: <IconLockSolid size="small" />
    },
    {
        id: "4",
        text: "Just a simple team",
        color: "#7f34d8"
    },
    {
        id: "5",
        text: "Bob O'Bob",
        subtext: "bob@bob.bob",
        src: "https://cdn-stg.officevibe-dev.com/assets/avatars/avatar-0.svg"
    },
    {
        id: "6",
        text: "Bob Warning",
        src: "https://cdn-stg.officevibe-dev.com/assets/avatars/avatar-1.svg"
    },
    {
        id: "7",
        text: "Sponge Bob",
        subtext: "sponge@bob.dot"
    },
    {
        id: "8",
        text: "This user's name is very loooooooooooooooooong",
        src: "https://cdn-stg.officevibe-dev.com/assets/avatars/avatar-2.svg"
    },
    {
        id: "9",
        text: "Another team",
        color: "#dd34d8"
    },
    {
        id: "10",
        text: "And an another one",
        color: "#7fffd8"
    },
    {
        id: "11",
        text: "And an another team",
        color: "#11ff11"
    },
    {
        id: "12",
        text: "And one more team for good measure",
        color: "#aa34d8"
    },
    {
        id: "13",
        text: "Bobinater",
        color: "#7f34d8",
        isColorSquare: true
    }
];

export const memberMockData: TagItem[] = [
    {
        id: "1",
        text: "Fred Allen",
        src: "https://cdn-stg.officevibe-dev.com/assets/avatars/avatar-2.svg",
        type: "member",
        isManager: true
    },
    {
        id: "2",
        text: "Kathy Allen",
        src: "https://i.pravatar.cc/100",
        type: "member"
    },
    {
        id: "4",
        text: "Karen Allen",
        src: "https://i.pravatar.cc/200",
        type: "member"
    },
    {
        id: "5",
        text: "Bob O'Bob",
        subtext: "Writer",
        src: "https://cdn-stg.officevibe-dev.com/assets/avatars/avatar-0.svg",
        type: "member"
    },
    {
        id: "6",
        text: "Bob Roberts",
        src: "https://cdn-stg.officevibe-dev.com/assets/avatars/avatar-1.svg",
        type: "member"
    },
    {
        id: "7",
        text: "Sponge Bob",
        subtext: "Artist",
        src: "https://i.pravatar.cc/300",
        type: "member"
    },
    {
        id: "8",
        text: "FredBobAdamRichard Allinson",
        src: "https://i.pravatar.cc/400",
        type: "member"
    }
];
