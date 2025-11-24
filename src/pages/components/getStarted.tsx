// components/getStarted.tsx
import { FaUserPlus, FaClipboardCheck, FaCar } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi2';

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  index: number;
  href?: string;
}

const StepCard = ({ icon, title, description, linkText, index, href = "#" }: StepCardProps) => {
  return (
    <div className="group relative">
      <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
        {/* Golden Accent Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d39b53] to-[#e8b86c] rounded-t-2xl" />
        
        {/* Step Indicator */}
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#d39b53] text-white rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">
          {index + 1}
        </div>

        <div className="relative">
          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-[#d39b53] to-[#e8b86c] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            {icon}
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{title}</h3>
          <p className="text-gray-600 leading-relaxed mb-6 text-md font-light">{description}</p>
          
          {/* CTA Link */}
          <a 
            href={href}
            className="inline-flex items-center text-[#d39b53] font-semibold text-lg hover:text-[#b8863b] transition-all duration-300 group/link"
          >
            {linkText}
            <HiArrowRight className="ml-3 w-5 h-5 transform group-hover/link:translate-x-2 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

const GetStarted = () => {
  const steps: Omit<StepCardProps, 'index'>[] = [
    {
      icon: <FaUserPlus className="w-8 h-8 text-white" />,
      title: "Sign up online",
      description: "You'll need a valid email address and cell phone number to sign up. Requirements vary by region, so we'll show you what's needed for your city.",
      linkText: "Sign up online"
    },
    {
      icon: <FaClipboardCheck className="w-8 h-8 text-white" />,
      title: "Check driving requirements",
      description: "Most people are eligible to drive with Uber. Here's what you need to know if you're driving in Nairobi or Mombasa.",
      linkText: "Requirements"
    },
    {
      icon: <FaCar className="w-8 h-8 text-white" />,
      title: "Get a vehicle",
      description: "You can sign up even if you don't have a car that meets the vehicle requirements in Kenya right now.",
      linkText: "Vehicle requirements"
    }
  ];

  const stats = [
    { number: "24-72h", label: "Approval Time" },
    { number: "95%", label: "Success Rate" },
    { number: "500+", label: "Active Drivers" },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get Started
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d39b53] to-[#e8b86c] rounded-full mx-auto mb-8" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              {...step}
              index={index}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <div className="flex justify-center gap-12 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-500 text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;