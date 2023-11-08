import "./Text.scss"

export function Heading({ value }) {
    return (
        <h1>{value}</h1>
    )
}

export function Subheading({ value }) {
    return (
        <h2>{value}</h2>
    )
}

export function Text({ value }) {
    return (
        <p>{value}</p>
    )
}