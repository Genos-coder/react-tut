function PropsInComponents(props) {
  //Implicit :- props in function parameter
  //Explicit :- {name, age} in function parameter
  // by default every react component takes props as parameter which is object down below
  const { name, age } = { ...props }; //here destructing is going on
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
}
export default PropsInComponents;
