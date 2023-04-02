const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
		password: String
		savedBooks: [Book]!
	}

	type Book {
		bookId: ID!
		authors: [String]
		description: String
		title: String
		image: String
		link: String
	}

	input savedBook {
		description: String
		title: String
		bookId: String
		link: String
		image: String
		authors: [String]
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		me: User
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
		addBook(newBook: SavedBook!): User
		removeBook(bookId: ID!): User
	}
`;

module.exports = typeDefs;
