import Link from "next/link";
import { ReactNode } from "react";
import "./style.css"

interface CardProps {
    link: string;
    imgsrc: string;
    imgalt: string;
    desc: ReactNode;
}

export default function Card(props: CardProps) {
    return (
        <Link href={props.link}>
            <div className="card">
                <img src={props.imgsrc} alt={props.imgalt} />
                <div >{props.desc}</div>
            </div>
        </Link>
    );
}
