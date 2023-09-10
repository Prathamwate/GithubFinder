# GithubFinder
- GitHub Account Finder is a simple web application that allows users to search for GitHub accounts and view user profile information. Additionally, it provides the functionality to fetch and display the content of a specific file in a GitHub repository.

## Features

- Search for GitHub users by username and view their profile information.
- Fetch and display the content of a specific file in a GitHub repository.

## Usage

1. Enter a GitHub username in the "Enter GitHub username" input field.
2. Click the "Search" button to view the user's profile information.
3. To fetch and display the content of a specific file in a GitHub repository:
   - Enter the file path (e.g., `username/repo/path/to/file`) in the "Enter file path" input field.
   - Click the "Fetch File" button to retrieve and display the file's content.

## Technologies Used

- HTML
- CSS
- JavaScript
- GitHub API

### Functionalities Used

To complete this task, I used the following JavaScript functionalities:

1. **Fetching Data from an API**: I used the `fetch` function to make an HTTP request to the github API and retrieve the github account .

2. **DOM Manipulation**: I manipulated the DOM to display the retrieved account on the webpage. I used JavaScript to create and append HTML elements dynamically.

3. **Event Listeners**: I added event listeners to specific elements to handle user interactions.

## How I Accomplished the Task

Here is a brief overview of how I accomplished the task:

1. I used the github api to fetch account.

2. I used the `fetch` function to make a GET request to the github API using the provided URL.

3. Once I received the response from the API, I parsed the JSON data to extract the github account details.

4. I dynamically created HTML elements to display the github acccount information on the webpage, ensuring they are properly formatted and styled.

5. Finally, I hosted the project on a web server to provide a hosted link for submission.

## Getting Started

To get started with the GitHub Account Finder web application, follow these steps:

1. Clone the repository to your local machine:

bash
git clone https://github.com/Prathamwate/GithubFinder/

## demo 
- https://prathamwate.github.io/GithubFinder/

