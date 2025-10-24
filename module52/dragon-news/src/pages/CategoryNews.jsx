import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {

    const { id } = useParams();
    const newsData = useLoaderData();
    // console.log(id);

    const [categoryNews, setCategoryNews] = React.useState([]);

    useEffect(() => {
        if(id === '0') {
            setCategoryNews(newsData);
            return;
        }
        if(id === '1') {
            const filteredNews = newsData.filter(news => news.others.is_today_pick === true);
            setCategoryNews(filteredNews);
            return;
        }
        const filteredNews = newsData.filter(news => news.category_id === parseInt(id));
        setCategoryNews(filteredNews);
    }, [newsData, id]);

    return (
        <div>
            <h2 className='text-xl font-semibold mb-5'>Dragon News Home</h2>
            <div className='grid grid-cols-1 gap-8'>
                {
                    categoryNews.map(news => <NewsCard key={news._id} news={news} />)
                }
            </div>
        </div>
    );
};

export default CategoryNews;