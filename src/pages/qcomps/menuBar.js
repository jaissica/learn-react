export default function MenuBar() {
  return (
    <div>
      <AButton id={1} color={"red"} size={"16px"}>
        Button 1
      </AButton>
      <AButton id={2} color={"green"} size={"36px"}>
        Button 2
      </AButton>
    </div>
  );
}

function AButton({ id, color, size, children }) {
  return (
    <button
      id={`${id}`}
      onClick={() => {
        document.getElementById(`${id}`).style.backgroundColor = color;
        document.getElementById(`${id}`).style.fontSize = size;
      }}
    >
      {children}
    </button>
  );
}
