# Question Paper Generator

This Node.js application generates question papers based on specified criteria such as total marks and difficulty distribution.

### Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Run the Application](#run-the-application)
- [Generate a Question Paper using Postman](#generate-a-question-paper-using-postman)
- [Stop the Server](#stop-the-server)

### Prerequisites:

- Node.js installed on your machine.

### Setup:

1. **Clone the GitHub repository:**

    ```bash
    git clone https://github.com/imguptaharsh/Question-Paper-Generator.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Question-Paper-Generator
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

### Run the Application:

1. **Start the server:**

    ```bash
    npm run dev
    ```

    This will start the server, and you should see a message like "Server is running on port 3000."

### Generate a Question Paper using Postman:

1. **Open [Postman](https://www.postman.com/) or install it if you haven't.**

2. **Create a new request and set the request type to POST.**

3. **Set the request URL to:**

    ```http
    http://localhost:3000/api/questions/generate
    ```

4. **Set the request headers:**
   - Key: `Content-Type`, Value: `application/json`

5. **Set the request body to raw and provide the JSON payload:**

    ```json
    {
      "totalMarks": 100,
      "difficultyDistribution": [
        { "difficulty": "Easy", "percentage": 30 },
        { "difficulty": "Medium", "percentage": 50 },
        { "difficulty": "Hard", "percentage": 20 }
      ]
    } // or yoy can modify according to you
    ```

6. **Click the "Send" button to make the request.**

7. **View the response, which should be the generated question paper based on the specified criteria.**
   
8.<img width="1107" alt="Screenshot 2023-11-24 at 4 47 07 PM" src="https://github.com/imguptaharsh/Question-Paper-Generator/assets/111433732/9d26aec6-bf33-44bd-9943-be7656bf935c">

   
9. If you want to view the all questions without generating a paper, you can make a GET request to the following URL:

   ```http
   http://localhost:3000/api/questions

### Stop the Server:

**When you're done, stop the server by pressing `Ctrl + C` in the terminal where the server is running.**
