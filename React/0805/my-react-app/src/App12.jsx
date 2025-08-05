function A(props) {
  console.log(props);
  return (
    <>
      <div>hello world</div>
      <div>{props.children}</div>
    </>
  );
}

function App() {
  return (
    <>
      <A>
        <div>hello</div>
        <div>world</div>
      </A>
    </>
  );
}

export default App;
