import React from 'react';
import facebook from "../assets/fb.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"

const Socials = () => {
    return (
        <div>
            <h3 className='text-2xl font-semibold mb-5'>Find Us On</h3>
            <div className='flex flex-col border-2 border-base-300 rounded-lg'>
                <div className='flex gap-4 items-center p-5'>
                    <div className='bg-base-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                        <img src={facebook} alt="Facebook" />
                    </div>
                    <p className='text-accent text-lg'>
                        Facebook
                    </p>
                </div>
                <div className='flex border-y-2 border-base-300 gap-4 items-center p-5'>
                    <div className='bg-base-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                        <img src={twitter} alt="Twitter" />
                    </div>
                    <p className='text-accent text-lg'>
                        Twitter
                    </p>
                </div>
                <div className='flex gap-4 items-center p-5'>
                    <div className='bg-base-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                        <img src={instagram} alt="Instagram" />
                    </div>
                    <p className='text-accent text-lg'>
                        Instagram
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Socials;