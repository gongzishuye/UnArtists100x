import twitter from './svgs/twitter.svg';
import discord from './svgs/discord.svg';
import wallet from './svgs/wallet.svg';
import './ButtonPanel.css';

function ButtonPanel() {
  return (
    <div className="ButtonPanel">
      <img src={twitter} />
      <img src={discord} />
      <img src={wallet} />
    </div>
  );
}

export default ButtonPanel;
