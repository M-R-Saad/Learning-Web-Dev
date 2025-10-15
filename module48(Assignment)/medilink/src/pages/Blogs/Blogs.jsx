import React from 'react';
import { LuCalendarRange } from "react-icons/lu";
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router';

const Blogs = () => {

    let location = useLocation()
    
    return (
        <div className='container mx-auto flex flex-col gap-12 my-20'>
            <Helmet>
                <title>MediLink | {location.pathname.split('/').pop().toUpperCase()}</title>
            </Helmet>
            <div className='bg-white p-12 rounded-3xl'>
                <h2 className='text-2xl font-bold'>
                    🧩 1. What is <span className='font-semibold text-green-500 bg-gray-100 px-2 py-1 rounded-lg hover:bg-gray-200 cursor-pointer'>useState</span> and how does it work in React?
                </h2>
                <div className='my-6 py-6 border-y-2 border-dashed border-[#0F0F0F30]'>
                    <p className='font-medium text-[#0F0F0F99]'>
                        <span className='font-bold text-blue-400 text-xl block mb-2'>Answer:</span>
                        <span className='font-semibold text-green-500 bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 cursor-pointer'>useState</span> is a React Hook that allows functional components to manage state — data that changes over time and affects how the UI looks.
                        When you call <span className='font-semibold text-green-500 bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 cursor-pointer'>useState(initialValue)</span>, it returns an array with two items:
                        <br />
                        1. The current state value.
                        <br />
                        2. A function to update that value.
                        <br />
                        Whenever you call the updater function, React re-renders the component with the new state.
                    </p>
                </div>
                <div className='flex gap-4 items-center'>
                    <LuCalendarRange color='#0F0F0F75' size={32}/>
                    <p className='text-lg font-semibold text-[#0F0F0F75]'>
                        Added at: 2024-10-15
                    </p>
                </div>
            </div>

            <div className='bg-white p-12 rounded-3xl'>
                <h2 className='text-2xl font-bold'>
                    ⚙️ 2. What is the purpose of <span className='font-semibold text-green-500 bg-gray-100 px-2 py-1 rounded-lg hover:bg-gray-200 cursor-pointer'>useEffect</span> in React?
                </h2>
                <div className='my-6 py-6 border-y-2 border-dashed border-[#0F0F0F30]'>
                    <p className='font-medium text-[#0F0F0F99]'>
                        <span className='font-bold text-blue-400 text-xl block mb-2'>Answer:</span>
                        <span className='font-semibold text-green-500 bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 cursor-pointer'>useEffect</span> lets you perform side effects in functional components — tasks that interact with the outside world or run after the component renders. Common examples include:
                        <br />
                        1. Fetching data from an API.
                        <br />
                        2. Updating the document title.
                        <br />
                        3. Setting up or cleaning up event listeners.
                        <br />
                        It runs after the <span className='font-bold'>component renders</span>, and you can control when it runs using a <span className='font-bold'>dependency array</span>.
                    </p>
                </div>
                <div className='flex gap-4 items-center'>
                    <LuCalendarRange color='#0F0F0F75' size={32}/>
                    <p className='text-lg font-semibold text-[#0F0F0F75]'>
                        Added at: 2024-10-15
                    </p>
                </div>
            </div>

            <div className='bg-white p-12 rounded-3xl'>
                <h2 className='text-2xl font-bold'>
                    🧠 3. What is a  <span className='font-semibold text-green-500 bg-gray-100 px-2 py-1 rounded-lg hover:bg-gray-200 cursor-pointer'>custom hook</span> in React and when should you use one?
                </h2>
                <div className='my-6 py-6 border-y-2 border-dashed border-[#0F0F0F30]'>
                    <p className='font-medium text-[#0F0F0F99]'>
                        <span className='font-bold text-blue-400 text-xl block mb-2'>Answer:</span>
                        A <span className='font-bold'>custom hook</span> is a JavaScript function that starts with the prefix <span className='font-semibold text-green-500 bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 cursor-pointer'>use</span> and allows you to reuse logic between components.
                        You create it by combining existing React hooks <span className='font-semibold text-green-500 bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 cursor-pointer'>(useState, useEffect, etc.)</span> to encapsulate reusable functionality. When to use a custom hook:
                        <br />
                        1. When multiple components share the same logic <span className='font-bold'>(like fetching data, form handling, timers, etc.)</span>
                    </p>
                </div>
                <div className='flex gap-4 items-center'>
                    <LuCalendarRange color='#0F0F0F75' size={32}/>
                    <p className='text-lg font-semibold text-[#0F0F0F75]'>
                        Added at: 2024-10-15
                    </p>
                </div>
            </div>

            <div className='bg-white p-12 rounded-3xl'>
                <h2 className='text-2xl font-bold'>
                    🔄 4. Difference between <span className='font-semibold text-green-500 bg-gray-100 px-2 py-1 rounded-lg hover:bg-gray-200 cursor-pointer'>controlled</span> and <span className='font-semibold text-green-500 bg-gray-100 px-2 py-1 rounded-lg hover:bg-gray-200 cursor-pointer'>uncontrolled</span> components — which one is better?
                </h2>
                <div className='my-6 py-6 border-y-2 border-dashed border-[#0F0F0F30]'>
                    <p className='font-medium text-[#0F0F0F99]'>
                        <span className='font-bold text-blue-400 text-xl block mb-2'>Answer:</span>
                        Controlled components are form inputs where React fully manages the value via <span className='font-semibold text-green-500 bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 cursor-pointer'>state</span>. Uncontrolled components use the DOM to handle their own state via <span className='font-semibold text-green-500 bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 cursor-pointer'>ref</span>.
                        <br />
                        ✅ <span className='font-bold'>Controlled components</span> are generally better because they make your form's data predictable, easier to validate, and integrate with React's state flow — though uncontrolled ones can be simpler for quick or non-critical inputs.
                    </p>
                </div>
                <div className='flex gap-4 items-center'>
                    <LuCalendarRange color='#0F0F0F75' size={32}/>
                    <p className='text-lg font-semibold text-[#0F0F0F75]'>
                        Added at: 2024-10-15
                    </p>
                </div>
            </div>

            <div className='bg-white p-12 rounded-3xl'>
                <h2 className='text-2xl font-bold'>
                    🧾 5. Tell us something about <span className='font-semibold text-green-500 bg-gray-100 px-2 py-1 rounded-lg hover:bg-gray-200 cursor-pointer'>useFormStatus</span>?
                </h2>
                <div className='my-6 py-6 border-y-2 border-dashed border-[#0F0F0F30]'>
                    <p className='font-medium text-[#0F0F0F99]'>
                        <span className='font-semibold text-green-500 bg-gray-100 px-2 py-1 rounded-lg hover:bg-gray-200 cursor-pointer'>useFormStatus</span> is a React Hook <span className='font-bold'>(available in React 18+ and Next.js App Router)</span> that provides real-time information about the <span className='font-bold'>status of a form submission</span> when using the new React Server Actions or <span className='font-semibold text-green-500 bg-gray-100 px-2 py-1 rounded-lg hover:bg-gray-200 cursor-pointer'>&lt;form&gt;</span> components with server functions.
                        <br />
                        It helps track whether the form is <span className='font-bold'>pending, submitted, or completed</span>, so you can show loading states or disable buttons while submission is happening.
                        <br />
                        It improves UX by letting you react to form state changes without <span className='font-bold'>managing separate state</span> manually.
                    </p>
                </div>
                <div className='flex gap-4 items-center'>
                    <LuCalendarRange color='#0F0F0F75' size={32}/>
                    <p className='text-lg font-semibold text-[#0F0F0F75]'>
                        Added at: 2024-10-15
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;