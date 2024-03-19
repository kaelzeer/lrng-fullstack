function addRoutes(app, mongoDBHandler) {
	app.get('/', (req, res) => {
		res.send('Hello World!')
	})

	app.get('/posts', async (req, res) => {
		try {
			const data = await mongoDBHandler.getAllPosts()
			res.json(data)
		} catch (error) {
			console.error("Error fetching posts:", error)
			res.status(500).send("Internal Server Error")
		}
	})
}

module.exports = { route: addRoutes }