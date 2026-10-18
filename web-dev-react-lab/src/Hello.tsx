type HelloProps = {
  name: string;
  children: React.ReactNode;
};

function Hello({ name, children }: HelloProps) {
  return (
    <>
      <h1>Hello {name} !</h1>
      <h2>{children}</h2>
    </>
  );
}

export default Hello;
