import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import axios from 'axios';
import Article from '../components/Article';

const News = () => {
   const [newsData, setNewsData] = useState([]);
   const [author, setAuthor] = useState('');
   const [content, setContent] = useState('');
   const [error, setError] = useState(false);

   useEffect(() => {
      getData();
   }, []);
   const getData = () => {
      axios
         .get(' http://localhost:3004/articles')
         .then((res) => setNewsData(res.data));
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (content.length < 180) {
         setError(true);
      } else {
         axios
            .post('http://localhost:3004/articles', {
               author,
               content,
               date: Date.now(),
            })
            .then(() => {
               setError(false);
               setAuthor('');
               setContent('');
               getData();
            });
      }
   };

   return (
      <div className="news-container">
         <Navigation />
         <Logo />
         <h1>News</h1>
         <form onSubmit={(e) => handleSubmit(e)}>
            <input
               onChange={(e) => setAuthor(e.target.value)}
               type="text"
               placeholder="Name"
               value={author}
            />
            <textarea
               style={{
                  border: error ? '1px border red' : '1px solid #61dafb',
               }}
               onChange={(e) => setContent(e.target.value)}
               placeholder="nachricht"
               value={content}
            ></textarea>
            {error && <p>bitte mindenstens 180 Zeichen schreiben</p>}
            <input type="submit" value="senden" />
         </form>

         <ul>
            {newsData
               .sort((a, b) => b.date - a.date)
               .map((article) => (
                  <Article key={article.id} article={article} />
               ))}
         </ul>
      </div>
   );
};

export default News;
