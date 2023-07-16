import { ISvgComponent } from './ISvgComponent'


export default function SearchIcon(props: ISvgComponent) {


    return (
        <svg
            className={props.className}
            height={props.height}
            width={props.width}
            fill={props.fill}
            xmlns = "http://www.w3.org/2000/svg"
            viewBox = "0 0 256 256" 
    >

        <path
            className={ props.subclass }
            id = "Circle"
            d = "M169.8,30.66C135.21-4.1,77.49-7.6,38.66,24.93s-45,89.79-18,129.09c32,46.62,102.42,56.14,145.49,17.22C206.33,134.9,208.3,69.36,169.8,30.66ZM143.16,155.25c-31.4,24.41-78.64,13.12-98.77-19.26-17-27.44-12.95-67.33,15.17-88.93s68-15.28,90.16,8.6C175.47,83.4,174.16,131.16,143.16,155.25Z" />

        <polygon
            className={ props.subclass }
            id = "Line"
            points = "155.05 175.34 228.82 249.93 248.9 229.03 176.36 154.43 155.05 175.34"
        />
        </svg >
    )

}