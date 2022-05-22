//import Web3 from 'web3' 
import styles from './AunarFi.module.css';
import { useState } from "react";


const AunarFi = () => {
  // let web3
  // window.ethereum // a provider api that allows requests from metamask accounts

  const [ID, setID] = useState('');
  const [token, setToken] = useState('eth');
  const [amount, setAmount] = useState('');

  const [ID_2, setID_2] = useState('');
  const [token_2, setToken_2] = useState('poly');
  const [amount_2, setAmount_2] = useState('');

  return (
      <div className={styles.AunarFi}>
          <div className={styles.infonav}>
            {/*NAV BAR transparent & blur effect with  no border
            - Icon far left
            - Discord & Github
            - Connect button
            - Metamask - console.log address
            - "Tap Liquidity Button"

            */}
              <div>
                  <button onClick className={styles.connectButton}>Connect Wallet</button>
              </div>
          </div>
            <div className={styles.header}>
                <h1>AunarFi</h1>
            </div>
      
            <h2> Cross-Chain Liquidity Bridging </h2> 
            {/* Description of cross-chain liquidity protocol and how it works*/}
      <div className={styles.formContainer}>
            {/*toggle option for changing between fiat and token price

            
            */}
      <div className={styles.flexContainerSending}>
          <form>
            <label>Chain ID:</label>
            <input type="text" required value={ID}
            onChange={(e) => setID(e.target.value)}/>
            <label>Token:</label>
            <select value={token}
              onChange={(e) => setToken(e.target.value)}>
              <option value="eth">Ethereum</option>
              <option value="poly">Polygon</option>
            </select>
            <label>Amount:</label>
            <input type="text" required value={amount}
              onChange={(e) => setAmount(e.target.value)}
            ></input>
          </form>
      </div>
      <div className={styles.flexContainerReceiving}>
          <form>
            <label>Chain ID:</label>
            <input type="text" required value={ID_2}
              onChange={(e) => setID_2(e.target.value)}
            />
            <label>Token:</label>
            <select value={token_2}
              onChange={(e) => setToken_2(e.target.value)}>
              <option value="eth">Ethereum</option>
              <option value="poly">Polygon</option>
            </select>
            <label>Amount:</label>
            <input type="text" required value={amount_2}
              onChange={(e) => setAmount_2(e.target.value)}
            ></input>
          </form>
      </div>
        </div>
        <div>
          <button onClick className={styles.submitButton}>Tap Liquidity</button>
        </div>
      </div>

)}

export default AunarFi;
