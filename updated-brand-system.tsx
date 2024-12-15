import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  Heart, Activity, Shield, Check, 
  ArrowRight, AlertCircle
} from 'lucide-react';

const UpdatedBrandSystem = () => {
  // UI Patterns Data
  const uiPatterns = {
    dataEntry: [
      {
        title: "Health Check Form",
        description: "Guided form pattern for health data entry",
        status: "Recommended"
      },
      {
        title: "Quick Vitals Input",
        description: "Rapid data entry for vital signs",
        status: "Alternative"
      }
    ],
    navigation: [
      {
        title: "Health Dashboard",
        description: "Primary navigation pattern",
        status: "Default"
      },
      {
        title: "Quick Actions Menu",
        description: "Contextual navigation pattern",
        status: "Optional"
      }
    ],
    feedback: [
      {
        title: "Success States",
        description: "Confirmation patterns for completed actions",
        status: "Required"
      },
      {
        title: "Error Handling",
        description: "User-friendly error messages",
        status: "Required"
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Typography Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#2F4B4C] mb-6">Typography System</h2>
        <Card>
          <CardContent className="p-8 space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-[#2F4B4C] mb-2">Heading 1</h1>
              <p className="text-[#718096]">Supreme Bold - 48px/56px</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#2F4B4C] mb-2">Heading 2</h2>
              <p className="text-[#718096]">Supreme Bold - 40px/48px</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#2F4B4C] mb-2">Heading 3</h3>
              <p className="text-[#718096]">Supreme Semibold - 24px/32px</p>
            </div>
            <div>
              <p className="text-lg text-[#4A5568] mb-2">Body Text</p>
              <p className="text-[#718096]">Inter Regular - 16px/24px</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Button System */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#2F4B4C] mb-6">Button System</h2>
        <Card>
          <CardContent className="p-8 space-y-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button 
                  className="bg-[#182C2B] hover:bg-[#2F4B4C] text-white transition-colors"
                >
                  Primary Button
                </Button>
                <Button 
                  className="bg-[#CA6D68] hover:bg-[#b85f5a] text-white transition-colors"
                >
                  Secondary Button
                </Button>
                <Button 
                  variant="outline"
                  className="border-[#182C2B] text-[#182C2B] hover:bg-[#182C2B] hover:text-white transition-colors"
                >
                  Outline Button
                </Button>
                <Button 
                  variant="ghost"
                  className="text-[#182C2B] hover:bg-[#182C2B]/10 transition-colors"
                >
                  Ghost Button
                </Button>
              </div>
              <div className="flex gap-4">
                <Button 
                  className="bg-[#182C2B] hover:bg-[#2F4B4C] text-white transition-colors"
                  size="sm"
                >
                  Small Button
                </Button>
                <Button 
                  disabled
                  className="bg-[#DFDADE] text-[#718096] cursor-not-allowed"
                >
                  Disabled Button
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* UI Patterns */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#2F4B4C] mb-6">UI Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Data Entry Patterns */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#2F4B4C]">Data Entry Patterns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {uiPatterns.dataEntry.map((pattern, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-[#2F4B4C]">{pattern.title}</h4>
                        <p className="text-sm text-[#718096]">{pattern.description}</p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-[#182C2B]/10 text-[#182C2B] rounded">
                        {pattern.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation Patterns */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#2F4B4C]">Navigation Patterns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {uiPatterns.navigation.map((pattern, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-[#2F4B4C]">{pattern.title}</h4>
                        <p className="text-sm text-[#718096]">{pattern.description}</p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-[#182C2B]/10 text-[#182C2B] rounded">
                        {pattern.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Feedback Patterns */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#2F4B4C]">Feedback Patterns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {uiPatterns.feedback.map((pattern, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-[#2F4B4C]">{pattern.title}</h4>
                        <p className="text-sm text-[#718096]">{pattern.description}</p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-[#182C2B]/10 text-[#182C2B] rounded">
                        {pattern.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pattern Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#2F4B4C] mb-6">Pattern Examples</h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Form Pattern */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#2F4B4C]">Health Check Form</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#4A5568] mb-1">
                    Blood Pressure
                  </label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Systolic"
                      className="flex-1 p-2 border rounded-md"
                    />
                    <span className="text-[#718096] self-center">/</span>
                    <input 
                      type="text" 
                      placeholder="Diastolic"
                      className="flex-1 p-2 border rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4A5568] mb-1">
                    Heart Rate
                  </label>
                  <input 
                    type="number" 
                    placeholder="BPM"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <Button className="bg-[#182C2B] hover:bg-[#2F4B4C] text-white w-full">
                  Save Readings
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Feedback Pattern */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#2F4B4C]">Status Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border-l-4 border-[#2F4B4C] rounded">
                  <div className="flex items-center gap-2">
                    <Check className="text-[#2F4B4C]" />
                    <p className="text-[#2F4B4C] font-medium">Reading Saved Successfully</p>
                  </div>
                </div>
                <div className="p-4 bg-red-50 border-l-4 border-[#CA6D68] rounded">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="text-[#CA6D68]" />
                    <p className="text-[#CA6D68] font-medium">Please check your input</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default UpdatedBrandSystem;