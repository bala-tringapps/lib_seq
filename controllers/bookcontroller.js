const { User, Sequelize, Post } = require('../models')

var addNewUser = app.post('/bookdetail', (req, res) => {
  const {
    title,
    author,
    edition,
    publisher,
    summary,
    ISBN,
    genre,
    url,
    authorId,
  } = req.body
  try {
    const bookinfo = Book.create({
      title,
      author,
      edition,
      publisher,
      summary,
      ISBN,
      genre,
      url,
      authorId,
    })
    return res.status(200).json(bookinfo)
  } catch (e) {
    return res.status(500).json({ message: e })
  }
})
