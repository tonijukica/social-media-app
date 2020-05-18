module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('comment', {
    text: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false
    },
  },
  {
    tableName: 'comment',
    timestamps: true,
    underscored: true
  });
  Comment.associate = (db) => {
    Comment.belongsTo(db.Post, {
      foreignKey: {
        field: 'post_id',
        name: 'postId'
      }
    });
    Comment.belongsTo(db.User, {
      foreignKey: {
        field: 'user_id',
        name: 'userId'
      }
    })
  }
  return Comment;
}
