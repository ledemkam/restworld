import React from 'react';
import axios from 'axios';

const DeleteArticle = ({ id }) => {
   const handleDelete = () => {
      axios.delete('http://localhost:3004/articles/' + id);
      window.location.reload();
   };

   return (
      <button
         onClick={() => {
            if (window.confirm('wollen Sie diese article löschen ?')) {
               handleDelete();
            }
         }}
      >
         Supprimer
      </button>
   );
};

export default DeleteArticle;
