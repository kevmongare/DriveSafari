// components/RegistrationForm.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCar, FaShieldAlt, FaUserCheck, FaCertificate, FaCheck } from 'react-icons/fa';
import Button from './Button';

const RegistrationForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate();

    const totalSteps = 3;

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        } else {
            navigate('/');
        }
    };

    const handleSubmit = () => {
        console.log('Form submitted');
        alert('Registration submitted successfully!');
        navigate('/');
    };

    const features = [
        { icon: <FaUserCheck className="text-[#d39b53]" />, text: "Verified Drivers" },
        { icon: <FaShieldAlt className="text-green-500" />, text: "Secure Registration" },
        { icon: <FaCertificate className="text-[#d39b53]" />, text: "Certified Guides" },
        { icon: <FaCar className="text-[#d39b53]" />, text: "Vehicle Verification" },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row min-h-screen">
                    {/* Sidebar */}
                    <div className="lg:w-1/3 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 lg:p-12">
                        <button 
                            onClick={() => navigate('/')}
                            className="flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
                        >
                            <FaArrowLeft className="mr-2" />
                            Back to Home
                        </button>

                        <div className="flex items-center mb-8">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#d39b53] to-[#e8b86c] rounded-lg flex items-center justify-center mr-3">
                                <FaCar className="text-white text-xl" />
                            </div>
                            <span className="text-2xl font-bold">DriveSafari</span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                            Join Our Professional Driver Network
                        </h1>
                        
                        <p className="text-gray-300 mb-8 text-lg">
                            Complete your registration to start your journey with Kenya's leading tourism platform.
                        </p>

                        <div className="space-y-4 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="mr-3 text-xl">
                                        {feature.icon}
                                    </div>
                                    <span className="text-gray-200">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-black/30 rounded-lg p-6 mb-8">
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-[#d39b53]">500+</div>
                                    <div className="text-gray-400 text-sm">Active Drivers</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-green-400">98%</div>
                                    <div className="text-gray-400 text-sm">Success Rate</div>
                                </div>
                            </div>
                        </div>

                        <div className="text-gray-400 text-sm space-y-1">
                            <p className="flex items-center">
                                <FaCheck className="w-3 h-3 mr-2 text-[#d39b53]" />
                                Secure & encrypted data
                            </p>
                            <p className="flex items-center">
                                <FaCheck className="w-3 h-3 mr-2 text-[#d39b53]" />
                                24/7 Support available
                            </p>
                            <p className="flex items-center">
                                <FaCheck className="w-3 h-3 mr-2 text-[#d39b53]" />
                                Quick approval process
                            </p>
                        </div>
                    </div>

                    {/* Main Form */}
                    <div className="flex-1 flex flex-col">
                        {/* Progress Bar */}
                        <div className="border-b border-gray-200 bg-white p-6">
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                                <div 
                                    className="bg-gradient-to-r from-[#d39b53] to-[#e8b86c] h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                                ></div>
                            </div>
                            
                            {/* Step Indicators */}
                            <div className="flex justify-between relative mb-6">
                                <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-300 -z-10"></div>
                                {[1, 2, 3].map((step) => (
                                    <div key={step} className="flex flex-col items-center relative z-10">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                                            step < currentStep
                                                ? 'bg-[#d39b53] text-white'
                                                : step === currentStep
                                                ? 'bg-gradient-to-r from-[#d39b53] to-[#e8b86c] text-white shadow-lg shadow-[#d39b53]/30'
                                                : 'bg-gray-300 text-gray-600'
                                        }`}>
                                            {step < currentStep ? <FaCheck className="w-3 h-3" /> : step}
                                        </div>
                                        <span className={`text-xs font-medium mt-2 ${
                                            step === currentStep ? 'text-[#d39b53]' : 'text-gray-500'
                                        }`}>
                                            {step === 1 ? 'Personal' : step === 2 ? 'Contact' : 'Qualifications'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form Content */}
                        <div className="flex-1 overflow-auto p-6">
                            {currentStep === 1 && (
                                <div className="space-y-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-4 border-b border-[#d39b53]/20">
                                            Personal Details
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d39b53] focus:border-[#d39b53] transition-all"
                                                    placeholder="Enter your full name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    National ID *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d39b53] focus:border-[#d39b53] transition-all"
                                                    placeholder="Enter your national ID"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Date of Birth *
                                                </label>
                                                <input
                                                    type="date"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d39b53] focus:border-[#d39b53] transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Gender *
                                                </label>
                                                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d39b53] focus:border-[#d39b53] transition-all">
                                                    <option value="">Select Gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {currentStep === 2 && (
                                <div className="space-y-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-4 border-b border-[#d39b53]/20">
                                            Contact Information
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Phone Number *
                                                </label>
                                                <input
                                                    type="tel"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d39b53] focus:border-[#d39b53] transition-all"
                                                    placeholder="Enter your phone number"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d39b53] focus:border-[#d39b53] transition-all"
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Address *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d39b53] focus:border-[#d39b53] transition-all"
                                                    placeholder="Enter your complete address"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {currentStep === 3 && (
                                <div className="space-y-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-4 border-b border-[#d39b53]/20">
                                            Qualifications & Vehicle Information
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Driver's License Number *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d39b53] focus:border-[#d39b53] transition-all"
                                                    placeholder="License number"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    License Expiry Date *
                                                </label>
                                                <input
                                                    type="date"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d39b53] focus:border-[#d39b53] transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Vehicle Type
                                                </label>
                                                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d39b53] focus:border-[#d39b53] transition-all">
                                                    <option value="">Select Vehicle</option>
                                                    <option value="suv">SUV</option>
                                                    <option value="van">Van</option>
                                                    <option value="sedan">Sedan</option>
                                                    <option value="bus">Bus</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Years of Experience
                                                </label>
                                                <input
                                                    type="number"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d39b53] focus:border-[#d39b53] transition-all"
                                                    placeholder="Years of experience"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="border-t border-gray-200 bg-white p-6">
                            <div className="flex justify-between">
                                <Button
                                    variant="outline"
                                    onClick={prevStep}
                                    className="flex items-center"
                                >
                                    <FaArrowLeft className="mr-2" />
                                    {currentStep === 1 ? 'Back to Home' : 'Previous'}
                                </Button>

                                {currentStep < totalSteps ? (
                                    <Button
                                        onClick={nextStep}
                                        className="flex items-center"
                                    >
                                        Next Step
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={handleSubmit}
                                        className="flex items-center"
                                    >
                                        <FaCheck className="mr-2" />
                                        Submit Registration
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;