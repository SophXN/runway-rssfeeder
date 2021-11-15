Go/React App to ingest RSS Feed for app reviews

## Run the App

cd frontend
`yarn start`

cd backend
`go run main.go`

Create .env to connect to DB.

## Learning Process

# Setting up the server
1. Basic Setup (https://blog.logrocket.com/creating-a-web-server-with-golang/)
2. [ISSUE] Attempted to do TDD...many files were written and deleted...
3. [TODO] Connect XML helper to server route

## Frontend
1. Render XML in JS (https://www.youtube.com/watch?v=KIP1sU8x1g0&ab_channel=MrX) [removed connection]
2. Build out FE with React/TS skeleton
3. [TODO] Implement state for new reviews
4. [TODO] Connect to server (axios) and remove mockdata

# Database: MongoDB
1. Created cluster on atlas and connected to server
2. [BUG] Add all IP addresses to security on cluster 
3. [TODO] Store all XML and filter by date
