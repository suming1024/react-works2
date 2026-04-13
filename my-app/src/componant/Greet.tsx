//props로 데이터 전달 -> {}:타입

export default function Greet({name}: {name: string}) {
  return (
    <div>
        <h3><strong>Hello, {name}</strong></h3>
    </div>
  )
}   
