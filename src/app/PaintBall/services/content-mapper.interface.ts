export interface ContentMapper<T> {
  map( json: any, className: string ): T;
}
