import React from 'react';
import { Button } from '../../components/common/Button';

type PlatformType = {
  img: string;
  title: string;
}

const platformItems: PlatformType[] = [
  { img: '3 Commas.png', title: '3 Commas' },
  { img: 'Abra.png', title: 'Abra' },
  { img: 'Arbitrum Nova.svg', title: 'Arbitrum Nova' },
  { img: 'Arculus Wallet.png', title: 'Arculus Wallet' },
  { img: 'Astar.webp', title: 'Astar' },
  { img: 'Base.webp', title: 'Base' },
  { img: 'BC Vault Wallet.png', title: 'BC Vault Wallet' },
  { img: 'Binance DEX.png', title: 'Binance DEX' },
  { img: 'Binance Smart Contract.png', title: 'Binance Smart Contract' },
  { img: 'Binance.png', title: 'Binance' },
  { img: 'BitcoinExchange.png', title: 'Binance.com Exchange '},
  { img: 'Bithumb.png', title: 'Bithumb' },
  { img: 'Bitibu.png', title: 'Bitibu' },
  { img: 'Bitstamp.png', title: 'Bitstamp' },
  { img: 'Bittrex.png', title: 'Bittrex' },
  { img: 'BlockFI.png', title: 'BlockFI' },
  { img: 'Blockonomics.png', title: 'Blockonomics' },
  { img: 'BYDFI.png', title: 'BYDFI' },
  { img: 'Cardano.webp', title: 'Cardano' },
  { img: 'Cash App.png', title: 'Cash App' },
  { img: 'Celo.png', title: 'Celo' },
  { img: 'Celsius.png', title: 'Celsius' },
  { img: 'Cobo Wallet.png', title: 'Cobo Wallet' },
  { img: 'Coinbase.svg', title: 'Coinbase' },
  { img: 'Coinfloor.png', title: 'Coinfloor' },
  { img: 'CoinOne.png', title: 'CoinOne' },
  { img: 'CoinSpot.png', title: 'CoinSpot' },
  { img: 'CryptalDash Wallet.png', title: 'CryptalDash Wallet' },
  { img: 'EasyCrypto.webp', title: 'EasyCrypto' },
  { img: 'Ellipal Wallet.png', title: 'Ellipal Wallet' },
  { img: 'Ethereum.png', title: 'Ethereum' },
  { img: 'eToro Wallet.png', title: 'eToro Wallet' },
  { img: 'EXMO.svg', title: 'EXMO' },
  { img: 'Exodus.png', title: 'Exodus' },
  { img: 'FCoin.jpeg', title: 'FCoin' },
  { img: 'Frax Finance.png', title: 'Frax Finance' },
  { img: 'friend.tech.png', title: 'Friend Tech' },
  { img: 'GBX.png', title: 'GBX' },
  { img: 'Gnosis.png', title: 'Gnosis'},
  { img: 'Harmony.png', title: 'Harmony'},
  { img: 'HitBTC.png', title: 'HitBTC'},
  { img: 'Huobi Global.png', title: 'Huobi Global'},
  { img: 'Huobi Japan.png', title: 'Huobi Japan'},
  { img: 'JustSwap.png', title: 'JustSwap'},
  { img: 'KeyStone Wallet.png', title: 'KeyStone Wallet'},
  { img: 'Kraken.png', title: 'Kraken'},
  { img: 'KuCoin.png', title: 'KuCoin'},
  { img: 'Lace Wallet.png', title: 'Lace Wallet'},
  { img: 'Leather Wallet.png', title: 'Leather Wallet'},
  { img: 'Lido.png', title: 'Lido'},
  { img: 'Metal Pay.png', title: 'Metal Pay'},
  { img: 'Milkomeda C1.jpeg', title: 'Milkomeda C1'},
  { img: 'NGRAVE Wallet.png', title: 'NGRAVE Wallet'},
  { img: 'Oasis.webp', title: 'Oasis'},
  { img: 'OpenSea.png', title: 'OpenSea'},
  { img: 'Pancake Swap.png', title: 'Pancake Swap'},
  { img: 'Paxos.png', title: 'Paxos'},
  { img: 'Poloniex.png', title: 'Poloniex'},
  { img: 'Polygon.png', title: 'Polygon'},
  { img: 'QuickSwap.png', title: 'QuickSwap'},
  { img: 'Rainbow Wallet.png', title: 'Rainbow Wallet'},
  { img: 'Rarible.png', title: 'Rarible'},
  { img: 'Robinhood.png', title: 'Robinhood'},
  { img: 'Rocket Pool.jpeg', title: 'Rocket Pool'},
  { img: 'Slope Wallet.png', title: 'Slope Wallet'},
  { img: 'Solana.png', title: 'Solana'},
  { img: 'Stacks.webp', title: 'Stacks'},
  { img: 'Swan Bitcoin.png', title: 'Swan Bitcoin'},
  { img: 'SwissBorg.png', title: 'SwissBorg'},
  { img: 'TAGZ.png', title: 'TAGZ'},
  { img: 'Tangem Wallet.png', title: 'Tangem Wallet'},
  { img: 'Uniswap.png', title: 'Uniswap'},
  { img: 'Uphold.png', title: 'Uphold'},
  { img: 'Vite Wallet.png', title: 'Vite Wallet'},
  { img: 'Voyager.png', title: 'Voyager'},
  { img: 'ZenGo.png', title: 'ZenGo'},
  { img: 'Zora Network.png', title: 'Zora Network'}
]

interface ISliderProps {
  side: 'left' | 'right';
}

const Slider: React.FC<ISliderProps> = (props) => {
  const { side } = props;

  return (
    <>
      <div className="app__home_platform_slider_wrapper">
        <div className={`app__home_platform_slider_carousel ${side}`}>

          {platformItems.map((item, key) => (
            <div
              key={key}
              className='app__home_platform_slider_block'
            >
              <div className='app__home_platform_slider_item'>
                <span id="icon">
                  <img src={`/assets/images/platforms/${item.img}`} alt="" />
                </span>
                <span id="title">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
          {platformItems.map((item, key) => (
            <div
              key={key}
              className='app__home_platform_slider_block'
            >
              <div className='app__home_platform_slider_item'>
                <span id="icon">
                  <img src={`/assets/images/platforms/${item.img}`} alt="" />
                </span>
                <span id="title">
                  {item.title}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export const PlatformSliders = () => {
  return (
    <>
      <div id="app__home_platform_sliders">

        <div id="app__home_platform_header">
          <h1 id="title">Import From Any Platform</h1>
          <span>
            <Button
              size="md"
              variant='filled'
              color='info'
            >
              View All Integrations
            </Button>
          </span>
        </div>

        <div id="app__home_platform_sliders_content">
          <Slider side='right' />
          <Slider side='left' />
        </div>

      </div>
    </>
  )
}