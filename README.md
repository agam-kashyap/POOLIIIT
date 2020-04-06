# Introduction

## About POOLIIIT 
This is a pooling application, built to tackle the prices of cabs in Bangalore while travelling from the college to the airport. 

### Motivation
When it is time to go back home via flights, students start asking everywhere to find some people who can accompany them in a cab, because 
* pooling makes it cheaper to travel
* Bangalore traffic doesn't make travel by bus look appealing

### Current State and Further developments
Currently we have a frontend running on React while a backend running on Django, which have been connected using [Django REST API](https://www.django-rest-framework.org/).
The application performs the following tasks:
  1. Takes input from the user of their booking, preferred time to leave and the buffer time on that
  2. Matches the users, if their time-windows overlap. 
  3. If a match is found, the user gets a notification about that person, and their contact details.

In the frontend:
* what we have
  * Login Page
  * Register Page
  * Booking Page
  * Profile page which displays bookings
* what we need
  shall be added.

In the backend:
* what we have
  * Models are ready
  * Register/Login setup
* what we need
  * Solve the bug with Registering via the frontend
  * Functionality of searching a suitable match from the database
  
## Requirements
* Python3
* Pipenv
* Node Package Manager

## Getting Started
1. Clone the project to your machine
```shell
git clone "https://github.com/agam-kashyap/POOLIIIT.git"
```
2. Navigate into the directory
```shell
cd POOLIIIT/
```
3. Source the virtual environment
```shell
pipenv shell
```
4. Install the dependencies
```shell
pipenv install
```
5. Navigate to frontend directory
```shell
cd frontend
```
6. Install the dependencies
```shell
npm install
```

## Run the application
You will need two terminals pointed to the frontend and backend directories to start the servers for this application.

1. Run this command to start the backend server in the ```[backend]``` directory: ```[python manage.py runserver]``` (You have to run this command while you are sourced into the virtual environment)

2. To access the backend admin page,
```shell
user: admin
password: admin@1234
```

3. Run this command to start the frontend development server in the ```[frontend]``` directory: ```[yarn start]``` (This will start the frontend on the adddress [localhost:3000](http://localhost:3000))

## Built With

* [React](https://reactjs.org) - A progressive JavaScript framework.
* [Python](https://www.python.org/) - A programming language that lets you work quickly and integrate systems more effectively.
* [Django](http://djangoproject.org/) - A high-level Python Web framework that encourages rapid development and clean, pragmatic design.


