import React from "react"
import { Chrono } from "react-chrono";

const Home = () => {
    const items = [{
        title: "Artists 10",
        cardTitle: "June 2022",
        cardDetailedText: "10 unknown artists joined.",
        media: {
            name: "dunkirk beach",
            source: {
            url: "https://s3.bmp.ovh/imgs/2022/06/03/2059158e66717833.jpeg"
            },
            type: "IMAGE"
        }
    }, {
        title: "Artists 100",
        cardTitle: "Coming soon",
        cardDetailedText: "100 unknown artists are coming.",
    }, {
        title: "Artists 1000",
        cardTitle: "Coming soon",
        cardDetailedText: "1000 unknown artists are coming.",
    }, {
        title: "Artists 10000",
        cardTitle: "Coming soon",
        cardDetailedText: "10000 unknown artists are coming.",
    }, {
        title: "Artists More",
        cardTitle: "Coming soon",
        cardDetailedText: "More unknown artists are coming.",
    }];

    return (
        <div style={{ width: "800px", height: "1000px"}}>
        <Chrono items={items} mode="HORIZONTAL"/>
        </div>
    )
}

export default Home;
