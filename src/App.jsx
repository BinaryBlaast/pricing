import React from 'react';

const PricingCard = ({ plan, price, features }) => {
  const renderFeature = (feature, index) => {
    const isCorrectFeature = index < 4;
    const iconStyle = isCorrectFeature
      ? 'w-5 h-5 text-green-500 mr-2'
      : 'w-5 h-5 text-gray-400 opacity-50 mr-2';

    return (
      <li key={index} className={`flex items-center ${isCorrectFeature ?  '': 'opacity-50'}`}>
        {isCorrectFeature ? (
          <svg className={iconStyle} fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>

        ) : (
          <svg className={iconStyle} fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {feature}
      </li>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">${price}/month</h2>
      <ul className="space-y-2">{features.map(renderFeature)}</ul>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full mt-6">
        BUTTON
      </button>
    </div>
  );
};

const App = () => {
  const plans = [
    {
      plan: 'Free',
      price: 0,
      features: [
        'Single User',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports',
      ],
    },
    {
      plan: 'Plus',
      price: 9,
      features: [
        '5 Users',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports',
      ],
    },
    {
      plan: 'Pro',
      price: 49,
      features: [
        'Unlimited Users',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports',
      ],
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex space-x-6">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan.plan}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default App;