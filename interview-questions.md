# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: To create the association between the Cohort and the Students table we have to assign a foreign key to Students. The foreign key always goes on the belongs_to side, which in this case is Students. The name of the foreign key should be 'Cohort_id', and we cannot forget about creating a migration in order to have these changes occur. 

  Researched answer: A foreign key acts as cross reference between two tables by referencing the primary key of one of the tables in order to establish the relationship between them. In order to fix the issue described above, we must refer back to the Cohort model to obtain the foreign key from one of the columns and apply it to the data in the Students model. The name of the foreign key should be 'Cohort_id'. 



2. Which RESTful routes must always be passed params? Why?

  Your answer: The RESTful routes that must always be passed params are show, update, and delete. These routes require params because when used, they are designed to change a specific item in the database and the params is what tells it which item to change through an id value. 
  
  Researched answer: The routes that require params are indeed show, update, and delete because based on the information I could locate in our syllabus and notes, each of these routes require a param through an id that will help execute the route's action. The id is hte params to be passed to the url. 



3. Name three rails generator commands. What is created by each?

  Your answer: 
  1- rails generate model: creates the model;
  2- rails generate controller: creates the controller;
  3- (my all-time favorite command) rails generate resource creates the model, migration, routes, and controller. 

  Researched answer: Three rails generator commands are: 
  1- rails generate model: creates the model for our database; 
  2- rails generate controller: creates the controller to handle requests and retrieve the data from the model; 
  3- rails generate resource: with this one command, we can create a migration and a model, the controller, and the resource routes all at once. This is by far the most convenient and useful command we have learned about when working with business logic and data. 



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students          
Controller method: students#index; this will display the list of students. 
action: "POST"   location: /students       
Controller method: students#create; this will create a new student. 
action: "GET"    location: /students/new
Controller method: students#new; this will return a form for creating a new student. 
action: "GET"    location: /students/2  
Controller method: students#show; this will show a specific student with the assigned id of 2. 
action: "GET"    location: /students/2/edit    
Controller method: students#edit; this will return a form for editing the student. 
action: "PATCH"  location: /students/2      
Controller method: students#update; this will update a specific photo with the assigned id of 2. 
action: "DELETE" location: /students/2      
Controller method: students#destroy; this will destroy a specific photo with the assigned id of 2. 


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1- As a user, I can click on the 'Sign up to Start a New To-Do List' button.
2- As a user, I am now being prompted to sign up by inputting a username (must be at least 6 characters) and password (must be at least 6 characters, cannot be the same as username) to create a new account. 
3- As a user, I can click on the 'Begin New List' button, so I can start a new to-do list. 
4- As a user, I can click on the 'Add New Item to List' button, so I can add a new item to the list. 
5- As a user, I can now input a new item to the list by typing the description of my new item in the input box and then clicking on 'Add Item' to confirm the addition. 
6- As a user, I can see my new item on the list and can also see displayed on the page the options to 'Edit Item', 'Delete Item', 'Mark as Completed' and 'Add New Item to List'. 
7- As a user, I can see the option to 'Save List', 'Delete List' or 'Restart Current List'. 
8- As a user, I can add a second item to the list by clicking on the 'Add New Item to Current List' button. 
9- As a user, I can now input a new item to the list by typing the description of my new item in the input box and then clicking on 'Add Item' to confirm the addition.
10- As a user, I can see my two items on the list and can also see displayed on the page the options to individually 'Edit Item', 'Delete Item', 'Mark Item as Completed' and 'Add New Item to List'. 
