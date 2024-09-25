const Wrapper = ({ children }) => {
  return (
    <div className="max-w-screen-2xl mx-auto py-3 px-5 bg-muted">
      {children}
    </div>
  );
};

export default Wrapper;
