# What is it?

This middleware will successfully throw 404 error instead of crashing the server when invalid mongodb objectId is passed in param.

### Installation

`npm install mongoose-objectid-middleware`


## Usages
Your `App.js`
```
var objectIdMiddleware = require("mongoose-objectid-middleware");

app.get("/post/:post_id",objectIdMiddleware,appController.getPost);
app.get("/post/:post_id/comment/:comment_id",objectIdMiddleware,appController.getComment);

app.listen(8080);
```