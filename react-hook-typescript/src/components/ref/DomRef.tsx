import { useRef, useEffect } from "react"

export const DomRef = ()=>{

    const inputRef = useRef<HTMLInputElement|null>(null);

    useEffect(() => {
        setTimeout(()=>{
            inputRef.current?.focus();
        },5000)
},[])

return (
    <div>
    <input type="text" ref={inputRef}/>
    </div>
)
} 