import { ChangeEvent } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = (...args: any[]) => any;

export type ChangeEventType = (value: ChangeEvent<HTMLSelectElement>) => void;
