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
      - name: docker login
        env:
          DOCKER_USER: ${{ secrets.DOCKER_USERNAME }}
          DOCKER_PASSWORD: ${{ secrets.DOCKER_PASSWORD }}
        run: |
          docker login -u $DOCKER_USER -p $DOCKER_PASSWORD
        
      - name: build image
        run: docker build . -t dummyapp/dummy-api:${{ github.sha }}
*/