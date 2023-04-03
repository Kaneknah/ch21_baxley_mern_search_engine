const express = require("express");
const path = require("path");
const db = require("./config/connection");
// const routes = require("./routes");

//importing Apollo Server
const { ApolloServer } = require("apollo-server-express");
//importing typeDefs and Resolvers
const { typeDefs, resolvers } = require("./schemas");

//importing middleware
const { authMiddleware } = require("./utils/auth");

const app = express();
const PORT = process.env.PORT || 3001;

//Setting up Apollo Server
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: authMiddleware,
});
//connecting Apollo and Express

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client/build");
app.use(express.static(buildPath));

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
// app.use(routes);

async function startApolloServer() {
	server.applyMiddleware({ app });

	db.once("open", async () => {
		await server.start();
		app.listen(PORT, () =>
			console.log(`🌍 Now listening on localhost:${PORT}`)
		);
	});
}

startApolloServer();
