import React, { useState } from "react";

export function FinancingCalc() {
    const [price, setPrice] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [loanTerm, setLoanTerm] = useState(0);
    const [downPayment, setDownPayment] = useState(0);
    const [monthlyPayment, setMonthlyPayment] = useState(null);

    const calculate = () => {
        if (price && interestRate && loanTerm) {
            const loanAmount = price - downPayment;
            const monthlyRate = interestRate / 100 / 12;
            const numberOfPayments = loanTerm * 12;
            const monthlyPayment = loanAmount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
            setMonthlyPayment(monthlyPayment.toFixed(2));
        } else {
            setMonthlyPayment(null);
        }
    };

    return (
        <section className="my-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 py-3">
                        <h3 className="dm-sans-bold">Financing Calculator</h3>
                        <div className="row">
                            <div className="col-12 col-md-6">
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
                            <div className="col-12 col-md-6">
                                <div className="form-floating mb-3">
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
                            <div className="col-12 col-md-6">
                                <div className="form-floating mb-3">
                                    <input
                                        type="number"
                                        className="form-control border-16"
                                        id="floatingInput3"
                                        value={loanTerm}
                                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                                    />
                                    <label htmlFor="floatingInput3">Loan Term (year) </label>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-floating mb-3">
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
                            <div className="col-12 col-md-4 d-grid">
                                <button
                                    className="btn py-3 calc-btn"
                                    onClick={calculate}
                                >
                                    Calculate <i className="bi bi-arrow-up-right"></i>
                                </button>
                            </div>
                        </div>
                        {monthlyPayment !== null && (
                            <div className="row mt-3">
                                <div className="col-12">
                                    <p className="dm-sans-bold mb-1">Monthly Payment</p>
                                    <p className="blue-color">${monthlyPayment}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
