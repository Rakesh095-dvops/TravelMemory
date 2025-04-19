//export const baseUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

export const baseUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3002"

//added only for the testing purpose only 
fetch(`${baseUrl}/trip`)
.then(res => res.json())
.then(data => console.log(data));