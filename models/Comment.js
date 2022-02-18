const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
    {
        // columns will go here
        id: {},
        comment_text: {},
        user_id: {},
        post_id: {}
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "comment"
    }
);

module.exports = Comment;