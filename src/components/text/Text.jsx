import "./Text.scss"

export function Heading({ value = "Texto..." }) {
    return (
        <h1>{value}</h1>
    )
}

export function Subheading({ value = "Texto..." }) {
    return (
        <h2>{value}</h2>
    )
}

export function Text({ value = "Texto..." }) {
    return (
        <p>{value}</p>
    )
}