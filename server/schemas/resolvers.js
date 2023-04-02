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

	Mutations: {
		addUser: async (parent, { username, email, password }) => {
			const user = await User.create({ username, email, password });
			const token = signToken(user);
			return { token, user };
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError("No user found with this email address");
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const token = signToken(user);

			return { token, user };
		},

		addBook: async (parent, { newBook }, context) => {
			if (context.user) {
				const updateBookList = await User.findOneAndUpdate(
					{ _id: context.user_id },
					{
						$pull: {
							savedBook: { bookId },
						},
					},
					{ new: true }
				);

				return updateBookList;
			}
			throw new AuthenticationError("You need to be logged in!");
		},

		//Code for removing a book from the list.
		removeBook: async (parent, { bookId }, context) => {
			if (context.user) {
				const updateBookList = await User.findOneAndUpdate(
					{ _id: context.user_id },
					{
						$pull: {
							savedBook: { bookId },
						},
					},
					{ new: true }
				);

				return updateBookList;
			}
			throw new AuthenticationError("You need to be logged in!");
		},
	},
};

module.exports = resolvers;
