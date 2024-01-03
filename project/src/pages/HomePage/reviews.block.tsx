import React, { useState, useRef, useEffect, useCallback } from "react";

type ReviewType = {
  avatar: string;
  name: string;
  date: string;
  title: string;
  content: string;
}

const reviewsItems: ReviewType[] = [
  {
    avatar: '/assets/images/avatars/avatar-adam-zentini.png',
    name: 'Adam Zentini',
    date: 'Mar 6, 2021',
    title: 'Great! Product!',
    content: 'I went to Finance this year because a friend of mine recommended them. I was connected with a human who walked me right through everything. It is so nice knowing I won’t have to dread crypto taxes!.'
  },
  {
    avatar: '/assets/images/avatars/avatar-jay-man.png',
    name: 'Jay',
    date: 'Dec 12, 2022',
    title: 'I tried couple of other Crypto tax...',
    content: 'I tried couple of other Crypto tax platforms and I cansurely say that Finance was the best. They help you all the way through the end before you have to pay anything at all. They have great featureslike intuitive UI, ease of use /UX, fast app performance and great customer service agents like Aimee, who helped through the process and also checked things in the backend before a paid single penny. Kudos to the team. I will be a return customer. PS: No, they did not give me any discounts to post this. :)'
  },
  {
    avatar: '/assets/images/avatars/avatar-jason-man.png',
    name: 'Jason',
    date: 'Jun 15, 2021',
    title: 'I’m a noob to crypto - Love Finance',
    content: 'The customer service is insanely good. E-mails are typically answered within hours (sometimes faster) by folks that clearly understand crypto taxes and really seem to care. If only the exchanges were so good! Worth the $$$. Zero regret. '
  },
  {
    avatar: '/assets/images/avatars/avatar-robert-man.png',
    name: 'Robert',
    date: 'Jun 15, 2021',
    title: 'Great Product!',
    content: 'Easier than I thought it would be! Just knowing next year will be just as easy is comforting.'
  },
  {
    avatar: '/assets/images/avatars/avatar-kirk-b-man.png',
    name: 'Kirk B',
    date: 'Sep 6, 2021',
    title: 'Best few $$ I ever spent',
    content: 'I dragged my feet for months in completing my taxes, but now it’s Sept and the dreaded tax deadline is looming. I found Finance and in 15 min I was done. Unreal! Thank You!'
  },
  {
    avatar: '/assets/images/avatars/avatar-michelle-d-woman.png',
    name: 'Michelle D',
    date: 'Nov 25, 2021',
    title: 'Excellent product',
    content: 'Excellent product, excellent customer service — Jon helped me out back and forth multiple times over several days to help me solve a problem and answer questions about crypto taxes in general.'
  },
  {
    avatar: '/assets/images/avatars/avatar-reiko-rivera.png',
    name: 'Reiko Rivera',
    date: 'Mar 17, 2021',
    title: 'I can’t say enough good things',
    content: 'I was apprehensive about trying to file taxes with my limited knowledge on the topic. I tried for several hours to do it myself. With Finance, I was done with the filling process in 10 minutes.'
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
                        <li><img src="/assets/icons/system/rate-star.svg" alt="" /></li>
                        <li><img src="/assets/icons/system/rate-star.svg" alt="" /></li>
                        <li><img src="/assets/icons/system/rate-star.svg" alt="" /></li>
                        <li><img src="/assets/icons/system/rate-star.svg" alt="" /></li>
                        <li><img src="/assets/icons/system/rate-star.svg" alt="" /></li>
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