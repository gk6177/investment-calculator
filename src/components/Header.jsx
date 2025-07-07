import investmentImg from '../assets/investment-calculator-logo.png';

export default function Header() {
    return (
        <div className="center">
            <header id="header">
                <img src={investmentImg} alt="Investment Calculator Logo" />
                <h1>Investment Calculator</h1>
            </header>
        </div>
    )
}