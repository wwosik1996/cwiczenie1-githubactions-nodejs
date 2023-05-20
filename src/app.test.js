const app = require("./app")
const supertest = require("supertest")
const request = supertest(app)

describe("/test endpoint", () => {
	it ("Powinna zostac zwrocona odpowiedz", async () => {
		const response = await request.get("/test")
		expect(responce.status).toBe(200)
		expect(response.text).toBe("Hello World");
	})
})
