import React, { useState } from 'react';
import { CRYPTO_NAME } from '../../common/contants';

type SelectItemType = {
  img: string;
  title: string;
  content: string;
};

const selectionItems: SelectItemType[] = [
  {
    title: 'Connect Trading Bot',
    content: 'Import your crypto transactions from your wallets and exchanges.',
    img: './assets/icons/selection-first.svg',
  },
  {
    title: 'Select a trade category',
    content: 'Pick your trading tier—Standard to VIP—each level unlocks unique benefits to elevate your trading journey.',
    img: './assets/icons/selection-second.svg'
  },
  {
    title: 'Watch your deposit grow',
    content: 'Once you view your transaction history, download your tax report with the click of a button.',
    img: './assets/icons/selection-three.svg'
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
              <h3 id="subtitle">
                {CRYPTO_NAME} trading bot will automatically execute many trades without your direct involvement, making profits around the clock
              </h3>
            </div>

            <div>

            </div>

            {/* Selection */}
            <div id="app__home_how_it_works_selection">
              <SelectAccorion />
            </div>

            {/* Banner */}
            <div id="app__home_how_it_works_banner">
              <img src="/assets/images/banners/banner_how_it_works.svg" alt="" />
            </div>

        </div>

      </div>
    </>
  )
}