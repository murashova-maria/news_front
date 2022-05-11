import { useEffect, useRef } from 'react';

export function useInterval(callback: VoidFunction, delay: number) {
    const savedCallback = useRef();

    useEffect(() => {
        // @ts-ignore
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            // @ts-ignore
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}