import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, MessageSquare, Settings, Heart, Activity,
  Home, User, Calendar, Menu, ArrowLeft, Plus, Shield,
  Search, Bell, CheckCircle2
} from 'lucide-react';

const MobileAIGuidelines = () => {
  const [activeChat, setActiveChat] = useState(false);

  // Mobile Navigation Items
  const navigationItems = [
    { icon: <Home className="h-6 w-6" />, label: "Home" },
    { icon: <Heart className="h-6 w-6" />, label: "Health" },
    { icon: <Calendar className="h-6 w-6" />, label: "Schedule" },
    { icon: <User className="h-6 w-6" />, label: "Profile" }
  ];

  // Icon Categories
  const iconCategories = {
    navigation: [
      { icon: <ArrowLeft />, usage: "Back navigation" },
      { icon: <Menu />, usage: "Menu toggle" },
      { icon: <Search />, usage: "Search function" }
    ],
    actions: [
      { icon: <Plus />, usage: "Add new item" },
      { icon: <Bell />, usage: "Notifications" },
      { icon: <Settings />, usage: "Settings" }
    ],
    status: [
      { icon: <CheckCircle2 />, usage: "Success state" },
      { icon: <Shield />, usage: "Security" },
      { icon: <Activity />, usage: "Active state" }
    ]
  };

  return (
    <div className="space-y-12">
      {/* Mobile App Guidelines */}
      <section>
        <h2 className="text-2xl font-semibold text-[#2F4B4C] mb-6">Mobile App Guidelines</h2>
        
        {/* Navigation Patterns */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Navigation Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Bottom Navigation */}
              <div>
                <h3 className="text-lg font-medium mb-4">Bottom Navigation</h3>
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex justify-around items-center">
                    {navigationItems.map((item, index) => (
                      <div 
                        key={index}
                        className="flex flex-col items-center gap-1"
                      >
                        {item.icon}
                        <span className="text-sm">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Header Pattern */}
              <div>
                <h3 className="text-lg font-medium mb-4">Header Pattern</h3>
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <ArrowLeft className="h-6 w-6" />
                    <h4 className="font-medium">Screen Title</h4>
                    <Bell className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Touch Targets & Spacing */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Touch Targets & Spacing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Minimum Touch Target</h3>
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 bg-[#182C2B] rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">44pt</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Minimum touch target size for all interactive elements
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Spacing System</h3>
                <div className="space-y-2">
                  <div className="h-4 w-16 bg-[#182C2B] rounded"></div>
                  <p className="text-sm text-gray-600">Base unit: 16px (1rem)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* AI Chat Interface Guidelines */}
      <section>
        <h2 className="text-2xl font-semibold text-[#2F4B4C] mb-6">AI Chat Interface</h2>
        
        {/* Chat Bubbles */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Chat Components</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-w-md mx-auto">
              {/* AI Message */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#182C2B] flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none">
                    <p className="text-sm">Hello! I'm your AI health assistant. How can I help you today?</p>
                  </div>
                </div>
              </div>

              {/* User Message */}
              <div className="flex gap-3 justify-end">
                <div className="flex-1 max-w-[80%]">
                  <div className="bg-[#182C2B] p-3 rounded-lg rounded-tr-none">
                    <p className="text-sm text-white">What's my blood pressure trend this week?</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2 overflow-x-auto py-2">
                <Button variant="outline" size="sm" className="whitespace-nowrap">
                  View Health Report
                </Button>
                <Button variant="outline" size="sm" className="whitespace-nowrap">
                  Schedule Check-up
                </Button>
                <Button variant="outline" size="sm" className="whitespace-nowrap">
                  Set Reminder
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Response Types */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>AI Response Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              {/* Data Visualization */}
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Data Response</h3>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Systolic</span>
                      <span className="font-medium">120 mmHg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Diastolic</span>
                      <span className="font-medium">80 mmHg</span>
                    </div>
                    <div className="h-2 bg-green-200 rounded">
                      <div className="h-2 bg-green-500 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Recommendations</h3>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Monitor daily</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Log medication</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Icon System */}
      <section>
        <h2 className="text-2xl font-semibold text-[#2F4B4C] mb-6">Icon System</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Icon Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {Object.entries(iconCategories).map(([category, icons]) => (
                <div key={category}>
                  <h3 className="text-lg font-medium capitalize mb-4">{category} Icons</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {icons.map((icon, index) => (
                      <div 
                        key={index}
                        className="p-4 bg-gray-50 rounded-lg flex items-center gap-3"
                      >
                        <div className="h-10 w-10 bg-[#182C2B] rounded-lg flex items-center justify-center">
                          <div className="text-white">{icon.icon}</div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{icon.usage}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Icon Usage Guidelines */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Usage Guidelines</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Maintain 24x24px as default size</li>
                  <li>• Use 2px stroke width consistently</li>
                  <li>• Keep icons simple and recognizable</li>
                  <li>• Ensure proper padding in containers</li>
                  <li>• Provide text labels where possible</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default MobileAIGuidelines;