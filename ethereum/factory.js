import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance= new web3.eth.Contract(
JSON.parse(campaignFactory.interface),
'0x4dbE539E0c54a971b26F61F8153e28618A0e9f9f'
);



export default instance;