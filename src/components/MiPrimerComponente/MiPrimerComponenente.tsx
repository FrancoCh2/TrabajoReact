import { FC } from "react";

interface IPropsMiPrimerComponenente{
    text:string;
    color:string;
    fontSize: number;
}

export const MiPrimerComponenente:FC<IPropsMiPrimerComponenente> = ({
    text,
    color,
    fontSize,
}) => {
  return <div style={{color: `${color}`,fontSize:`${fontSize}rem`}} ><p>{text}</p></div>
  
}
