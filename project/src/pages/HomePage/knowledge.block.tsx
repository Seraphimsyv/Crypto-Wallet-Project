import React from 'react';
import { Button } from "../../components/common/Button";

type KnowledgeType = {
  title: string;
  content: string;
  img: string;
  url: string;
}

const knowledgeItems: KnowledgeType[] = [
  {
    title: "The Ultimate Crypto Tax Guide (2023)",
    content: 'This guide breaks down everything you need to know about cryptocurrency taxes, from the high level tax implications to the actual crypto tax forms you need to fill out.',
    img: '/assets/images/knowledge_image_one.png',
    url: 'Crypto taxes overview'
  },
  {
    title: 'Crypto Tax Rates 2023: Complete Breakdown',
    content: "Here’s how much tax you'll be paying on your income from Bitcoin, Ethereum, and other cryptocurrencies.",
    img: '/assets/images/knowledge_image_two.png',
    url: 'Crypto tax rates'
  },
  {
    title: 'How Crypto Losses Can Reduce Your Taxes',
    content: 'Crypto and bitcoin losses need to be reported on your taxes. However, they can also save you money.',
    img: '/assets/images/knowledge_image_three.jpg',
    url: 'How crypto losses lower your taxes'
  }
]

export const KnowledgeBlock = () => {
  return (
    <>
      <div id="app__home_knowledge_block" className="container lg">

        <h3 id="subtitle">knowledge base</h3>
        <h1 id="title">Demystify Crypto Taxes</h1>

        <div id="app__home_knowledge_items">

          {knowledgeItems.map((item, key) => (
            <div key={key} className="app__home_knowledge_item">

              <div>
                <img src={item.img} alt="" />

                <h1 id="title">{item.title}</h1>

                <p id="content">{item.content}</p>
              </div>

              <Button
                size="sm"
                color='info'
                variant='text'
              >
                {item.url}
                <div id="arrow">
                  <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.52729 12.1959C7.26694 12.4563 7.26694 12.8784 7.52729 13.1387C7.78764 13.3991 8.20975 13.3991 8.4701 13.1387L13.1368 8.47206C13.2033 8.40549 13.2529 8.32835 13.2854 8.24604C13.3119 8.1792 13.3279 8.10707 13.3313 8.03166C13.3356 7.93806 13.3204 7.84371 13.2854 7.75532C13.2529 7.67299 13.2034 7.59583 13.1368 7.52925L8.4701 2.86258C8.20975 2.60223 7.78764 2.60223 7.52729 2.86258C7.26694 3.12293 7.26694 3.54504 7.52729 3.80539L11.0559 7.33399L3.33202 7.33399C2.96383 7.33399 2.66536 7.63246 2.66536 8.00065C2.66536 8.36884 2.96383 8.66732 3.33202 8.66732H11.0559L7.52729 12.1959Z"></path>
                  </svg>
                </div>
              </Button>

            </div>
          ))}

        </div>

      </div>
    </>
  )
}