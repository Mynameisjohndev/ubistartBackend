import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

function tokenAuthentication( 
  request: Request,
  response: Response,
  next: NextFunction){

    const authHeader = request.headers.authorization;

    if (!authHeader) {
      return response.status(401).send({ error: "Token is missing" });
    }
    
    const [, token] = authHeader.split(" ");

    const JWT_ACCESS_TOKEN = `${process.env.JWT_TOKEN}`;
    
    try {
      const valid = verify(
          token,
          JWT_ACCESS_TOKEN
      );
        if(valid) return next();
  } catch (error) {
      return response.status(401).send({error: "Invalid token"});
  }
} 

export { tokenAuthentication };