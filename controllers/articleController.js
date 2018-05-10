const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Article.find(req.query)
      .sort({ date: -1 })
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    const article = {
      _id: req.body._id,
      title: req.body.headline.main,
      url: req.body.web_url
    };
    db.Article.create(article)
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Article.findOneAndUpdate({ _id: req.params._id }, req.body)
      .then((dbArticle = res.json(dbArticle)))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Article.findById({ _id: req.params.id })
      .then(dbArticle => dbArticle.remove())
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  }
};
