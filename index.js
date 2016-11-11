import express from 'express';
import cors from 'cors'

 const app =express();
 const re = new RegExp('(https?:)?(\/\/)?(w...)?((telegram|vk|vkontakte|twitter)[^\/]*\/)?(@)?([a-zA-Z0-9]*)','i');
 app.use(cors());
 app.get('/', (req, res) => {
   const username = req.query.username.match(re);
   res.send('@' + username[7]);
 }
);

app.listen(3000, ()=>{
  console.log('Сервер запущен');
});
