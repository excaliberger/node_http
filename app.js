console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const http = require("http");

const populateHTML = (headingContent) => {
    return `<main> <h1>${headingContent}</h1> </main>`
}

http
    .createServer((request, response) => {
        const { url, method } = request;
        const chunks = [];

        request.on("error", (error => {
            response.statusCode = 400;
            response.setHeader("Content-Type", "application/json")
            response.write(JSON.stringify(error));
            response.end();
    }))
        .on("data", (chunk) => {
            chunks.push(chunk);
        }).on("end", () => {
            console.log(chunks);

            const body = Buffer.concat(chunks).toString()
            const responseBody = {
                url,
                method,
                body
            }
            switch (url) {
                case "/":
                    console.log("made it this far")
                    response.setHeader("Content-Type", "text/html")
                    response.write("Something original")
                    break;
                case "/about":
                    const details = {
                        name: "Emily",
                        city: "New York, NY",
                        hobbies: "crochet, partner dance"
                    }
                    response.setHeader("Content-Type", "application/json")
                    response.write(JSON.stringify(details));
                    break;
                case "/echo":
                    response.setHeader("Content-Type", "application/json")
                    response.write(JSON.stringify(responseBody));
                    break;
                default:
                    response.setHeader("Content-Type", "text/html")
                    response.write(
                        populateHTML(
                            "404 not found. Try <a href='http://localhost:3000'>this</a>"
                            )
                        );
                    break;
            }
        response.end();
        });
        
    }).listen(3000, () => {
        console.log("Server listening at http://localhost:3000...");
    });

// Finish setting up the server
