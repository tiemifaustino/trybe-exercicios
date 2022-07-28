import express, { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);
  
  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
      case 'ConflictError':
        res.status(409).json({ message });
        break;
    default:
      console.error(err);
      res.sendStatus(500);
    }
    
    next();
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });

  // Scripts 'package.json':
  // start: executa o build da aplicação e depois roda o arquivo compilado dentro da pasta dist;
// dev: executa a aplicação em modo de desenvolvimento utilizando o ts-node-dev;
// build: executa a compilação do projeto utilizando o TSC.