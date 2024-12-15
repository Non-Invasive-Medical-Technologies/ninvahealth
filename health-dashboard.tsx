import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, BarChart, Bar, RadialBarChart, RadialBar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Heart, Brain, Activity, Plus } from 'lucide-react';

const HealthDashboard = () => {
  const [activeTab, setActiveTab] = useState('vital');

  // Sample data - in production this would come from your API
  const vitalSignsData = [
    { name: 'Jan', heartRate: 72, bloodPressure: 120, oxygen: 98 },
    { name: 'Feb', heartRate: 75, bloodPressure: 122, oxygen: 97 },
    { name: 'Mar', heartRate: 71, bloodPressure: 118, oxygen: 99 },
    { name: 'Apr', heartRate: 73, bloodPressure: 121, oxygen: 98 },
  ];

  const metabolicData = [
    { name: 'Glucose', value: 95, fill: '#FF8042' },
    { name: 'Cholesterol', value: 180, fill: '#00C49F' },
    { name: 'Triglycerides', value: 150, fill: '#FFBB28' },
    { name: 'HDL', value: 50, fill: '#0088FE' },
  ];

  const bloodComposition = [
    { name: 'RBC', value: 4.8 },
    { name: 'WBC', value: 7.2 },
    { name: 'Platelets', value: 250 },
    { name: 'Hemoglobin', value: 14 },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Health Analytics Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="vital" className="w-full">
            <TabsList className="grid w-full grid-cols-4 gap-4 mb-8">
              <TabsTrigger value="vital" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Vital Signs
              </TabsTrigger>
              <TabsTrigger value="metabolic" className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Metabolic
              </TabsTrigger>
              <TabsTrigger value="blood" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Blood Analysis
              </TabsTrigger>
              <TabsTrigger value="neuro" className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                Neurological
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vital" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Vital Signs Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={vitalSignsData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="heartRate" stroke="#8884d8" name="Heart Rate" />
                          <Line type="monotone" dataKey="bloodPressure" stroke="#82ca9d" name="Blood Pressure" />
                          <Line type="monotone" dataKey="oxygen" stroke="#ffc658" name="Oxygen Saturation" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Current Readings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <Heart className="h-8 w-8 mx-auto text-blue-500" />
                        <p className="mt-2 text-sm text-gray-600">Heart Rate</p>
                        <p className="text-2xl font-bold text-blue-600">73 BPM</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <Activity className="h-8 w-8 mx-auto text-green-500" />
                        <p className="mt-2 text-sm text-gray-600">Blood Pressure</p>
                        <p className="text-2xl font-bold text-green-600">121/80</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="metabolic">
              <Card>
                <CardHeader>
                  <CardTitle>Metabolic Indicators</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadialBarChart 
                        innerRadius="20%" 
                        outerRadius="80%" 
                        data={metabolicData}
                        startAngle={180} 
                        endAngle={0}
                      >
                        <RadialBar
                          minAngle={15}
                          background
                          clockWise={true}
                          dataKey="value"
                        />
                        <Legend />
                        <Tooltip />
                      </RadialBarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="blood">
              <Card>
                <CardHeader>
                  <CardTitle>Blood Composition Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={bloodComposition}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="neuro">
              <Card>
                <CardHeader>
                  <CardTitle>Neurological Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <Brain className="h-8 w-8 mx-auto text-purple-500" />
                      <p className="mt-2 text-sm text-gray-600">Neural Response</p>
                      <p className="text-2xl font-bold text-purple-600">Normal</p>
                    </div>
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <Activity className="h-8 w-8 mx-auto text-indigo-500" />
                      <p className="mt-2 text-sm text-gray-600">Brain Activity</p>
                      <p className="text-2xl font-bold text-indigo-600">Stable</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthDashboard;