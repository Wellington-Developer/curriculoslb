// Styles
import './styles.css';

interface PropsBox {
  icon: string,
  title: string,
  paragraph: string,
}

export const Box = ({ icon, title, paragraph }: PropsBox) => {
  return (
    <div className="container-box">
      <img src={icon} />
      <h1>{ title }</h1>
      <p>{ paragraph }</p>
    </div>
  )
}