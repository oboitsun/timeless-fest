export default function Heading({ children, addClasses = "" }) {
  return <h3 className={`heading ${addClasses}`}>{children}</h3>;
}
