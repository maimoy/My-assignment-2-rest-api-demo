const express = require('express');
const logger = require('morgan');
const errorHandler = require('errorHandler');
const bodyParsser = require('body-parser');
const posts = require('./routes/posts.js');
const comments = require('./routes/comments.js');

let app = express();
app.use(bodyParsser.json());
app.use(logger('dev'));
app.use(errorHandler());

let store = {
    posts: [
        {
            name: 'Top 10 ES6 Features every Web Developer must know',
            url: 'https://webapplog.com/es6',
            text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
            comments: [
                { text: `Cruel…..var { house, mouse} = No type optimization at all` },
                { text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.' },
                { text: '(p1,p2)=>{ … } ,i understand this ,thank you !' }

            ]
        }
    ]
};


app.use((request, response, next) => {
    // To pass the store across modules inside request
    request.store = store;
    next();
})

app.get('/posts', posts.getPosts);

app.post('/posts', posts.addPost);

app.delete('/posts/:id', posts.removePost);

app.get('/posts/:postid/comments', comments.getComments);

app.put('/posts/:id', posts.updatePost);

app.get('/posts/:postid/comments', comments.getComments);

app.post('/posts/:postid/comments', comments.addComment);

app.put('/posts/:postid/comments/:commentid', comments.updateComment);

app.delete('/posts/:postid/comments/:commentsid', comments.removeComment);

app.listen(3000);
console.log('server started');

