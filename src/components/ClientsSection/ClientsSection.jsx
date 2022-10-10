import './clients-section.css';
import clients from '../../api/clients.json'
import ClientBtnCard from '../ClientBtnCard/ClientBtnCard';


const ClientsSection = () => {
  return (
    <section className='clients-section'>
      {clients.map(client => <ClientBtnCard key={client.id} client={client}/>)}
    </section>
  );
};

export default ClientsSection;
