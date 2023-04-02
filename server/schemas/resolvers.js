const { AuthenticationError } = require("apollo-server-express");
const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
		me: async (parent, args, context) => {
			if (context.user) {
				return User.findOne({ _id: context.user._id })
					.select("-__v -password")
					.populate("books");
			}
			throw new AuthenticationError("You need to be logged in!");
		},
	},

	Mutations: {},
};

module.exports = resolvers;
