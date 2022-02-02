const List = ({ input }) => {    
  return (
    <div className="list" role="list">
      {input.map((element, i) => <div key={"element" + i} className="list-item" role="listitem" >{element}</div>)}
    </div>
  );
}

export default List;