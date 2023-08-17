import images from "../constants/images.jsx";

export default [
  {
    id: 1,
    title: "My Portfolio",
    description: "Portfolio web page",
    projectLink: "https://mtorresweb.me",
    codeLink: "https://github.com/mtorresweb/personal-portfolio",
    img: images.portfolio,
    largeImg: images.largePortfolio,
    tags: ["Frontend", "All"],
    readme: `# Overview
------------
In this project, I have created a comprehensive Fullstack Developer portfolio utilizing cutting-edge technologies. The portfolio is developed using React, a popular JavaScript library for building user interfaces, and incorporates various libraries such as Sass for styling, react-router-dom for navigation, and framer-motion for adding dynamic animations. Additionally, I have implemented context management using the useContext hook provided by React.
    
## Key Features
    
1. **React Framework:** The portfolio is built upon the React framework, allowing for efficient and dynamic rendering of components. This ensures a seamless user experience and easy maintenance.
    
2. **Stylish UI with Sass:** The use of Sass (Syntactically Awesome Style Sheets) enables me to create a visually appealing and organized user interface. The power of Sass lies in its ability to enhance the CSS development process with features like variables, nesting, and mixins.
    
3. **Smooth Navigation:** Integration of the react-router-dom library facilitates smooth navigation between different sections of the portfolio. This ensures users can easily explore the various projects and information presented.
    
4. **Contextual Data Management:** The useContext hook is employed to efficiently manage and share data across various components. This ensures a consistent state management approach throughout the portfolio, resulting in improved performance and code organization.`,
  },
  {
    id: 2,
    title: "Chat App",
    description: "A real time chat application",
    projectLink: "https://chat.mtorresweb.me",
    codeLink: "https://github.com/mtorresweb/chatApp",
    img: images.chat,
    largeImg: images.largeChat,
    tags: ["Full Stack", "All"],
    readme: `## Overview

------------
    
In this project, I have developed a dynamic real-time chat application that leverages a comprehensive technology stack. The application is designed using React, Material UI, and styled components on the frontend, while the backend is powered by Express, MongoDB, and Socket.io. In addition, various libraries such as express-validator, helmet, express-rate-limit, and jsonwebtoken are employed to enhance security and functionality.
    
### Key Features
    
1. **Real-Time Communication:** The core functionality of the project is centered around real-time communication. Utilizing Socket.io, the application facilitates instant messaging and updates between users, creating a seamless and engaging chat experience.
    
2. **Responsive UI with Material UI:** The frontend is designed using Material UI components, ensuring a responsive and visually appealing user interface across different devices and screen sizes. This fosters an intuitive and comfortable user experience.
    
3. **Backend Powered by Express and MongoDB:** The backend is built using the Express framework, providing a robust foundation for handling API requests and routing. MongoDB is employed as the database of choice, enabling efficient data storage and retrieval for chat messages and user information.
    
4. **Enhanced Security with Middleware:** Libraries like express-validator and helmet are integrated to bolster security measures. express-validator ensures valid and sanitized data inputs, while helmet adds additional layers of protection to prevent common web vulnerabilities.
    
5. **Token-Based Authentication with jsonwebtoken:** User authentication is achieved through token-based authentication using jsonwebtoken. This ensures secure and authenticated access to the chat application, safeguarding user data and interactions.
    
## Testing the application
    
------------
    
#### To effectively test the application, follow these steps:
    
1. **Account Creation:** Click 'signUp' to create an account. Provide a fictional email address, password, and username.
[![Register](https://res.cloudinary.com/dojhj2erh/image/upload/v1691940262/portfolio/signUp_mdm1k9.png "Register")](https://res.cloudinary.com/dojhj2erh/image/upload/v1691940262/portfolio/signUp_mdm1k9.png "Register")
    
2. **Creating Another Account:** Open another browser tab or use a different device to repeat the account creation process as described above.
    
3. **User Search:** Access the 'SEARCH USER' feature to find users. Enter the username of the user you wish to chat with (ensure the email address matches the one you entered earlier). Finally, click the search button.
[![Search User](https://res.cloudinary.com/dojhj2erh/image/upload/v1691940262/portfolio/searchUser_rv4osn.png "Search User")](https://res.cloudinary.com/dojhj2erh/image/upload/v1691940262/portfolio/searchUser_rv4osn.png "Search User")
    
4. **Initiate Chat:** Click on the desired user to initiate a chat. Once the chat is established, you can begin your conversation.
[![Select User](https://res.cloudinary.com/dojhj2erh/image/upload/v1691940262/portfolio/selectUser_ak1fhp.png "Select User")](https://res.cloudinary.com/dojhj2erh/image/upload/v1691940262/portfolio/selectUser_ak1fhp.png "Select User")
[![Start Chating](https://res.cloudinary.com/dojhj2erh/image/upload/v1691940262/portfolio/startChating_cqknxc.png "Start Chating")](https://res.cloudinary.com/dojhj2erh/image/upload/v1691940262/portfolio/startChating_cqknxc.png "Start Chating")`,
  },
  {
    id: 3,
    title: "Tasks App",
    description: "App to manage projects and tasks",
    projectLink: "https://tasks.mtorresweb.me",
    codeLink: "https://github.com/mtorresweb/tasksApp",
    img: images.tasks,
    largeImg: images.largeTasks,
    tags: ["Full Stack", "All"],
    readme: `## Overview

------------
    
In this project, I've developed an intuitive application tailored for project and task management. Users have the ability to create projects, assign tasks to them, and modify project details as needed. The application's frontend is built using React, Redux Toolkit, and react-markdown for enhanced project descriptions. On the backend, Express and PostgreSQL are employed, and security features include token-based authentication using jsonwebtoken, helmet for enhanced security, and express rate limit for further protection.
    
### Key Features
    
1. **Project Creation and Task Assignment:** Users can create projects and assign tasks to them, fostering efficient organization and management. This feature enhances productivity and collaboration by providing a structured framework for task allocation.
    
2. **Dynamic Project Manipulation:** Projects are not static entities; they can be modified, added, or removed. This adaptability ensures that the application caters to evolving project requirements and maintains a relevant workspace.
    
3. **Enhanced Project Descriptions:** By incorporating react-markdown, project descriptions gain versatility and better readability. This improvement in documentation contributes to clearer project understanding and communication.
    
4. **Frontend with React and Redux Toolkit:** The frontend architecture leverages React for efficient component rendering and Redux Toolkit for streamlined state management. This combination ensures a responsive and seamless user experience.
    
5. **Backend using Express and PostgreSQL:** Express serves as the backend framework, managing API routes and requests, while PostgreSQL offers a robust database solution for storing project and task data securely and efficiently.
    
6. **Token-Based Authentication and Security:** Authentication is implemented using jsonwebtoken, providing secure and authenticated access. Security is further strengthened with helmet, a collection of middleware functions for Express applications. Additionally, express rate limit guards against potential malicious activities, ensuring application integrity.
    
## Testing the application
    
------------
    
To effectively test the application, follow these steps:
    
1. **Account Creation:** Click 'signUp' to create an account. Provide a fictional email address, password, and username.
    
2. **Project Manipulation:** You can add more projects by clicking the + icon. Each project is editable and removable. Clicking a project's name redirects you to its content, enabling task creation or removal within the project.`,
  },
  {
    id: 4,
    title: "Social Network",
    description: "Social network API",
    codeLink: "https://github.com/mtorresweb/socialNetwork",
    img: images.social,
    largeImg: images.social,
    tags: ["Backend", "All"],
    readme: `## Overview

------------
    
This project is a robust Social Network API built using the Express framework and MongoDB for data storage. Leveraging the power of various libraries, including Multer for image hosting, Express-Validator for input validation, and Helmet for enhanced security.
    
### Key Features:
    
1. **Express Framework:** The API harnesses the flexibility and performance of the Express.js framework, enabling efficient routing, middleware integration, and scalability.
    
2. **MongoDB & Mongoose:** Data storage and retrieval are managed through MongoDB, a dynamic NoSQL database, combined with Mongoose for elegant schema-based modeling and enhanced data management.
    
3. **Pagination with Mongoose:** The integration of Mongoose Pagination empowers seamless pagination of data, optimizing large dataset queries for a smoother user experience.
    
4. **Effortless Image Management:** Multer, a versatile library, is utilized to effortlessly handle image uploads and storage, enriching the visual content of both user profiles and posts.
    
5. **Token-based Authentication:** Secure your API endpoints using token-based authentication, providing a reliable method for user access control.
    
6. **Enhanced Security:** Helmet, a vital middleware, is employed to bolster security through proper HTTP headers configuration, safeguarding the API against potential vulnerabilities.`,
  },
];
