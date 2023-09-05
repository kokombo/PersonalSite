const Copyright = () => {
  const date = new Date().getFullYear();

  return (
    <div className="flex items-center gap-1 text-gray text-sm font-NeutonRegular">
      &#169; <p> {date} </p>
    </div>
  );
};

export default Copyright;
