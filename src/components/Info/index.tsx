// Styles
import { Box } from './Utils/Box';
import './styles.css';

export const Info = () => {
  return (
    <div className="section-info">
      <div className="container-title__info">
        <p>Porque nós?</p>
        <h1>
          Olha o que podemos fazer por você<span>.</span>
        </h1>
      </div>
      <div className="container-icons__info">
        <Box icon="https://www.svgrepo.com/show/530583/network.svg" title="De Norte a Sul" paragraph="Já ajudamos profissionais do norte ao sul do Brasil conseguirem emprego com nossos serviços."/>

        <Box icon="https://www.svgrepo.com/show/530573/pie-chart.svg" title="Foque no restante" paragraph="Deixe-nos preparar seu Currículo enquanto você foca nas entrevistas e no seu Futuro Profissional!"/>

        <Box icon="https://www.svgrepo.com/show/530572/accelerate.svg" title="Diferencial" paragraph="Destaque-se na Multidão: Transforme seu Futuro Profissional com Nossa Apresentação Excepcional!"/>
      </div>
    </div>
  )
}