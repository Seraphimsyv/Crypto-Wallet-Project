import React from 'react';
import { Button } from '../common/Button';
import { Logotype } from '../Logotype';
import './index.css';

type FooterNavLinkType = {
  value: string;
  url: string;
}

type FooterNavListType = Record<string, FooterNavLinkType[]>;

const links: FooterNavListType = {
  product: [
    { value: "Crypto Tax Calculator", url: '/' },
    { value: "Crypto Profit Calculator", url: '/' },
    { value: "Crypto Dashboard", url: '/' },
    { value: "How It Works!", url: '/' },
    { value: "Reviews", url: '/' },
    { value: "Pricing", url: '/' },
    { value: "Tax Professional Suite", url: '/' },
    { value: "Portfolio Tracker", url: '/' }
  ],
  company: [
    { value: 'About Us', url: '/' },
    { value: 'Partner With Us', url: '/' },
    { value: 'Careers', url: '/' },
    { value: 'Press', url: '/' },
    { value: 'Contact Us', url: '/' },
    { value: 'Compare', url: '/' },
    { value: 'Blog', url: '/' }
  ],
  support: [
    { value: 'FAQs', url: '/' },
    { value: 'Help Center', url: '/' },
    { value: 'Security', url: '/' },
  ],
  legal: [
    { value: 'Terms & Conditions', url: '/' },
    { value: 'Privacy Policy', url: '/' },
    { value: 'Disclaimer', url: '/' },
  ],
  userLinks: [
    { value: 'Crypto Tax Guides', url: '/' },
    { value: 'Affilate Program', url: '/' },
    { value: 'Find a Crypto Tax Expert', url: '/' },
    { value: 'Tools', url: '/' },
    { value: 'Login', url: '/' },
    { value: 'Annual Crypto Tax Report', url: '/' },
    { value: 'Country Site Map', url: '/' },
    { value: 'Agencles', url: '/' }
  ]
}

interface INavProps {
  title: string;
  links: INavLinkProps[];
}

interface INavLinkProps {
  value: string;
  url: string;
}

const NavLink: React.FC<INavLinkProps> = (props) => {
  return (
    <>
      <div
        className='app__footer_nav_link'
      >
        <a href="/">{props.value}</a>
      </div>
    </>
  )
}

const FacebookSVGIcon = () => (
  <>
    <svg className="footer-facebook" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.3327 13.4915C18.3327 18.7498 18.7493 18.3332 13.491 18.3332H12.4993C12.041 18.3332 11.666 17.9582 11.666 17.4998V12.6915C11.666 12.4665 11.8493 12.2748 12.0743 12.2748L13.541 12.2498C13.6577 12.2415 13.7577 12.1582 13.7827 12.0415L14.0743 10.4498C14.0993 10.2998 13.9827 10.1582 13.8243 10.1582L12.0493 10.1832C11.816 10.1832 11.6327 9.99983 11.6243 9.77483L11.591 7.73315C11.591 7.59982 11.6993 7.48316 11.841 7.48316L13.841 7.44982C13.9826 7.44982 14.091 7.3415 14.091 7.19983L14.0577 5.19981C14.0577 5.05815 13.9493 4.94982 13.8077 4.94982L11.5577 4.98316C10.1743 5.00816 9.07434 6.14149 9.09934 7.52482L9.14099 9.81649C9.14933 10.0498 8.966 10.2332 8.73267 10.2415L7.73266 10.2582C7.59099 10.2582 7.48267 10.3665 7.48267 10.5081L7.50767 12.0915C7.50767 12.2332 7.61599 12.3415 7.75766 12.3415L8.75767 12.3248C8.991 12.3248 9.17432 12.5082 9.18265 12.7332L9.25765 17.4832C9.26598 17.9498 8.89098 18.3332 8.42431 18.3332H6.50766C1.24932 18.3332 1.66599 18.7498 1.66599 13.4832V6.50815C1.66602 1.24982 1.24932 1.66649 6.50766 1.66649H13.491C18.7493 1.66649 18.3327 1.24982 18.3327 6.50815V13.4915Z"></path>
    </svg>
  </>
)

const InstagramSVGIcon = () => (
  <>
    <svg className="footer-linkedin" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.0585 1.66667H2.9418C2.78311 1.66446 2.62555 1.69354 2.4781 1.75224C2.33066 1.81093 2.19622 1.8981 2.08246 2.00876C1.96871 2.11942 1.87786 2.2514 1.81512 2.39717C1.75238 2.54295 1.71897 2.69965 1.7168 2.85833V17.1417C1.71897 17.3004 1.75238 17.4571 1.81512 17.6028C1.87786 17.7486 1.96871 17.8806 2.08246 17.9912C2.19622 18.1019 2.33066 18.1891 2.4781 18.2478C2.62555 18.3065 2.78311 18.3355 2.9418 18.3333H17.0585C17.2171 18.3355 17.3747 18.3065 17.5222 18.2478C17.6696 18.1891 17.804 18.1019 17.9178 17.9912C18.0316 17.8806 18.1224 17.7486 18.1851 17.6028C18.2479 17.4571 18.2813 17.3004 18.2835 17.1417V2.85833C18.2813 2.69965 18.2479 2.54295 18.1851 2.39717C18.1224 2.2514 18.0316 2.11942 17.9178 2.00876C17.804 1.8981 17.6696 1.81093 17.5222 1.75224C17.3747 1.69354 17.2171 1.66446 17.0585 1.66667ZM6.7418 15.6167H4.2418V8.11667H6.7418V15.6167ZM5.4918 7.06667C5.14702 7.06667 4.81635 6.9297 4.57256 6.6859C4.32876 6.44211 4.1918 6.11145 4.1918 5.76667C4.1918 5.42189 4.32876 5.09122 4.57256 4.84743C4.81635 4.60363 5.14702 4.46667 5.4918 4.46667C5.67488 4.4459 5.86028 4.46404 6.03586 4.5199C6.21144 4.57576 6.37325 4.66807 6.51068 4.7908C6.64811 4.91353 6.75807 5.0639 6.83336 5.23207C6.90864 5.40024 6.94756 5.58241 6.94756 5.76667C6.94756 5.95092 6.90864 6.13309 6.83336 6.30126C6.75807 6.46943 6.64811 6.61981 6.51068 6.74253C6.37325 6.86526 6.21144 6.95757 6.03586 7.01343C5.86028 7.06929 5.67488 7.08743 5.4918 7.06667ZM15.7585 15.6167H13.2585V11.5917C13.2585 10.5833 12.9001 9.925 11.9918 9.925C11.7107 9.92706 11.437 10.0152 11.2075 10.1776C10.978 10.3401 10.8039 10.5689 10.7085 10.8333C10.6433 11.0292 10.615 11.2355 10.6251 11.4417V15.6083H8.12513C8.12513 15.6083 8.12513 8.79167 8.12513 8.10833H10.6251V9.16667C10.8522 8.77259 11.1826 8.44793 11.5805 8.22767C11.9784 8.0074 12.4289 7.89988 12.8835 7.91667C14.5501 7.91667 15.7585 8.99167 15.7585 11.3V15.6167Z"></path>
    </svg>
  </>
)

const TwitterSVGIcon = () => (
  <>
    <svg className="footer-twitter" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.3332 4.83333C17.7068 5.10508 17.0444 5.28472 16.3665 5.36667C17.0816 4.93943 17.6176 4.26732 17.8748 3.475C17.2028 3.87505 16.4671 4.15691 15.6998 4.30833C15.187 3.75214 14.504 3.38191 13.758 3.25571C13.012 3.1295 12.2453 3.25446 11.578 3.61099C10.9107 3.96752 10.3806 4.53544 10.0709 5.2257C9.76113 5.91595 9.68925 6.68949 9.8665 7.425C8.50769 7.35627 7.17854 7.00246 5.96538 6.38655C4.75223 5.77064 3.68221 4.90641 2.82484 3.85C2.52412 4.37514 2.3661 4.96985 2.3665 5.575C2.36544 6.13698 2.50335 6.69051 2.76797 7.1863C3.03258 7.68209 3.41569 8.10476 3.88317 8.41667C3.33982 8.40188 2.80808 8.25608 2.33317 7.99167V8.03333C2.33724 8.82074 2.61317 9.58258 3.11427 10.19C3.61537 10.7974 4.31088 11.213 5.08317 11.3667C4.78588 11.4571 4.47723 11.5048 4.1665 11.5083C3.95141 11.5058 3.73686 11.4863 3.52484 11.45C3.74476 12.1273 4.17036 12.7193 4.7424 13.1435C5.31444 13.5676 6.00448 13.803 6.7165 13.8167C5.51417 14.7627 4.02974 15.279 2.49984 15.2833C2.22128 15.2842 1.94295 15.2675 1.6665 15.2333C3.22853 16.2419 5.04885 16.7773 6.90817 16.775C8.19125 16.7883 9.46412 16.5458 10.6524 16.0617C11.8408 15.5776 12.9207 14.8616 13.8292 13.9554C14.7377 13.0493 15.4565 11.9712 15.9436 10.7841C16.4308 9.59702 16.6765 8.32477 16.6665 7.04167C16.6665 6.9 16.6665 6.75 16.6665 6.6C17.3204 6.11234 17.8844 5.51452 18.3332 4.83333Z"></path>
    </svg>
  </>
)

const Nav: React.FC<INavProps> = (props) => {
  return (
    <>
      <div
        className='app__footer_nav_list'
      >
        <h3 className='app__foter_nav_list_title'>
          {props.title}
        </h3>
        {props.links.map((item, key) => (
          <NavLink key={key} value={item.value} url={item.url} />
        ))}
      </div>
    </>
  )
}

export const Footer = () => {
  return (
    <>
      <footer>
        {/* Navigations */}
        <div className="container md">
          <div
            id="app__footer_navigations"
          >
            {/* Short contact information */}
            <div
              id="app__footer_short_contact"
            >
              {/* Logotype and title */}
              <Logotype />

              <h5>Crypto taxes done in minutes</h5>

              <div id="app__footer_social">
                
                <a href='/'><FacebookSVGIcon /></a>
                <a href='/'><InstagramSVGIcon /></a>
                <a href='/'><TwitterSVGIcon /></a>

              </div>

              <div id="app__footer_lang">

                <select>
                  <option>United States</option>
                </select>

              </div>

            </div>

            <Nav
              title='Product'
              links={links.product}
            />

            <Nav
              title='Company'
              links={links.company}
            />

            <Nav
              title='Support'
              links={links.support}
            />

            <Nav
              title='Legal'
              links={links.legal}
            />

            <Nav
              title='User links'
              links={links.userLinks}
            />

          </div>
        </div>

        {/* Copyright & Contact block */}
        <div
          id="app__footer_copyright_contact_block"
        >
          <div
            className='container md'
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
          >

            {/* Copyright */}
            <div
              id="app__footer_copyright"
            >
              <span>© Copyright {new Date().getFullYear()} - Coin Ledger, Inc.</span>
            </div>

            {/* Contact */}
            <div
              id="app__footer_contact"
            >
              <Button
                size='sm'
                color='default'
                variant='outlined'
                id="app__footer_contact_btn"
              >
                Contact Support
              </Button>
            </div>

          </div>
        </div>

      </footer>
    </>
  )
}