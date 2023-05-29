import { useEffect, useState } from "react";
import  {  CircularProgressbar,buildStyles }  from  'react-circular-progressbar' ; 
import  'react-circular-progressbar/dist/styles.css' ;

const ControlPresupuesto = ({gastos, presupuesto,setGastos,setPresupuesto,setIsValidPresupuesto }) => {
 
  
const [porcentaje,setPorcentaje]= useState(0) 
const [disponible,setDisponible]= useState(0)
const [gastado,setGastado]=useState(0)

 useEffect(()=>{
  const totalGastado = gastos.reduce((total,gasto)=> gasto.cantidad + total, 0);
  const totalDisponible = presupuesto -totalGastado
  
  //Calcular el porcentaje gastado
  const nuevoPorcentaje =(((presupuesto-totalDisponible)/presupuesto)*100).toFixed(2);
 

  setDisponible(totalDisponible)
  setGastado(totalGastado)
  
 setTimeout(() => {
  setPorcentaje(nuevoPorcentaje)
 }, 1000);

},[gastos])
 
 
  const formatearCantidad = (cantidad) => {
     return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(cantidad);
  };

 const handleResetApp =()=>{
  const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?')
  if (resultado){
 setGastos([])
 setPresupuesto(0)
 setIsValidPresupuesto(false)
  }
 }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
       <CircularProgressbar
       styles={buildStyles({
        pathColor:'#3b82f6',
        trailColor: '#f5f5f5',
        textColor:'#3b82f6'
       })}
       value={porcentaje}
       text={`${porcentaje}% Gastado`}
       />
      </div>

      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Reset App
        </button>
        <p>
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Gastado: </span> {formatearCantidad(gastado)}
        </p>
        <p>
          <span>Disponible: </span> {formatearCantidad(disponible)}
        </p>
       
      </div>
    </div>
  );
};

export default ControlPresupuesto;
