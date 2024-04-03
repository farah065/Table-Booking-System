import { useState } from "react";
import ResForm from './ResForm';
import {ReactComponent as CheckmarkSVG} from '../SVGs/checkmark.svg';

function Reservation() {
    const [step, setStep] = useState(1);

    return (
        <section className="reservation">
            <header className="res-header-container">
                <div className="res-header">
                    <h1>Reserve a Table</h1>
                    <div className="steps">
                        <div id={step === 1 ? "on" : "complete"}>
                            {step <= 1 ? <h2>1</h2> : <CheckmarkSVG />}
                        </div>
                        <div id={step === 2 ? "on" : step > 2 ? "complete" : ""}>
                            {step <= 2 ? <h2>2</h2> : <CheckmarkSVG />}
                        </div>
                        <div id={step === 3 ? "on" : step > 2 ? "complete" : ""}>
                            {step <= 3 ? <h2>3</h2> : <CheckmarkSVG />}
                        </div>
                        <hr className="hr-bg" />
                        <hr className={step === 1 ? "step-1 hr-fill" : step === 2 ? "step-2 hr-fill" : "step-3 hr-fill"} />
                    </div>
                    <div className="step-names">
                        <p>Resrvation<br />Details</p>
                        <p>Personal<br />Info</p>
                        <p>Confirmation</p>
                    </div>
                </div>
            </header>
            <ResForm step={step} setStep={setStep} />
        </section>
    );
}

export default Reservation;