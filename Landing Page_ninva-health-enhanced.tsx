import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle, Lock, Heart, Activity, Stethoscope, Shield, Award, Share2 } from 'lucide-react';

const NinvaHealthEnhanced = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [showPrivacyDetails, setShowPrivacyDetails] = useState(false);

  const features = [
    {
      title: "Advanced Health Monitoring",
      description: "Revolutionary multi-parameter health assessment powered by AI",
      icon: <Heart className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Medical-Grade Precision",
      description: "Professional diagnostics meeting clinical standards",
      icon: <Activity className="w-8 h-8 text-green-500" />
    },
    {
      title: "Privacy First",
      description: "Bank-grade encryption and HIPAA compliance",
      icon: <Lock className="w-8 h-8 text-purple-500" />
    }
  ];

  const privacyFeatures = [
    {
      title: "End-to-End Encryption",
      description: "Your health data is encrypted at all times",
      icon: <Shield className="w-6 h-6 text-blue-500" />
    },
    {
      title: "HIPAA Compliant",
      description: "Meeting highest healthcare privacy standards",
      icon: <Award className="w-6 h-6 text-green-500" />
    },
    {
      title: "Data Control",
      description: "You own and control your health data",
      icon: <Lock className="w-6 h-6 text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img src="/api/placeholder/40/40" alt="Ninva Health" className="h-8" />
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Features</Button>
              <Button variant="ghost">Privacy</Button>
              <Button className="bg-blue-600 text-white">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Your Health Journey,</span>
                  <span className="block text-blue-600">Reimagined</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Experience professional-grade health monitoring with Kolibri. 
                  Advanced sensors combined with AI-powered analytics provide 
                  unprecedented insights into your health.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                      Get Started
                    </Button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Advanced Health Monitoring
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Professional-grade diagnostics in the comfort of your home
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {features.map((feature, index) => (
                <div key={index} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.title}
                  </p>
                  <p className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Your Privacy is Our Priority
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Industry-leading security measures to protect your health data
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8">
            {privacyFeatures.map((feature, index) => (
              <div key={index} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.title}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* AI Integration Section */}
      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                AI-Powered Health Insights
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Advanced analytics transform your health data into actionable insights,
                helping you make informed decisions about your wellness journey.
              </p>
              <div className="mt-8 sm:flex">
                <Button className="bg-blue-600 text-white">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-0 lg:grid-cols-2">
              {/* AI Feature Cards */}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to take control</span>
            <span className="block">of your health?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Join thousands of users who trust Ninva Health for their wellness journey.
          </p>
          <Button 
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NinvaHealthEnhanced;