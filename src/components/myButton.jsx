export default function MyButton({onClick,count}) {
    return (
        <button onClick={onClick}>{count}</button>
    )
}
// export default function MyButton(props) {
//     return (
//         <button onClick={props.onClick}>{props.count}</button>
//     )
// }