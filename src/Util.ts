/**
 * Type for what object is instances of
 */
export interface Type<T> {
  new(...args: any[]): T;
  singleton? : boolean
}

/**
 * Generic `ClassDecorator` type
 */
export type GenericClassDecorator<T> = (target: T) => void;

export type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;