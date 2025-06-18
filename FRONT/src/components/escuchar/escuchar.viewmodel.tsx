const EscucharViewModel = () => {
  const handleEscuchar = (uuid: string) => {
    console.log("escuchar", uuid);
  };

  return { handleEscuchar };
};

export default EscucharViewModel;
