module.exports = {
    getPosts(req, res) {
        res.status(200).send(req.store.posts);
    },

    addPost(req, res) {
        let newPost = (req.body);
        let newPostId = req.store.posts.length;
        req.store.posts.push(newPost);
        res.status(201).send({ id: newPostId });
    },

    updatePost(req, res) {
        req.store.posts[req.params.id] = req.body;
        res.status(200).send(req.store.posts[req.params.id]);
    },

    removePost(req, res) {
        req.store.posts.splice([req.params.id], 1);
        res.status(204).send();
    }
}