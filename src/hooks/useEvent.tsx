import { useCallback, useEffect, useRef } from 'react';
import { AnyFunction } from '../types/helpers';

export function useEvent<T extends AnyFunction>(callback: T): T {
  const ref = useRef<T>(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  return useCallback((...args: Parameters<T>): ReturnType<T> => {
    return ref.current(...args);
  }, []) as T;
}
