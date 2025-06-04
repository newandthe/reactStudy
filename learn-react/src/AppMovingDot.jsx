import { useState } from 'react';

export default function AppMovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          /*
          * position.x = e.clientX
          * 위와 같이 값을 수정하는게 아닌 setter로 새로운 객체를 생성해서 반영
          * */

          x: e.clientX,
          y: e.clientY
        })
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  )
}