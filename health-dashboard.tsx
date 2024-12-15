import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { LineChart, Line, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Heart, Brain, Activity, Plus, Clock, Shield } from 'lucide-react';

const HealthDashboard = () => {
  const [activeTab, setActiveTab] = useState('vitals');

  // Sample data - would come from your API in production
  const vitalSignsData = [
    { date: '2024-01', heartRate: 72, bloodPressure: 120, oxygen: 98 },
    { date: '2024-02', heartRate: 75, bloodPressure: 122, oxygen: 97 },
    { date: '2024-03', heartRate: 71, bloodPressure: 118, oxygen: 99 }
  ];

  const metabolicData = [
    { name: 'Glucose', value: 95 },
    { name: 'Cholesterol', value: 180 },
    { name: 'Triglycerides', value: 150 }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-[#FFF8F0]">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#26652C]" style={{ fontFamily: '"Recife Display", serif' }}>
          Health Analytics
        </h1>
        <p className="text-gray-600 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
          Your comprehensive health overview
        </p>
      </div>

      <Tabs defaultValue="vitals" className="w-full">
        <TabsList className="grid w-full grid-cols-4 gap-4 mb-8">
          <TabsTrigger 
            value="vitals" 
            className="flex items-center gap-2 bg-[#8FD5CA] data-[state=active]:bg-[#26652C] data-[state=active]:text-white"
          >
            <Heart className="h-4 w-4" />
            Vital Signs
          </TabsTrigger>
          <TabsTrigger 
            value="metabolic"
            className="flex items-center gap-2 bg-[#8FD5CA] data-[state=active]:bg-[#26652C] data-[state=active]:text-white"
          >
            <Activity className="h-4 w-4" />
            Metabolic
          </TabsTrigger>
          <TabsTrigger 
            value="alerts"
            className="flex items-center gap-2 bg-[#8FD5CA] data-[state=active]:bg-[#26652C] data-[state=active]:text-white"
          >
            <Shield className="h-4 w-4" />
            Health Alerts
          </TabsTrigger>
          <TabsTrigger 
            value="trends"
            className="flex items-center gap-2 bg-[#8FD5CA] data-[state=active]:bg-[#26652C] data-[state=active]:text-white"
          >
            <Clock className="h-4 w-4" />
            Trends
          </TabsTrigger>
        </TabsList>

        <TabsContent value="vitals">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-[#26652C]">Vital Signs Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={vitalSignsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#FFF8F0',
                          border: '1px solid #26652C'
                        }}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="heartRate" 
                        stroke="#26652C" 
                        name="Heart Rate" 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="bloodPressure" 
                        stroke="#8FD5CA" 
                        name="Blood Pressure" 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="oxygen" 
                        stroke="#FFB69E" 
                        name="Oxygen Saturation" 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-[#26652C]">Current Readings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#8FD5CA] rounded-lg">
                    <Heart className="h-8 w-8 text-[#26652C] mx-auto" />
                    <p className="mt-2 text-sm text-center">Heart Rate</p>
                    <p className="text-2xl font-bold text-[#26652C] text-center">73 BPM</p>
                  </div>
                  <div className="p-4 bg-[#BBE2BB] rounded-lg">
                    <Activity className="h-8 w-8 text-[#26652C] mx-auto" />
                    <p className="mt-2 text-sm text-center">Blood Pressure</p>
                    <p className="text-2xl font-bold text-[#26652C] text-center">120/80</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="metabolic">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-[#26652C]">Metabolic Indicators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={metabolicData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#FFF8F0',
                        border: '1px solid #26652C'
                      }}
                    />
                    <Legend />
                    <Bar 
                      dataKey="value" 
                      fill="#8FD5CA"
                      stroke="#26652C"
                      strokeWidth={1}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts">
          <div className="space-y-4">
            <Alert className="border-[#26652C] bg-[#8FD5CA]/10">
              <Shield className="h-4 w-4" />
              <AlertTitle>Normal Blood Pressure</AlertTitle>
              <AlertDescription>
                Your blood pressure readings are within the healthy range.
              </AlertDescription>
            </Alert>
            <Alert className="border-[#FFB69E] bg-[#FFB69E]/10">
              <Activity className="h-4 w-4" />
              <AlertTitle>Elevated Heart Rate</AlertTitle>
              <AlertDescription>
                Your resting heart rate has been slightly elevated. Consider scheduling a check-up.
              </AlertDescription>
            </Alert>
          </div>
        </TabsContent>

        <TabsContent value="trends">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-[#26652C]">Long-term Health Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-[#8FD5CA]/10 rounded-lg">
                  <h3 className="font-semibold text-[#26652C] mb-2">Blood Pressure Trend</h3>
                  <p className="text-gray-600">Showing improvement over the last 3 months</p>
                  <div className="h-2 bg-[#EAD0AD] rounded mt-2">
                    <div className="h-2 bg-[#26652C] rounded w-3/4"></div>
                  </div>
                </div>
                <div className="p-4 bg-[#8FD5CA]/10 rounded-lg">
                  <h3 className="font-semibold text-[#26652C] mb-2">Heart Rate Variability</h3>
                  <p className="text-gray-600">Maintaining healthy variability</p>
                  <div className="h-2 bg-[#EAD0AD] rounded mt-2">
                    <div className="h-2 bg-[#26652C] rounded w-4/5"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HealthDashboard;