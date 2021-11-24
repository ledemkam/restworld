import React, { useState } from 'react';
import axios from 'axios';
import DeleteArticle from './DeleteArticle';

const Article = ({ article }) => {
   const [isEditing, setIsEditing] = useState(false);
   const [editedContent, setEditContent] = useState('');

   const dateParser = (date) => {
      let newDate = new Date(date).toLocaleString('de-DE', {
         year: 'numeric',
         month: 'long',
         day: 'numeric',
         hour: 'numeric',
         minute: 'numeric',
         second: 'numeric',
      });
      return newDate;
   };

   const handleEdit = () => {
      const data = {
         auhtor: article.auhtor,
         content: editedContent ? editedContent : article.content,
         date: article.date,
      };
      axios.put(' http://localhost:3004/articles' + article.id, data);
      setIsEditing(false);
   };
   return (
      <div
         className="article"
         style={{ background: isEditing ? '#f3feff' : 'white' }}
      >
         <div className="card-header">
            <h3>{article.author}</h3>
            <em>gepostet am {dateParser(article.date)}</em>
         </div>
         {isEditing ? (
            <textarea
               onChange={(e) => setEditContent(e.target.value)}
               autoFocus
               defaultValue={editedContent ? editedContent : article.content}
            ></textarea>
         ) : (
            <p>{editedContent ? editedContent : article.content}</p>
         )}
         <div className="btn-container">
            {isEditing ? (
               <button onClick={handleEdit}>bestätigen</button>
            ) : (
               <button onClick={() => setIsEditing(true)}>Edit</button>
            )}

            <DeleteArticle id={article.id} />
         </div>
      </div>
   );
};

export default Article;
