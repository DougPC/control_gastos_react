import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados
}) => {
  return (
    <div className="Listado-gastos contenedor">
      <h2>{gastos.length ? "Gastos" : "No hay Gastos aun"}</h2>

      { filtro ? (
        gastosFiltrados.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
      ))
          ):(
            gastos.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
         ) ))}
    </div>
  )
}

export default ListadoGastos;
