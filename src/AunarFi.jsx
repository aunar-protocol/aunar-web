//import Web3 from 'web3'
import styles from './AunarFi.module.css'
import { useState } from 'react'
// import Web3 from 'web3'

export default function AunarFi() {
	// let web3
	// window.ethereum // a provider api that allows requests from metamask accounts

	const [ID, setID] = useState('')
	const [token, setToken] = useState('eth')
	const [amount, setAmount] = useState('')

	const [ID_2, setID_2] = useState('')
	const [token_2, setToken_2] = useState('poly')
	const [amount_2, setAmount_2] = useState('')

	const [web3, setWeb3] = useState()

	const handleConnectWallet = () => {
		// if (window.ethereum == undefined)
		// 	window.ethereum.enable().then(() => console.log('connected'))
		// setWeb3(new Web3(window.ethereum))
	}

	return (
		<div className={styles.AunarFi}>
			<div className={styles.navbar}>
			<header className={styles.infonav}>
				{web3 ? null : (
					<button
						onClick={handleConnectWallet}
						className={styles.button}
					>
						Connect Wallet
					</button>
				)}
			</header>
			</div>
			<main className={styles.main}>
				<div className={styles.header}>
					<h1>AunarFi</h1>
					<h2> Cross-Chain Liquidity Bridging </h2>
				</div>
				<div className={styles.formContainer}>
					<form className={styles.form}>
						<label>Chain ID:</label>
						<input
							type="text"
							required
							value={ID}
							onChange={e => setID(e.target.value)}
						/>
						<label>Token:</label>
						<select
							value={token}
							onChange={e => setToken(e.target.value)}
						>
							<option value="eth">Ethereum</option>
							<option value="poly">Polygon</option>
						</select>
						<label>Amount:</label>
						<input
							type="text"
							required
							value={amount}
							onChange={e => setAmount(e.target.value)}
						></input>
					</form>
					<form className={styles.form}>
						<label>Chain ID:</label>
						<input
							type="text"
							required
							value={ID_2}
							onChange={e => setID_2(e.target.value)}
						/>
						<label>Token:</label>
						<select
							value={token_2}
							onChange={e => setToken_2(e.target.value)}
						>
							<option value="eth">Ethereum</option>
							<option value="poly">Polygon</option>
						</select>
						<label>Amount:</label>
						<input
							type="text"
							required
							value={amount_2}
							onChange={e => setAmount_2(e.target.value)}
						></input>
					</form>
				</div>
				<button onClick className={styles.button}>
					Tap Liquidity
				</button>
			</main>
		</div>
	)
}

