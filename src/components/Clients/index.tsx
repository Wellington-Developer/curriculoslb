// Styles
import './styles.css';

// Assets
import LogoImg1 from '../../assets/logos/logo-1.svg'

export const Clients = () => {
  return (
    <div className="section-clients">
      <div className="section-info__clients">
        <p>Onde nossos clientes<br></br> estão trabalhando:</p>
      </div>

      <div className="section-box__clients">
      <img src={LogoImg1} alt="logo" />
      <img src={LogoImg1} alt="logo" />
      <img src={LogoImg1} alt="logo" />
      <img src={LogoImg1} alt="logo" />
      </div>
    </div>
  )
}