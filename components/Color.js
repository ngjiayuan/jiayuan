export default function Color({ children, color }) {
  const getSettings = () => (
    color === "red"
    ? "bg-red font-normal"
    : color === "orange"
    ? "bg-orange font-normal"
    : color === "yellow"
    ? "bg-yellow font-normal"
    : "bg-green font-normal"
  )

  return (
    <b className={getSettings()}>{children}</b>
  )
}