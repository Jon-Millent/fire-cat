# fire-cat
koa-based upper frame encapsulation

## FireCat

## FireCatController
controller

```typescript
class MyController extends FireCatController {
  hello(ctx: Context) {
    ctx.body = "hello world"
  }
}
````

#### decorators

##### Request
##### `Request()`
The Request decorator merges user request parameters so you don't have to differentiate between get and post requests
```typescript
class MyController extends FireCatController {
  @Request()
  @Get('/hello')
  hello(ctx: Context) {
    // can get parameters
    console.log(ctx.response.body)
    ctx.body = "hello world"
  }
  
  @Request()
  @Post('/hello2')
  hello2(ctx: Context) {
    // can also get parameters
    console.log(ctx.response.body)
    ctx.body = "hello world"
  }
}
````

##### Get
##### `Get(path: string)`
The get decorator is used to register a get request to the route
```typescript
class MyController extends FireCatController {
  @Get('/hello')
  hello(ctx: Context) {
    ctx.body = "hello world"
  }
}
````

##### Post
##### `Post(path: string)`
The post decorator is used to register a post request to the route
```typescript
class MyController extends FireCatController {
  @Post('/hello')
  hello(ctx: Context) {
    ctx.body = "hello world"
  }
}
````

## FireCatRouter
routing control
```typescript
// initialize
const fireCatRouter = new FireCatRouter()
````

### controller
#### `controller(path: string, contol: FireCatController)`
Registering the controller to the specified route will automatically map the routes in the controller

```typescript
const fireCatRouter = new FireCatRouter()

fireCatRouter.controller('/book', new MyController())
````

### group
#### `group(path: string, wrap: (router: FireGroupRouter) => void)`
packet routing

```typescript
const fireCatRouter = new FireCatRouter()

fireCatRouter.group('/book', (book) => {
  book.get('/foo', ()=> {})
  book.get('/bar', ()=> {})
  book.controller('/book', new SomeContoler())
})
````