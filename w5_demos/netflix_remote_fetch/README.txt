# Netflix JSON Server Demo

This folder contains a `db.json` file for use with `json-server`.

## Setup Instructions

1. Install `json-server` if you haven't:
   npm install -g json-server

2. Navigate to this folder:
   cd path/to/this/folder

3. Run the local server:
   json-server --watch db.json --port 3001

4. Open your browser and go to:
   http://localhost:3001/shows

Now you can use this URL in your frontend JavaScript fetch() calls:
   fetch("http://localhost:3001/shows")