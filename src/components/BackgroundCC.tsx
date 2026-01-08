import React from 'react';

const BackgroundCC: React.FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes subtleFlow {
            0% { background-position: 0% 0%; }
            50% { background-position: 10% 5%; }
            100% { background-position: 0% 0%; }
          }
          .animate-sunset-mesh {
            /* Color base predominante abajo: Rosa */
            background-color: #e1438d; 
            
            /* Colores arriba repartidos: Amarillo (Izquierda) y Rojo (Derecha) */
            background-image: 
              radial-gradient(at 0% 0%, #e73835 0px, transparent 40%),   /* Amarillo Top-Left */
              radial-gradient(at 100% 0%, #fccb34 0px, transparent 60%); /* Rojo Top-Right */
            
            background-size: 110% 110%;
            animation: subtleFlow 20s ease-in-out infinite;
          }
        `}
      </style>
      
      <div 
        className="fixed inset-0 w-full h-full -z-10 animate-sunset-mesh"
      />
    </>
  );
}

export default BackgroundCC;