import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer gap-6 footer-horizontal footer-center bg-base-200 text-base-content rounded p-24">
                <div>
                    <a className="btn btn-ghost text-xl text-blue-800 whitespace-nowrap">
                    Auction<span className='-ml-1 font-bold text-yellow-400'>Gallery</span>
                </a>
                </div>
                <nav className="grid grid-flow-col gap-4 text-xl">
                    <a className="link link-hover">Bid.</a>
                    <a className="link link-hover">Win.</a>
                    <a className="link link-hover">Own.</a>
                </nav>
                <nav className="grid grid-flow-col gap-12">
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Auction</a>
                    <a className="link link-hover">Category</a>
                    <a className="link link-hover">How it Works</a>
                </nav>
                <aside>
                    <p>© {new Date().getFullYear()} - AuctionHub. All rights reserved.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;