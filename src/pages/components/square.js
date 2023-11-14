function Square({ children }) {
  return <div className="square">{children}</div>;
}

export default function Holder() {
  return (
    <Square>
      {/* <img
       className="avatar"
       src={'https://i.imgur.com/YfeOqp2s.jpg'}
       alt={'Katsuko Saruhashi'}
       width={300}
       height={300}
     /> */}
      <div>Hello React</div>
    </Square>
  );
}
