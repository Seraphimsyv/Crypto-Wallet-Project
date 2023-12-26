import { useState } from 'react';

type SelectItemType = {
  img: string;
  title: string;
  content: string;
};

const selectionItems: SelectItemType[] = [
  {
    title: 'Import Transactions',
    content: 'Import your crypto transactions from your wallets and exchanges.',
    img: '/img/selection-first.svg',
  },
  {
    title: 'Preview Your Report',
    content: 'Watch the platform calculate your gains and losses for all your transactions — trading, staking, NFTs, or anything else!',
    img: '/img/selection-second.svg'
  },
  {
    title: 'Generate Your Tax Report',
    content: 'Once you view your transaction history, download your tax report with the click of a button.',
    img: '/img/selection-three.svg'
  }
];

const SelectAccorion = () => {
  const [selected, setSelected] = useState<number>(1);
  return (
    <>
      <div id="app__home_how_it_works_selection">
        {selectionItems.map((item, key) => (
          <div
            key={key}
            className={`app__home_how_it_works_selection_item ${selected === key ? 'active' : ''}`}
            onClick={() => {
              if (key !== selected) setSelected(key)
            }}
          >
            
            {/* Icon */}
            <div className="app__home_how_it_works_selection_item_icon">
              <img src={item.img} alt="" />
            </div>

            {/* Content */}
            <div className="app__home_how_it_works_selection_item_content">
              <h1 id="title">{item.title}</h1>
              <p id="content">{item.content}</p>
            </div>

          </div>
        ))}
      </div>
    </>
  )
}

export const HowItWorksBanner = () => {
  return (
    <>
      <div id="app__home_how_it_works">

        <div className="container lg">

            {/* Content */}
            <div id="app__home_how_it_works_content">
              <h2 id="title">How it works</h2>
              <h3 id="subtitle">With Finance, you can calculate your crypto taxes in 3 easy steps</h3>
            </div>

            <div>

            </div>

            {/* Selection */}
            <div id="app__home_how_it_works_selection">
              <SelectAccorion />
            </div>

            {/* Banner */}
            <div id="app__home_how_it_works_banner">
              <img src="/img/banner_how_it_works.svg" alt="" />
            </div>

        </div>

      </div>
    </>
  )
}