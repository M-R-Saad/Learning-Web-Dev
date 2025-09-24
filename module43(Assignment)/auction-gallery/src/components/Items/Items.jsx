import { useState, useEffect } from 'react';
import Item from '../Item/Item';

const Items = ({ handleBidNow, bidItems }) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    // console.log(items);

    return (
        <div>
            <h1 className='text-3xl font-medium text-[#0E2954] mb-5'>
                Active Auctions
            </h1>
            <p className='text-xl mb-8'>
                Discover and bid on extraordinary items
            </p>

            <table className='bg-white w-full rounded-3xl table-fixed'>
                <thead>
                    <tr className='text-xl'>
                        <th className='p-8 font-medium text-left w-[50%]'>Items</th>
                        <th className='p-8 font-medium w-[20%]'>Current Bid</th>
                        <th className='p-8 font-medium w-[20%]'>Time Left</th>
                        <th className='p-8 font-medium w-[20%]'>Bid Now</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <Item 
                                                key={item.id} 
                                                item={item}
                                                handleBidNow={handleBidNow}
                                                bidItems={bidItems}
                                            />
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Items;