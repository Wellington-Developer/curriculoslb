// Styles
import './styles.css';

// Assets
import LogoImg1 from '../../assets/logos/logo-1.svg'
import LogoImg2 from '../../assets/logos/logo-2.svg'
import LogoImg3 from '../../assets/logos/logo-3.svg'

export const Clients = () => {
  return (
    <div className="section-clients">
      <div className="section-info__clients">
        <p>Onde nossos clientes<br></br> estão trabalhando:</p>
      </div>

      <div className="section-box__clients">
        <img src={LogoImg1} alt="logo" />
        <img src={LogoImg2} alt="logo" />
        <img src={LogoImg3} alt="logo" />
        <img src={LogoImg1} alt="logo" />
      </div>
    </div>
  )
}