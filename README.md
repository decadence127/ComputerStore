# ComputerStore


**!!! For backend**
 **Controller** level:
  - responsible for:
    - parsing/mapping request params if needed
    - calling service method (more than one if needed)
    - handling errors from services to respond with proper http status
  - cannot do db operations (cannot use ORM entities)
- **Service** level:
  - responsible for:
    - business logic
    - operations with DB (using ORM entities)
    - throwing errors that will be catched by controller/middlewares to send http response
  - services shouldn't use `req`, `res`, params - this is responsibility of **controller** level to pass data from request object to service
