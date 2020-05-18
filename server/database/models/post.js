module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    title: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false
    },
    postText: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false
    },

  },
  {
    tableName: 'post',
    timestamps: true,
    underscored: true
  });
  Post.associate = (db) => {
    Post.belongsTo(db.User, {
      foreignKey: {
        field: 'user_id',
        name: 'userId'
      }
    });
    Post.hasMany(db.Comment);
  }
  return Post;
}
