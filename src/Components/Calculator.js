import React, { useState } from "react";

export function Calculator() {
    const [price, setPrice] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [loanTerm, setLoanTerm] = useState(0);
    const [downPayment, setDownPayment] = useState(0);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);

    const calculate = () => {
        if (price && interestRate && loanTerm) {
            const loanAmount = price - downPayment;
            const monthlyRate = interestRate / 100 / 12;
            const numberOfPayments = loanTerm * 12;
            const monthlyPayment = loanAmount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
            const totalPayment = monthlyPayment * numberOfPayments;
            const totalInterest = totalPayment - loanAmount;

            setMonthlyPayment(monthlyPayment.toFixed(2));
            setTotalInterest(totalInterest.toFixed(2));
            setTotalPayment(totalPayment.toFixed(2));
        } else {
            setMonthlyPayment(0);
            setTotalInterest(0);
            setTotalPayment(0);
        }
    };

    return (
        <section className="my-5 p-4">
            <div className="container border border-16 ">
                <div className="row">
                    <div className="col-12 col-md-8 py-5 px-5">
                        <h1 className="dm-sans-bold text-video-slider1" data-aos="fade-up" data-aos-delay="200">Auto Loan Calculator</h1>
                        <p className="ft-15" data-aos="fade-up" data-aos-delay="300">
                            Use our loan calculator to calculate payments over the life of your loan. Enter your information to
                            see how much your monthly payments could be. You can adjust length of loan, down payment and
                            interest rate to see how those changes raise or lower your payments.
                        </p>
                        <div className="row">
                            <div className="col-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="form-floating mb-3">
                                    <input
                                        type="number"
                                        className="form-control border-16"
                                        id="floatingInput1"
                                        value={price}
                                        onChange={(e) => setPrice(Number(e.target.value))}
                                    />
                                    <label htmlFor="floatingInput1">Price ($)</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating mb-3" data-aos="fade-up" data-aos-delay="400">
                                    <input
                                        type="number"
                                        className="form-control border-16"
                                        id="floatingInput2"
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(Number(e.target.value))}
                                    />
                                    <label htmlFor="floatingInput2">Interest Rate</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating mb-3" data-aos="fade-up" data-aos-delay="500">
                                    <input
                                        type="number"
                                        className="form-control border-16"
                                        id="floatingInput3"
                                        value={loanTerm}
                                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                                    />
                                    <label htmlFor="floatingInput3">Loan Term (year)</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating mb-3" data-aos="fade-up" data-aos-delay="500">
                                    <input
                                        type="number"
                                        className="form-control border-16"
                                        id="floatingInput4"
                                        value={downPayment}
                                        onChange={(e) => setDownPayment(Number(e.target.value))}
                                    />
                                    <label htmlFor="floatingInput4">Down Payment</label>
                                </div>
                            </div>
                            <div className="col-12 d-grid" data-aos="fade-up" data-aos-delay="600">
                                <button
                                    className="btn py-3 calc-btn"
                                    onClick={calculate}
                                >
                                    Calculate <i className="bi bi-arrow-up-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 bg-light-blue py-5 ps-5">
                        <div className="py-2">
                            <p className="dm-sans-bold">Monthly Payment</p>
                            <p className="blue-color">${monthlyPayment}</p>
                        </div>

                        <div className="py-2">
                            <p className="dm-sans-bold">Total Interest</p>
                            <p className="blue-color">${totalInterest}</p>
                        </div>

                        <div className="py-2">
                            <p className="dm-sans-bold">Total Payment</p>
                            <p className="blue-color">${totalPayment}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
