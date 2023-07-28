import React, { useEffect, useRef } from "react";

interface Props {
    text: string | JSX.Element;
    externalElementClass?: string;
    elementWrapperClass?: string;
    internalElementClass?: string;
    elements: {
        text: string;
        link: string;
    }[];
    onChildClick: (value: string) => void;

}

export default function PopupMenu(props: Props) {


    const [isOpen, setOpen] = React.useState(false);
    const refMainDiv = useRef<HTMLDivElement>(null);
    const refInternalDiv = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: any) => {
        if(refInternalDiv.current && refInternalDiv.current.contains(event.target)) 
        return;
        if (refMainDiv.current && !refMainDiv.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <div className={`relative`}
            ref={refMainDiv}
            onClick={() => setOpen(!isOpen)}
        >
            <button className={`flex items-center justify-center ${props.externalElementClass}`}

            >
                {props.text}
            </button>

            <div className=
                {`absolute ${isOpen ? "block" : "none hidden"} top-10
                transition-all duration-1000 ease-in-out
                right-0 w-40 ${props.elementWrapperClass}}`}
                ref={refInternalDiv}
            >
                {

                    props.elements.map((element, index) => (
                        <button
                            key={index}
                            onClick={() => props.onChildClick(element.link)}
                            className={`w-full px-4 py-2 text-left ${props.internalElementClass}`}>
                            {element.text}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}
