import express from 'express'
const app = express()

app.get("/", (req,res) => {
    res.send("hello world!")
})

app.listen(3004, ()=> {
    console.log("express server")
})

/*
- name: build imagerun: docker build . -t dummyapp/dummy-api:${{ github.sha }}

*/