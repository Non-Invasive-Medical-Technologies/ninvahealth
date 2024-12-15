import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Tabs, TabsContent, TabsList, TabsTrigger 
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  Heart, Activity, FileText, Clock, 
  Calendar, AlertTriangle, CheckCircle2, 
  User, Pill, ChevronRight, Plus 
} from 'lucide-react';

const HealthcareComponents = () => {
  // Sample patient data
  const patientData = {
    name: "Jane Doe",
    id: "P-123456",
    age: 45,
    lastVisit: "2024-03-15"
  };

  // Sample medication data
  const medications = [
    { name: "Medication A", dosage: "10mg", frequency: "Daily", time: "8:00 AM" },
    { name: "Medication B", dosage: "5mg", frequency: "Twice daily", time: "8:00 AM, 8:00 PM" }
  ];

  // Sample diagnostic data
  const diagnostics = [
    { test: "Blood Pressure", value: "120/80", status: "Normal" },
    { test: "Heart Rate", value: "72", status: "Normal" },
    { test: "Blood Sugar", value: "95", status: "Normal" }
  ];

  return (
    <div className="space-y-8">
      {/* Patient Records View */}
      <section>
        <h2 className="text-2xl font-semibold text-[#2F4B4C] mb-4">Patient Records</h2>
        <Card>
          <CardHeader className="border-b">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-[#182C2B] rounded-full flex items-center justify-center">
                  <User className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{patientData.name}</h3>
                  <p className="text-gray-500">ID: {patientData.id}</p>
                </div>
              </div>
              <Button 
                variant="outline"
                className="border-[#182C2B] text-[#182C2B]"
              >
                Edit Profile
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Age</p>
                <p className="text-lg font-semibold">{patientData.age} years</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Last Visit</p>
                <p className="text-lg font-semibold">{patientData.lastVisit}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Next Appointment</p>
                <p className="text-lg font-semibold">2024-03-30</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Diagnostic Reports */}
      <section>
        <h2 className="text-2xl font-semibold text-[#2F4B4C] mb-4">Diagnostic Reports</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              {diagnostics.map((diagnostic, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h4 className="font-medium">{diagnostic.test}</h4>
                    <p className="text-lg font-semibold">{diagnostic.value}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    diagnostic.status === 'Normal' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {diagnostic.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Treatment Plans */}
      <section>
        <h2 className="text-2xl font-semibold text-[#2F4B4C] mb-4">Treatment Plan</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Current Treatment Plan</h3>
                <Button className="bg-[#182C2B] text-white">
                  Update Plan
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Treatment Goals</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-500 h-4 w-4" />
                      <span>Reduce blood pressure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-500 h-4 w-4" />
                      <span>Improve heart rate variability</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Next Steps</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Clock className="text-[#182C2B] h-4 w-4" />
                      <span>Follow-up appointment in 2 weeks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Activity className="text-[#182C2B] h-4 w-4" />
                      <span>Daily vital signs monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Medication Tracker */}
      <section>
        <h2 className="text-2xl font-semibold text-[#2F4B4C] mb-4">Medication Tracker</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Current Medications</h3>
                <Button 
                  variant="outline" 
                  className="border-[#182C2B] text-[#182C2B]"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Medication
                </Button>
              </div>
              <div className="space-y-4">
                {medications.map((med, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 bg-[#182C2B]/10 rounded-lg flex items-center justify-center">
                        <Pill className="text-[#182C2B]" />
                      </div>
                      <div>
                        <h4 className="font-medium">{med.name}</h4>
                        <p className="text-sm text-gray-500">
                          {med.dosage} - {med.frequency}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Next Dose</p>
                      <p className="text-sm text-gray-500">{med.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Emergency Protocols */}
      <section>
        <h2 className="text-2xl font-semibold text-[#2F4B4C] mb-4">Emergency Protocols</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="text-red-500" />
                  <h4 className="font-medium text-red-700">Emergency Contact Protocol</h4>
                </div>
                <p className="text-red-600">
                  If critical values detected, immediately contact emergency services and primary physician.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Primary Contact</h4>
                  <p className="text-sm">Dr. Smith</p>
                  <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Emergency Services</h4>
                  <p className="text-sm">Local Emergency</p>
                  <p className="text-sm text-gray-500">911</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default HealthcareComponents;