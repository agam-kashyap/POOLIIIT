# Introduction

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
2. Run this command to start the frontend development server in the ```[frontend]``` directory: ```[yarn start]``` (This will start the frontend on the adddress [localhost:3000](http://localhost:3000))

## Built With

* [React](https://reactjs.org) - A progressive JavaScript framework.
* [Python](https://www.python.org/) - A programming language that lets you work quickly and integrate systems more effectively.
* [Django](http://djangoproject.org/) - A high-level Python Web framework that encourages rapid development and clean, pragmatic design.


