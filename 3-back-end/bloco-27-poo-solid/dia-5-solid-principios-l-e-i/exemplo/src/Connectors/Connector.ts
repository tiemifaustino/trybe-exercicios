// Agora você já tem sua superclasse (neste caso uma interface) Connector, e como MySQLConnector e RedisConnector estendem (neste caso, implementam) Connector, você pode tranquilamente passar qualquer uma dessas duas onde Connector seja esperada.

// export interface Connector {
//   getCount(token: string): number | Promise<number>;

//   incrementCount(token: string): void;
  
//   closeConnection(): void;

//   clearCount(token: string): void;

//   firstCount(token: string): void;
// }

// Agora temos duas interfaces, sendo que as classe que implementam a ReadOnlyConnector não são obrigadas a implementar métodos de escrita, como incrementCount, clearCount e firstCount, respeitando assim o ISP.
export interface ReadOnlyConnector {
  getCount(token: string): number | Promise<number>;

  closeConnection(): void;
}

export interface Connector extends ReadOnlyConnector {
  incrementCount(token: string): void;

  clearCount(token: string): void;

  firstCount(token: string): void;
}

export interface ConnectorConstructor {
  host: string;
  port: number;
  database?: string;
  user?: string;
  password?: string;
}

export default Connector;
