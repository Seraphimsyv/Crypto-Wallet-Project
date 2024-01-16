import React, { useState, useRef, useEffect, useCallback } from "react";
import { CRYPTO_NAME } from "../../common/contants";

type ReviewType = {
  avatar: string;
  name: string;
  date: string;
  title: string;
  content: string;
}

const reviewsItems: ReviewType[] = [
  {
    avatar: './assets/images/avatars/avatar-adam-zentini.png',
    name: 'Adam Zentini',
    date: 'Mar 6, 2023',
    title: 'Great! Product!',
    content: `Professional cryptocurrency trading automation with ${CRYPTO_NAME}. Prompt connection and effective algorithms attract the attention of experienced traders.`
  },
  {
    avatar: './assets/images/avatars/avatar-jay-man.png',
    name: 'Jay',
    date: 'Dec 12, 2023',
    title: 'I tried couple of other Crypto tax...',
    content: `Reliability and stability in every trade. bot provides outstanding results, confirming its reputation in the world of crypto trading`
  },
  {
    avatar: './assets/images/avatars/avatar-jason-man.png',
    name: 'Jason',
    date: 'Jun 15, 2023',
    title: `I’m a noob to crypto - Love ${CRYPTO_NAME}`,
    content: `${CRYPTO_NAME} has become a reliable companion in the world of cryptocurrency investments. Fast integration and outstanding results make it the first choice.`
  },
  {
    avatar: './assets/images/avatars/avatar-robert-man.png',
    name: 'Robert',
    date: 'Jun 15, 2023',
    title: 'Great Product!',
    content: `"A bot that delivers results. Not only showcases fast connection but also a high level of efficiency, making it ideal for cryptocurrency trading.`
  },
  {
    avatar: './assets/images/avatars/avatar-kirk-b-man.png',
    name: 'Kirk B',
    date: 'Sep 6, 2023',
    title: 'Best few $$ I ever spent',
    content: `${CRYPTO_NAME} is not just a bot; it's a tool that genuinely brings profit. Modern strategies and quick implementation help achieve success.`
  },
  {
    avatar: './assets/images/avatars/avatar-michelle-d-woman.png',
    name: 'Michelle D',
    date: 'Nov 25, 2023',
    title: 'Excellent product',
    content: `A bot that finds its place in the world of cryptocurrency investments. Fast setup and impressive efficiency make it indispensable.`
  },
  {
    avatar: './assets/images/avatars/avatar-reiko-rivera.png',
    name: 'Reiko Rivera',
    date: 'Mar 17, 2023',
    title: 'I can’t say enough good things',
    content: `Professionalism in every trade! ${CRYPTO_NAME} stands out with its high performance, delivering reliable results in the world of cryptocurrencies.`
  }
];

export const ReviewsBlock = () => {
  /**
   * States
   */
  const [step, setStep] = useState<number>(0);
  const [itemWidth, setItemWidth] = useState<number>(0);
  /**
   * Refs
   */
  const wrapperRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  /**
   * Callbacks
   */
  const resizeCallback = useCallback(() => {

    if (!wrapperRef.current) return;

    if (!carouselRef.current) return;

    if (window.innerWidth > 1024) {      
      setItemWidth(wrapperRef.current.clientWidth / 3);
    } else if (window.innerWidth > 688 && window.innerWidth < 1023) {
      setItemWidth(wrapperRef.current.clientWidth / 2);
    } else {
      setItemWidth(wrapperRef.current.clientWidth);
    }
  }, []);
  /**
   * Effects
   */
  useEffect(() => {

    window.onresize = () => resizeCallback();

    resizeCallback();
  }, [resizeCallback])

  const handleClickLeft = () => {

    if (!carouselRef.current) return;

    if (window.innerWidth > 1024) {
      if (step === 0) return setStep(-3);
    } else if (window.innerWidth > 688 && window.innerWidth < 1023) {
      if (step === 0) return setStep(-4);
    } else if (window.innerWidth < 687) {
      if (step === 0) return setStep(-5);
    }

    setStep(step + 1);
  }

  const handleClickRight = () => {

    if (!carouselRef.current) return;

    if (window.innerWidth > 1024) {
      if (step === -3) return setStep(0);
    } else if (window.innerWidth > 688 && window.innerWidth < 1023) {
      if (step === -4) return setStep(0);
    } else if (window.innerWidth < 687) {
      if (step === -5) return setStep(0);
    }

    setStep(step - 1);
  }

  return (
    <>
      <div id="app__home_rewievs_block" className="container lg">

        <div id="app__home_reviews_header">

          <h1 id="title">What Our Customers Say</h1>

          <div id="controls">

            <button id="control" onClick={handleClickLeft}>
              <div id="arrow">
                <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.52729 12.1959C7.26694 12.4563 7.26694 12.8784 7.52729 13.1387C7.78764 13.3991 8.20975 13.3991 8.4701 13.1387L13.1368 8.47206C13.2033 8.40549 13.2529 8.32835 13.2854 8.24604C13.3119 8.1792 13.3279 8.10707 13.3313 8.03166C13.3356 7.93806 13.3204 7.84371 13.2854 7.75532C13.2529 7.67299 13.2034 7.59583 13.1368 7.52925L8.4701 2.86258C8.20975 2.60223 7.78764 2.60223 7.52729 2.86258C7.26694 3.12293 7.26694 3.54504 7.52729 3.80539L11.0559 7.33399L3.33202 7.33399C2.96383 7.33399 2.66536 7.63246 2.66536 8.00065C2.66536 8.36884 2.96383 8.66732 3.33202 8.66732H11.0559L7.52729 12.1959Z"></path>
                </svg>
              </div>
            </button>
            <button id="control" onClick={handleClickRight}>
              <div id="arrow">
                <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.52729 12.1959C7.26694 12.4563 7.26694 12.8784 7.52729 13.1387C7.78764 13.3991 8.20975 13.3991 8.4701 13.1387L13.1368 8.47206C13.2033 8.40549 13.2529 8.32835 13.2854 8.24604C13.3119 8.1792 13.3279 8.10707 13.3313 8.03166C13.3356 7.93806 13.3204 7.84371 13.2854 7.75532C13.2529 7.67299 13.2034 7.59583 13.1368 7.52925L8.4701 2.86258C8.20975 2.60223 7.78764 2.60223 7.52729 2.86258C7.26694 3.12293 7.26694 3.54504 7.52729 3.80539L11.0559 7.33399L3.33202 7.33399C2.96383 7.33399 2.66536 7.63246 2.66536 8.00065C2.66536 8.36884 2.96383 8.66732 3.33202 8.66732H11.0559L7.52729 12.1959Z"></path>
                </svg>
              </div>
            </button>

          </div>

        </div>

        <div ref={wrapperRef} id="app__home_reviews_items_wrapper">
          <div
            ref={carouselRef}
            id="app__home_reviews_items_carousel"
            style={{ transform: `translateX(${(step) * itemWidth}px)` }}
          >
            {reviewsItems.map((item, key) => (
              <div
                key={key}
                className="app__home_reviews_item_block"
                style={{ width: `${itemWidth}px` }}
              >
                <div
                  className="app__home_review_item"
                >
                  <div className="app__home_review_item_header">
                    <div className="app__home_review_item_profile">
                      <div className="app__home_review_item_avatar">
                        <img src={item.avatar} alt="" />
                      </div>
                      <div id="app__home_review_item_name">
                        <span id="name">{item.name}</span>
                        <span>US</span>
                      </div>
                    </div>
                    <div className="app__home_review_item_info">
                      <ul className="app__home_review_item_rate">
                        <li><img src="./assets/icons/system/rate-star.svg" alt="" /></li>
                        <li><img src="./assets/icons/system/rate-star.svg" alt="" /></li>
                        <li><img src="./assets/icons/system/rate-star.svg" alt="" /></li>
                        <li><img src="./assets/icons/system/rate-star.svg" alt="" /></li>
                        <li><img src="./assets/icons/system/rate-star.svg" alt="" /></li>
                      </ul>
                      <div id="app__home_review_item_date">
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="app__home_review_item_content">
                    <h1 id="title">{item.title}</h1>
                    <p id="content">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}