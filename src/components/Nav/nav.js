import IconArrow from "../../assets/IconArrow.png";

const Nav = () => {
  const navArray = [
    "Bajo demanda / 30% de descuento",
    "Ships in 48h",
    "Top ventas",
    "Próxima temporada",
    "Get 20€ off",
  ];
  return (
    <div className="flex flex-wrap absolute justify-center w-full m-2 uppercase text-base">
      {navArray &&
        navArray.map((category) => {
          return (
            <div class="p-3 ">
              <span class="opacity-80 hover:text-brown">{category}</span>
            </div>
          );
        })}
      <div class="flex p-2 mt-1 ">
        <div>
          <span class="opacity-80 hover:text-brown">Tienda </span>
          <img
            class="w-3 h-3 opacity-80 ml-20 -mt-4 opacity-70"
            src={IconArrow}
          />
        </div>
        <div class="ml-3">
          <span class="opacity-80 hover:text-brown"> Marcas</span>
          <img
            class="w-3 h-3 opacity-80 ml-20 -mt-4 opacity-70"
            src={IconArrow}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
