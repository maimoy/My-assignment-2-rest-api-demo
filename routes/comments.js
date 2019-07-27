module.exports = {
    getComments(req, res) {
        res.status(200).send(req.store.posts[req.params.postid].comments);

    },

    addComment(req, res) {
        let newComment = req.body;
        let postId = req.params.postid;
        let comments = req.store.posts[postId].comments.push(newComment);
        res.status(201).send({ postid: postId, comment: newComment });
    },

    updateComment(req, res) {
        req.store.posts[req.params.postid].comments[req.params.commentid] = req.body;
        res.status(200).send(req.store.posts[req.params.postid].comments);
    },

    removeComment(req, res) {
        req.store.posts[req.params.postid].comments.splice(req.params.commentid, 1);
        res.status(204).send();
    }
}