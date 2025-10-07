import React from 'react';
import { useEffect, useState } from 'react';
import { getStoredBooks } from '../../utilities/addToDB';
import { useLoaderData } from 'react-router';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {

  const [readList, setReadList] = useState([]);
  const booksData = useLoaderData();

  useEffect(() => {
    const storedReadBooksID = getStoredBooks();
    console.log(storedReadBooksID);

    const readBooks = booksData.filter(book => storedReadBooksID.includes(book.bookId));
    setReadList(readBooks);
  }, [booksData]);

  // Helper to generate a random color in hex format
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className='bg-[#F3F3F3] py-12 rounded-3xl mb-12 flex justify-center'>
      <BarChart
        width={1260}
        height={630}
        data={readList}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 60,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="bookName"
          interval={0}
          tick={({ x, y, payload }) => {
            // Split long book names into max 2 lines
            const words = payload.value.split(' ');
            const lines = [];
            let line = '';
            words.forEach(word => {
              if ((line + word).length > 16) {
                lines.push(line);
                line = word + ' ';
              } else {
                line += word + ' ';
              }
            });
            lines.push(line);

            // Limit to 2 lines, join remaining words in the last line
            if (lines.length > 2) {
              const first = lines[0];
              const rest = lines.slice(1).join(' ').trim();
              lines.length = 0;
              lines.push(first, rest);
            }

            return (
              <g transform={`translate(${x},${y + 10})`}>
                {lines.map((text, i) => (
                  <text
                    key={i}
                    x={0}
                    y={i * 14}
                    textAnchor="middle"
                    fill="#666"
                    fontSize={12}
                  >
                    {text.trim()}
                  </text>
                ))}
              </g>
            );
          }}
        />
        <YAxis />
        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {readList.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getRandomColor()} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}

export default PagesToRead;