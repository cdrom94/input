const Text = ({ input }) => {    
  return (
    <div className="text" aria-label="text">
      {input.toString()}
    </div>
  );
}

export default Text;