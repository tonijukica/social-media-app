module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false
    },
    passwordHash: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  },
  {
    tableName: 'user',
    timestamps: true,
    underscored: true
  });
  User.associate = (db) => {
    User.hasMany(db.Comment);
    User.hasMany(db.Post);
  }
  return User;
}
