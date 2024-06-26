
export default function Button({ stylo,click, children }) {
  return <button className={stylo ? stylo : "btn p-2 border border-2 shadow-sm" } onClick={click}>{children}</button>;
}