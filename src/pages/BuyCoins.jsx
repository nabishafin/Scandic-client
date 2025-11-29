import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Wallet, CreditCard, Building2, CheckCircle, Loader2, Info } from 'lucide-react';
import { Button } from '../components/ui/Button';

const BuyCoins = () => {
    const [step, setStep] = useState('amount');
    const [amount, setAmount] = useState(1000);
    const [customAmount, setCustomAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [transactionId] = useState(`SNC-${Date.now()}`);
    const pricePerCoin = 0.1;
    const processingFee = 2.5; // percentage
    const totalPrice = amount * pricePerCoin;
    const fees = totalPrice * (processingFee / 100);
    const finalTotal = totalPrice + fees;
    const presetAmounts = [500, 1000, 2500, 5000, 10000, 25000];
    const paymentMethods = [{
        id: 'wallet',
        name: 'Crypto Wallet',
        description: 'Connect Phantom, Solflare, or other Solana wallets',
        icon: Wallet,
        recommended: true
    }, {
        id: 'card',
        name: 'Credit/Debit Card',
        description: 'Visa, Mastercard, American Express',
        icon: CreditCard,
        recommended: false
    }, {
        id: 'bank',
        name: 'Bank Transfer',
        description: 'Direct bank transfer (1-3 business days)',
        icon: Building2,
        recommended: false
    }];
    const handleAmountSelect = (value) => {
        setAmount(value);
        setCustomAmount('');
    };
    const handleCustomAmountChange = (value) => {
        setCustomAmount(value);
        const numValue = parseInt(value);
        if (!isNaN(numValue) && numValue > 0) {
            setAmount(numValue);
        }
    };
    const handlePaymentMethodSelect = (method) => {
        setPaymentMethod(method);
    };
    const handleProceedToPayment = () => {
        if (amount > 0) {
            setStep('payment');
        }
    };
    const handleProceedToReview = () => {
        if (paymentMethod) {
            setStep('review');
        }
    };
    const handleConfirmPurchase = () => {
        setStep('processing');
        // Simulate processing
        setTimeout(() => {
            setStep('success');
        }, 3000);
    };
    const handleStartOver = () => {
        setStep('amount');
        setAmount(1000);
        setCustomAmount('');
        setPaymentMethod(null);
    };
    return <div className="w-full min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                    {['Amount', 'Payment', 'Review', 'Complete'].map((label, index) => {
                        const stepIndex = ['amount', 'payment', 'review', 'success'].indexOf(step);
                        const currentIndex = index;
                        const isActive = currentIndex <= stepIndex;
                        const isCurrent = currentIndex === stepIndex;
                        return <div key={label} className="flex items-center flex-1">
                            <div className="flex flex-col items-center flex-1">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isActive ? 'bg-[var(--gold)] border-[var(--gold)] text-black' : 'bg-black/50 border-[var(--gold)]/30 text-white/40'} ${isCurrent ? 'ring-4 ring-gold/30' : ''}`}>
                                    {isActive ? <CheckCircle size={20} /> : <span className="text-sm font-semibold">
                                        {index + 1}
                                    </span>}
                                </div>
                                <span className={`text-xs mt-2 font-medium ${isActive ? 'text-[var(--gold)]' : 'text-white/40'}`}>
                                    {label}
                                </span>
                            </div>
                            {index < 3 && <div className={`h-0.5 flex-1 transition-all duration-300 ${currentIndex < stepIndex ? 'bg-[var(--gold)]' : 'bg-[var(--gold)]/20'}`} />}
                        </div>;
                    })}
                </div>
            </div>

            {/* Step 1: Select Amount */}
            {step === 'amount' && <div className="glass-panel rounded-2xl p-8 glow-gold animate-fade-in">
                <h2 className="text-3xl font-display font-bold text-[var(--gold)] mb-2">
                    Select Amount
                </h2>
                <p className="text-white/60 mb-8">
                    Choose how many Scandic Coins you want to purchase
                </p>

                {/* Live Price Display */}
                <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-xl p-6 mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-sm text-white/60 mb-1">
                                Current Price
                            </div>
                            <div className="text-3xl font-mono font-bold text-[var(--gold)]">
                                ${pricePerCoin.toFixed(2)}
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-sm text-white/60 mb-1">
                                You'll Receive
                            </div>
                            <div className="text-3xl font-mono font-bold text-white">
                                {amount.toLocaleString()} SNC
                            </div>
                        </div>
                    </div>
                </div>

                {/* Preset Amounts */}
                <div className="mb-6">
                    <label className="block text-sm text-white/80 mb-3">
                        Quick Select
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                        {presetAmounts.map(preset => <button key={preset} onClick={() => handleAmountSelect(preset)} className={`py-4 px-4 rounded-lg font-medium transition-all duration-300 ${amount === preset && !customAmount ? 'bg-[var(--gold)] text-black' : 'bg-black/50 border border-[var(--gold)]/30 text-white hover:border-[var(--gold)]'}`}>
                            {preset.toLocaleString()} SNC
                        </button>)}
                    </div>
                </div>

                {/* Custom Amount */}
                <div className="mb-8">
                    <label className="block text-sm text-white/80 mb-2">
                        Or Enter Custom Amount
                    </label>
                    <div className="relative">
                        <input type="number" value={customAmount} onChange={e => handleCustomAmountChange(e.target.value)} className="w-full bg-black/50 border border-[var(--gold)]/30 rounded-lg px-4 py-4 text-white text-lg focus:outline-none focus:border-[var(--gold)] transition-colors" placeholder="Enter amount..." min="1" />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 font-medium">
                            SNC
                        </span>
                    </div>
                </div>

                {/* Total Preview */}
                <div className="bg-black/50 border border-[var(--gold)]/30 rounded-xl p-6 mb-8">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-white/60">Amount</span>
                        <span className="text-white font-mono">
                            {amount.toLocaleString()} SNC
                        </span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-white/60">Price per coin</span>
                        <span className="text-white font-mono">
                            ${pricePerCoin.toFixed(2)}
                        </span>
                    </div>
                    <div className="border-t border-[var(--gold)]/20 my-4" />
                    <div className="flex items-center justify-between">
                        <span className="text-[var(--gold)] font-semibold">Subtotal</span>
                        <span className="text-[var(--gold)] font-mono font-bold text-xl">
                            ${totalPrice.toFixed(2)}
                        </span>
                    </div>
                </div>

                <div>
                    <Button onClick={handleProceedToPayment} size="lg" className="w-full" disabled={amount <= 0}>
                        Continue to Payment
                    </Button>

                </div>
            </div>}

            {/* Step 2: Payment Method */}
            {step === 'payment' && <div className="glass-panel rounded-2xl p-8 glow-gold animate-fade-in">
                <button onClick={() => setStep('amount')} className="flex items-center text-[var(--gold)] hover:text-[var(--gold)]-light transition-colors mb-6">
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Amount
                </button>

                <h2 className="text-3xl font-display font-bold text-[var(--gold)] mb-2">
                    Select Payment Method
                </h2>
                <p className="text-white/60 mb-8">
                    Choose how you'd like to pay for your Scandic Coins
                </p>

                <div className="space-y-4 mb-8">
                    {paymentMethods.map(method => <button key={method.id} onClick={() => handlePaymentMethodSelect(method.id)} className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${paymentMethod === method.id ? 'bg-[var(--gold)]/10 border-[var(--gold)]' : 'bg-black/50 border-[var(--gold)]/30 hover:border-[var(--gold)]/60'}`}>
                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${paymentMethod === method.id ? 'bg-[var(--gold)]/20' : 'bg-[var(--gold)]/10'}`}>
                                    <method.icon className={paymentMethod === method.id ? 'text-[var(--gold)]' : 'text-[var(--gold)]/60'} size={24} />
                                </div>
                                <div>
                                    <div className="flex items-center space-x-2 mb-1">
                                        <h3 className="text-lg font-semibold text-white">
                                            {method.name}
                                        </h3>
                                        {method.recommended && <span className="text-xs bg-[var(--gold)]/20 text-[var(--gold)] px-2 py-0.5 rounded-full">
                                            Recommended
                                        </span>}
                                    </div>
                                    <p className="text-sm text-white/60">
                                        {method.description}
                                    </p>
                                </div>
                            </div>
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === method.id ? 'border-[var(--gold)] bg-[var(--gold)]' : 'border-[var(--gold)]/30'}`}>
                                {paymentMethod === method.id && <CheckCircle size={16} className="text-black" />}
                            </div>
                        </div>
                    </button>)}
                </div>

                <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-xl p-4 mb-8 flex items-start space-x-3">
                    <Info className="text-[var(--gold)] flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-sm text-white/80">
                        All transactions are secured with industry-standard encryption.
                        Your payment information is never stored on our servers.
                    </p>
                </div>

                <Button onClick={handleProceedToReview} size="lg" className="w-full" disabled={!paymentMethod}>
                    Continue to Review
                </Button>
            </div>}

            {/* Step 3: Review Order */}
            {step === 'review' && <div className="glass-panel rounded-2xl p-8 glow-gold animate-fade-in">
                <button onClick={() => setStep('payment')} className="flex items-center text-[var(--gold)] hover:text-[var(--gold)]-light transition-colors mb-6">
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Payment
                </button>

                <h2 className="text-3xl font-display font-bold text-[var(--gold)] mb-2">
                    Review Your Order
                </h2>
                <p className="text-white/60 mb-8">
                    Please review your purchase details before confirming
                </p>

                {/* Order Summary */}
                <div className="bg-black/50 border border-[var(--gold)]/30 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Order Summary
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-white/60">Scandic Coins</span>
                            <span className="text-white font-mono font-semibold">
                                {amount.toLocaleString()} SNC
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-white/60">Price per coin</span>
                            <span className="text-white font-mono">
                                ${pricePerCoin.toFixed(2)}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-white/60">Subtotal</span>
                            <span className="text-white font-mono">
                                ${totalPrice.toFixed(2)}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-white/60">
                                Processing Fee ({processingFee}%)
                            </span>
                            <span className="text-white font-mono">
                                ${fees.toFixed(2)}
                            </span>
                        </div>
                        <div className="border-t border-[var(--gold)]/20 my-4" />
                        <div className="flex items-center justify-between">
                            <span className="text-[var(--gold)] font-semibold text-lg">Total</span>
                            <span className="text-[var(--gold)] font-mono font-bold text-2xl">
                                ${finalTotal.toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Payment Method */}
                <div className="bg-black/50 border border-[var(--gold)]/30 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Payment Method
                    </h3>
                    <div className="flex items-center space-x-3">
                        {paymentMethod === 'wallet' && <Wallet className="text-[var(--gold)]" size={24} />}
                        {paymentMethod === 'card' && <CreditCard className="text-[var(--gold)]" size={24} />}
                        {paymentMethod === 'bank' && <Building2 className="text-[var(--gold)]" size={24} />}
                        <span className="text-white font-medium">
                            {paymentMethods.find(m => m.id === paymentMethod)?.name}
                        </span>
                    </div>
                </div>

                <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-xl p-4 mb-8 flex items-start space-x-3">
                    <Info className="text-[var(--gold)] flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-sm text-white/80">
                        By confirming this purchase, you agree to our Terms of Service
                        and acknowledge that cryptocurrency transactions are final and
                        non-refundable.
                    </p>
                </div>

                <Button onClick={handleConfirmPurchase} size="lg" className="w-full">
                    Confirm Purchase
                </Button>
            </div>}

            {/* Step 4: Processing */}
            {step === 'processing' && <div className="glass-panel rounded-2xl p-12 text-center glow-gold animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-[var(--gold)]/10 flex items-center justify-center mx-auto mb-6">
                    <Loader2 className="text-[var(--gold)] animate-spin" size={40} />
                </div>
                <h2 className="text-3xl font-display font-bold text-[var(--gold)] mb-4">
                    Processing Your Purchase
                </h2>
                <p className="text-white/70 mb-8">
                    Please wait while we process your transaction. This may take a few
                    moments...
                </p>
                <div className="max-w-md mx-auto bg-black/50 border border-[var(--gold)]/30 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-white/60">Transaction ID</span>
                        <span className="text-[var(--gold)] font-mono text-sm">
                            {transactionId}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-white/60">Amount</span>
                        <span className="text-white font-mono">
                            {amount.toLocaleString()} SNC
                        </span>
                    </div>
                </div>
            </div>}

            {/* Step 5: Success */}
            {step === 'success' && <div className="glass-panel rounded-2xl p-12 text-center glow-gold animate-fade-in">
                <div className="w-24 h-24 rounded-full bg-[var(--gold)]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-[var(--gold)]" size={56} />
                </div>
                <h2 className="text-4xl font-display font-bold text-[var(--gold)] mb-4">
                    Purchase Successful!
                </h2>
                <p className="text-xl text-white/80 mb-8">
                    Your Scandic Coins have been added to your wallet
                </p>

                {/* Transaction Details */}
                <div className="max-w-md mx-auto bg-black/50 border border-[var(--gold)]/30 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Transaction Details
                    </h3>
                    <div className="space-y-3 text-left">
                        <div className="flex items-center justify-between">
                            <span className="text-white/60">Transaction ID</span>
                            <span className="text-[var(--gold)] font-mono text-sm">
                                {transactionId}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-white/60">Coins Purchased</span>
                            <span className="text-white font-mono font-semibold">
                                {amount.toLocaleString()} SNC
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-white/60">Total Paid</span>
                            <span className="text-white font-mono">
                                ${finalTotal.toFixed(2)}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-white/60">Date</span>
                            <span className="text-white font-mono text-sm">
                                {new Date().toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button onClick={handleStartOver} size="lg">
                        Buy More Coins
                    </Button>
                    <Button variant="outline" size="lg">
                        View Wallet
                    </Button>
                </div>

                <p className="text-sm text-white/40 mt-8">
                    A confirmation email has been sent to your registered email
                    address
                </p>
            </div>}
        </div>
    </div>;
}
export default BuyCoins;
