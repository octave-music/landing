import { CheckCircle2 } from 'lucide-react';

export default function PremiumPlans() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "What our competitors offer",
      features: [
        "Ad-supported listening",
        "Basic audio quality",
        "No offline playback",
        "Limited skips"
      ]
    },
    {
      name: "Premium",
      price: "$0",
      description: "Way more features, still free",
      features: [
        "Ad-free listening",
        "High quality audio (320kbps)",
        "Unlimited skips",
        "Offline mode",
        "Lyrics sync",
        "Lossless audio (FLAC and OPUS)"
      ]
    }
  ];

  return (
    <section id="premium" className="py-20 bg-[#030303]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get premium features without paying a dime. No credit card required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`p-8 rounded-xl ${
                plan.name === "Premium" 
                  ? "bg-gradient-to-br from-purple-900/30 to-transparent border-2 border-purple-500/20" 
                  : "bg-[#0A0A0A] border border-gray-800"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full mt-8 py-3 px-6 rounded-full font-semibold transition ${
                  plan.name === "Premium"
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "border border-gray-600 hover:border-gray-500"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}