export declare global {
  namespace Express {
    interface Request {
      serviletoken?: {
        save?: boolean;
        id?: string;
        type?: string[];
      };
    }
  }
}
