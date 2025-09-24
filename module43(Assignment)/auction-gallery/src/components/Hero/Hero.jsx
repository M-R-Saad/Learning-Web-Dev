import React from 'react';

const Hero = () => {
    return (
        <div>
            <div
                className="hero flex justify-end h-[80vh]"
                style={{
                    backgroundImage:
                        "url(https://i.postimg.cc/TwtS7yxx/Banner-min.jpg)",
                    transform: "scaleX(-1)",
                    backgroundSize: "130%",
                    backgroundPosition: "right 55%",
                }}
            >
                <div className="text-neutral-content" style={{ transform: "scaleX(-1)" }}>
                    <div className="max-w-lg ml-24">
                        <h1 className="mb-5 text-4xl font-bold">
                            Bid on Unique Items from Around the World.
                        </h1>
                        <p className="mb-5 w-[80%]">
                            Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions.
                        </p>
                        <button className="btn rounded-full">Explore Auction</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;