import {useState, useCallback} from 'react';

function useIconHover(initialSrc, initialClass, hoverSrc, hoverClass) {
  const [iconSrc, setSrc] = useState(initialSrc);
  const [iconClass, setClass] = useState(initialClass);

  const handlePointerOver = useCallback(() => {
    setSrc(hoverSrc);
    setClass(hoverClass);
  }, []);

  const handlePointerLeave = useCallback( () => {
    setSrc(initialSrc);
    setClass(initialClass);
  },[]);

  return [iconSrc, iconClass, handlePointerOver, handlePointerLeave];
}

export default useIconHover;
