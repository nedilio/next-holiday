import { useEffect, useState } from "react";

const useToday = () => {
  const [today, setToday] = useState(new Date());
  useEffect(() => {
    const ms = today.getTime() + 1000;
    setTimeout(() => {
      setToday(new Date(ms));
    }, 1000);
    return () => clearInterval(ms);
  }, [today]);
  return { today };
};

export default useToday;
