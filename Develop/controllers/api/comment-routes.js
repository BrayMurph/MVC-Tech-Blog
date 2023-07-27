const router = require("express").Router();
const {Comment} = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
    Comment.findAll({})
    .then(CommentData => res.json(CommentData))
    .catch (err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.get("/:id", (req, res) => {
    Comment.findAll({
        where: {
            id: req.params.id
        }
    })
    .then(CommentData => res.json(CommentData))
    .catch (err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.post("/", withAuth, (req, res) => {
    if (req.session) {
        Comment.create({
            comment_text: req.body.comment_text,
            post_id: req.bosy.post_id,
            user_id: req.session.user_id,
        })
        .then(CommentData => res.json(CommentData))
        .catch (err => {
            console.log(err);
            res.status(400).json(err);
        })
    }
});

router.put("/:id", withAuth, (req, res) => {
    Comment.update({

    })
});

router.delete("/:id", withAuth, (req, res) => {
    Comment.destroy({
        
    })
});

module.exports = router;