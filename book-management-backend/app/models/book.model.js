module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
        bookname: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      }
    });
  
    return Book;
  };
