const ErrorExample = () => {
  let count = 0;
  const handleClick = () => {
    count = count + 1;
    console.log(count);
  };
  return (
    <section>
      <h2>Counter</h2>
      <h1>{count}</h1>
      <button type="button" onClick={handleClick} className="btn">
        Increase
      </button>
    </section>
  );
};

export default ErrorExample;
