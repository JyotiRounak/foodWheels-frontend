import {useEffect, useState, useRef} from 'react'

const useIntersectionObserver = () => {
  const [intersectionEntry, setIntersectionEntry] = useState<IntersectionObserverEntry | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(!targetRef.current) return;
    const observer = new IntersectionObserver((entries)=>{
         if(entries[0].isIntersecting){
            setIntersectionEntry(entries[0]);
         }
    });
    observer.observe(targetRef.current);

    return () => observer.disconnect();
    
  }, []);
  return {targetRef, intersectionEntry};
}

export default useIntersectionObserver