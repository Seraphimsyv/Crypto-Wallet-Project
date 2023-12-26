import './index.css';

export const Logotype = () => {
  return (
    <>
      <div id="logotype" onClick={() => window.location.href = '/'}>
        <img src={process.env.PUBLIC_URL + '/img/logotype.png'} alt="LOGOTYPE" />
        <h2>Finance</h2>
      </div>
    </>
  )
}