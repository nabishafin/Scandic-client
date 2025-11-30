import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

import { Button } from '../components/ui/Button';
import GlobeBackground from '../components/globe/GlobeBackground';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };
    const contactInfo = [{
        title: 'Corporate Headquarters',
        icon: MapPin,
        details: ['Scandic Assets FZCO', 'Dubai Silicon Oasis', 'Dubai, United Arab Emirates', 'corporate@scandic.group']
    }, {
        title: 'Investor Relations',
        icon: Mail,
        details: ['For partnership inquiries', 'and institutional investors', '', 'investors@scandic.group']
    }, {
        title: 'Press & Media',
        icon: Phone,
        details: ['Media inquiries and', 'press releases', '', 'press@scandic.group']
    }];
    return <div className="w-full">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <GlobeBackground />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 text-shadow-gold">
                    Connect with Scandic Group
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                    We're here to answer your questions, discuss partnerships, and
                    support your journey with Scandic Coin.
                </p>
            </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div className="glass-panel rounded-2xl p-12">
                        <h2 className="text-3xl font-display font-bold text-gold mb-6">
                            Send Us a Message
                        </h2>
                        <div className="h-1 w-24 bg-gold mb-8" />

                        {submitted ? <div className="bg-gold/20 border border-gold rounded-xl p-8 text-center">
                            <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mx-auto mb-4">
                                <Send className="text-black" size={32} />
                            </div>
                            <h3 className="text-2xl font-display font-semibold text-gold mb-2">
                                Message Sent!
                            </h3>
                            <p className="text-white/70">
                                Thank you for reaching out. We'll get back to you within 24
                                hours.
                            </p>
                        </div> : <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm text-white/80 mb-2 font-medium">
                                    Full Name *
                                </label>
                                <input type="text" required value={formData.name} onChange={e => setFormData({
                                    ...formData,
                                    name: e.target.value
                                })} className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="John Doe" />
                            </div>

                            <div>
                                <label className="block text-sm text-white/80 mb-2 font-medium">
                                    Email Address *
                                </label>
                                <input type="email" required value={formData.email} onChange={e => setFormData({
                                    ...formData,
                                    email: e.target.value
                                })} className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="you@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm text-white/80 mb-2 font-medium">
                                    Subject *
                                </label>
                                <input type="text" required value={formData.subject} onChange={e => setFormData({
                                    ...formData,
                                    subject: e.target.value
                                })} className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="Partnership Inquiry" />
                            </div>

                            <div>
                                <label className="block text-sm text-white/80 mb-2 font-medium">
                                    Message *
                                </label>
                                <textarea required rows={6} value={formData.message} onChange={e => setFormData({
                                    ...formData,
                                    message: e.target.value
                                })} className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Tell us how we can help..." />
                            </div>

                            <Button type="submit" size="lg" className="w-full">
                                Send Message
                                <Send className="ml-2" size={20} />
                            </Button>
                        </form>}
                    </div>

                    {/* Contact Info Grid */}
                    <div className="space-y-8">
                        {contactInfo.map((info, index) => <div key={index} className="glass-panel rounded-2xl p-8 hover:border-gold transition-all duration-500">
                            <div className="flex items-start space-x-4">
                                <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                                    <info.icon className="text-gold" size={28} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-display font-semibold text-gold mb-4">
                                        {info.title}
                                    </h3>
                                    <div className="space-y-1">
                                        {info.details.map((detail, dIndex) => <p key={dIndex} className={`${detail.includes('@') ? 'text-gold' : 'text-white/70'} ${detail === '' ? 'h-2' : ''}`}>
                                            {detail}
                                        </p>)}
                                    </div>
                                </div>
                            </div>
                        </div>)}

                        {/* Additional Info */}
                        <div className="glass-panel rounded-2xl p-8">
                            <h3 className="text-xl font-display font-semibold text-white mb-4">
                                Office Hours
                            </h3>
                            <div className="space-y-2 text-white/70">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM GST</p>
                                <p>Saturday - Sunday: Closed</p>
                                <p className="text-sm text-white/50 mt-4">
                                    For urgent matters, please email us and we'll respond within
                                    24 hours.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>;
}
export default Contact;