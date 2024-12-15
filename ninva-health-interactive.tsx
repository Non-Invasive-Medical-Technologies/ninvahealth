import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Heart, Activity, Stethoscope, Shield, Lock, Video, 
  ArrowRight, ChevronDown, Cloud
} from 'lucide-react';

const InteractiveNinvaHealth = () => {
  const [activeFeature, setActiveFeature] = useState('stethoscope');
  const [showPrivacyDetails, setShowPrivacyDetails] = useState(false);
  const [selectedSpec, setSelectedSpec] = useState(null);

  const features = [
    {
      id: 'stethoscope',
      title: "Digital Stethoscope",
      description: "Professional-grade heart and lung sound monitoring",
      icon: <Stethoscope className="w-8 h-8 text-blue-500" />,
      details: "Advanced acoustic sensors provide clear heart and lung sound recordings with medical-grade accuracy."
    },
    {
      id: 'vitals',
      title: "Vital Signs Monitoring",
      description: "Continuous tracking of essential health metrics",
      icon: <Activity className="w-8 h-8 text-green-500" />,
      details: "Track heart rate, blood pressure, temperature, and respiratory rate in real-time."
    },
    {
      id: 'telemedicine',
      title: "Enhanced Telemedicine",
      description: "Seamless remote consultations",
      icon: <Video className="w-8 h-8 text-purple-500" />,
      details: "Connect with healthcare providers while sharing real-time health data."
    }
  ];

  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "Military-grade encryption for all health data",
      icon: <Lock className="w-6 h-6" />,
      details: "AES-256 encryption ensures your health information remains private"
    },
    {
      title: "HIPAA Compliance",
      description: "Meeting healthcare privacy standards",
      icon: <Shield className="w-6 h-6" />,
      details: "Full compliance with healthcare data protection regulations"
    },
    {
      title: "Secure Cloud Storage",
      description: "Protected cloud infrastructure",
      icon: <Cloud className="w-6 h-6" />,
      details: "Your data is stored in secure, redundant cloud systems"
    }
  ];

  const specifications = {
    dimensions: {
      title: "Physical Specifications",
      details: [
        "Size: 120mm x 40mm x 15mm",
        "Weight: 85g",
        "Display: OLED touch screen",
        "Battery: Li-ion, 12-hour continuous use"
      ]
    },
    sensors: {
      title: "Sensor Capabilities",
      details: [
        "Digital stethoscope with noise cancellation",
        "Temperature sensor (±0.1°C accuracy)",
        "Pulse oximeter with motion compensation",
        "ECG monitoring capability"
      ]
    },
    connectivity: {
      title: "Connectivity",
      details: [
        "Bluetooth 5.0 LE",
        "Wi-Fi 802.11 b/g/n",
        "USB-C port for charging and data transfer",
        "Real-time data synchronization"
      ]
    }
  };

  const renderFeatureDetails = () => (
    <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Card 
            key={feature.id}
            className={`cursor-pointer transition-all duration-300 ${
              activeFeature === feature.id ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setActiveFeature(feature.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
              {activeFeature === feature.id && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  {feature.details}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSecuritySection = () => (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Enterprise-Grade Security
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Your health data is protected by multiple layers of security
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
                <div className="mt-4 text-sm text-gray-500 text-center">
                  {feature.details}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSpecifications = () => (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Specifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(specifications).map(([key, spec]) => (
            <Card 
              key={key}
              className="cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => setSelectedSpec(selectedSpec === key ? null : key)}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{spec.title}</h3>
                <div className={`space-y-2 transition-all duration-300 ${
                  selectedSpec === key ? 'max-h-96' : 'max-h-0 overflow-hidden'
                }`}>
                  {spec.details.map((detail, index) => (
                    <p key={index} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  className="mt-4 w-full"
                >
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                    selectedSpec === key ? 'transform rotate-180' : ''
                  }`} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      {/* ... (previous navigation code) ... */}

      {/* Hero Section with Animation */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Advanced Health Monitoring</span>
              <span className="block text-blue-600">At Your Fingertips</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Experience the future of personal health monitoring with Ninva Health's
              professional-grade diagnostic tools and AI-powered insights.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Button className="w-full sm:w-auto bg-blue-600 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      {renderFeatureDetails()}

      {/* Security Section */}
      {renderSecuritySection()}

      {/* Specifications Section */}
      {renderSpecifications()}

      {/* Footer with Privacy Policy */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Ninva Health</h3>
              {/* Footer content */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InteractiveNinvaHealth;