# Node.js HTTP Exercise

## Getting Started

1. Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
2. Use this template repository to start a new project in your repos folder: git clone <repo_name>
3. cd repo_name to navigate into your new repo directory
4. Start Visual Studio Code and select 'Open Folder'. Then select repo_name to open the folder in the editor (or just type code . in your terminal inside the repo directory)
5. Follow the instructions on the README.md file to complete exercises
6. Open the app.js file to get started

## Exercise

### Objective

- Create a server that responds to requests
- The server should have at least ‘/echo’, ‘/’, and ‘/about’ endpoints
- The server will account for ‘not found’ endpoints
- The ‘/echo’ endpoint will use the ReadStream response object to read the request body, and return the request body as the response body to the client
- The ‘/’ endpoint will respond as you wish
- The ‘/about’ endpoint will return a JSON response with information about yourself

### Steps

- Start in your `app.js` file
- Import the http module
- Using the http module, call the createServer
- Pass in a request handler callback function to the createServer method that receives request and response objects as parameters
- Add an event listener to the request object that listens for the ‘data’ event to be emitted from the ReadStream
- Store the chunks in an array
- Add an event listener to the request object that listens for the ‘end’ event to be emitted from the ReadStream
- Set a new variable ‘body’ equal to Buffer.concat(array).toString()
- Write a conditional statement that assesses the request url, and responds appropriately:
  - ‘/’ - Wildcard. Respond with whatever information you wish
  - ‘/about’ - Respond with an object that has information about yourself
  - ‘/echo’ - Respond with an object that, a minimum, includes the request method, url and body.
- Make sure to end your response with .end()
- Set your server to listen on port 3000
- Initiate the file using the node.js CLI
# node_http
