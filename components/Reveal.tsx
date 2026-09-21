"use client";
import { motion } from "framer-motion";
export function Reveal({children,className="",delay=0}:{children:React.ReactNode;className?:string;delay?:number}){return <motion.div className={className} initial={{opacity:0,y:38,filter:"blur(8px)"}} whileInView={{opacity:1,y:0,filter:"blur(0px)"}} viewport={{once:true,amount:.2}} transition={{duration:.8,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}
export function Label({children}:{children:React.ReactNode}){return <div className="label"><span/> {children}</div>}
