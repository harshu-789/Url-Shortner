export const errorHandler = (err,req,res,next)=>{
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            message: err.message,
            success : false
        })
    }
    res.status(500).json({
        message : err.message || "Internal Server Error"
    })
}

export class AppError extends Error{
    statusCode;
    isOperational;
    constructor(message,statusCode = 500, isOperational = true){
        super(message)
        this.statusCode = statusCode
        this.isOperational = isOperational
        Error.captureStackTrace(this, this.constructor);
    }
}

export class NotFound extends AppError{
    constructor(message = "Resource not Found"){
        super(message, 404)
    }
}

export class conflictError extends AppError{
    constructor(message = "Conflict Occurred"){
        super(message,409)
    }
}
export class BadRequestError extends AppError {
    constructor(message = "Bad request") {
      super(message, 400);
    }
  }
  
  export class UnauthorizedError extends AppError {
    constructor(message = "Unauthorized") {
      super(message, 401);
    }
  }