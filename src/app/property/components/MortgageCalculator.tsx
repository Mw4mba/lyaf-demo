import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import { formatPrice } from '../page';

interface MortgageCalculatorProps {
    propertyPrice: number;
}

const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({ propertyPrice }) => {
    const [price, setPrice] = useState<number>(propertyPrice);
    const [deposit, setDeposit] = useState<number>(propertyPrice * 0.1);
    const [interestRate, setInterestRate] = useState<number>(7.5);
    const [loanTerm, setLoanTerm] = useState<number>(20);
    const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

    useEffect(() => {
        const principal = price - deposit;
        const monthlyInterestRate = (interestRate / 100) / 12;
        const numberOfPayments = loanTerm * 12;

        if (principal <= 0 || monthlyInterestRate <= 0) {
            setMonthlyPayment(0);
            return;
        }

        const payment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
        setMonthlyPayment(payment);

    }, [price, deposit, interestRate, loanTerm]);

    return (
        <div className="bg-white p-6 md:p-8 rounded-xl border">
            <h2 className="text-2xl font-bold mb-4 flex items-center"><Calculator className="mr-3 text-[#1240a0]" />Mortgage Calculator</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div>
                    <div>
                        <label className="block font-medium text-slate-600">Property Price</label>
                        <input type="number" value={price} onChange={e => setPrice(Number(e.target.value))} className="w-full p-2 border rounded-md mt-1"/>
                    </div>
                    <div className="mt-4">
                        <label className="block font-medium text-slate-600">Deposit</label>
                        <input type="number" value={deposit} onChange={e => setDeposit(Number(e.target.value))} className="w-full p-2 border rounded-md mt-1"/>
                    </div>
                    <div className="mt-4">
                        <label className="block font-medium text-slate-600">Interest Rate (%)</label>
                        <input type="number" step="0.1" value={interestRate} onChange={e => setInterestRate(Number(e.target.value))} className="w-full p-2 border rounded-md mt-1"/>
                    </div>
                    <div className="mt-4">
                        <label className="block font-medium text-slate-600">Loan Term (Years)</label>
                        <input type="range" min="5" max="30" value={loanTerm} onChange={e => setLoanTerm(Number(e.target.value))} className="w-full mt-2"/>
                        <div className="text-center font-semibold">{loanTerm} Years</div>
                    </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg text-center h-full flex flex-col justify-center">
                    <p className="text-slate-500">Estimated Monthly Repayment</p>
                    <p className="text-4xl font-extrabold text-[#1240a0] mt-2">{formatPrice(monthlyPayment)}</p>
                    <p className="text-sm text-slate-400 mt-2">This is an estimate and may vary.</p>
                </div>
            </div>
        </div>
    );
};

export default MortgageCalculator;
