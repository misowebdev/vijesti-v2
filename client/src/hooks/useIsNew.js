import { useEffect, useState } from "react";

const min = 1000 * 60;
const alertTime = 5 * min;

function useIsNew(createdAt) {
  const [priority, setPriority] = useState(0);

  useEffect(() => {
    const currentTime = Date.now();
    const timeCreated = new Date(createdAt).getTime();

    let mainTimer;
    let secondaryTimer;

    if (currentTime - timeCreated < alertTime) {
      setPriority(1);
      mainTimer = setTimeout(() => {
        setPriority(2);
        secondaryTimer = setTimeout(() => {
          setPriority(0);
        }, alertTime);
      }, alertTime - (currentTime - timeCreated));
    }
    return () => {
      clearTimeout(mainTimer);
      clearTimeout(secondaryTimer);
    };
  }, [createdAt]);

  return priority;
}

export default useIsNew;
