// export default function Player({player}: {player: {id: number, name: string, position: string}[]}) {
//   return (
//     <div>
//         <h3><strong>운동선수</strong></h3>
//         <ul>
//           {player.map((p) => (
//             <li key={p.id}>
//               <strong>{p.name}</strong> - {p.position}
//             </li>
//           ))}
//         </ul>
//     </div>
//   )
// }

type PlayerProps = {
  player: {
    id: number;
    name: string;
    position: string;   
  }
  clickHandler: () => void    
}

export default function Player({player, clickHandler}: PlayerProps) {
  return (
    <div>
        <h3><strong>운동선수</strong></h3>
        <ul>
          <li key={player.id}>
            <strong>{player.name}</strong> - {player.position}
          </li>
        </ul>
        <button onClick={clickHandler}>클릭</button>
    </div>
  )
}   