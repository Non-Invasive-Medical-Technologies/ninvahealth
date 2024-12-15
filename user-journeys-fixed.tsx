import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, User, UserCog, Building2, 
  Activity, Heart, MessageSquare, FileText 
} from 'lucide-react';

const UserJourneys = () => {
  const journeyData = {
    patient: {
      title: "Patient Journey",
      icon: User,
      steps: [
        {
          title: "Onboarding",
          actions: [
            "Device setup",
            "App installation",
            "Profile creation",
            "Health goals setting"
          ]
        },
        {
          title: "Daily Usage",
          actions: [
            "Health monitoring",
            "Data review",
            "AI insights",
            "Activity tracking"
          ]
        },
        {
          title: "Healthcare Interaction",
          actions: [
            "Doctor consultations",
            "Health reports",
            "Prescription management",
            "Appointment scheduling"
          ]
        }
      ]
    },
    doctor: {
      title: "Doctor Journey",
      icon: UserCog,
      steps: [
        {
          title: "Setup",
          actions: [
            "Platform registration",
            "Patient connection",
            "Dashboard customization",
            "Alert configuration"
          ]
        },
        {
          title: "Patient Management",
          actions: [
            "Health monitoring",
            "Data analysis",
            "Treatment planning",
            "Report generation"
          ]
        },
        {
          title: "Care Delivery",
          actions: [
            "Telemedicine sessions",
            "Prescription updates",
            "Follow-up scheduling",
            "Care coordination"
          ]
        }
      ]
    },
    hospital: {
      title: "Hospital Journey",
      icon: Building2,
      steps: [
        {
          title: "Integration",
          actions: [
            "System setup",
            "Staff onboarding",
            "Workflow integration",
            "Data synchronization"
          ]
        },
        {
          title: "Operations",
          actions: [
            "Patient monitoring",
            "Resource management",
            "Care coordination",
            "Quality metrics"
          ]
        },
        {
          title: "Analytics",
          actions: [
            "Performance tracking",
            "Outcome analysis",
            "Efficiency metrics",
            "Reporting"
          ]
        }
      ]
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-12">
      {/* User Journeys */}
      {Object.entries(journeyData).map(([key, journey]) => (
        <Card key={key} className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#8FD5CA] flex items-center justify-center text-[#26652C]">
                {React.createElement(journey.icon, { size: 24 })}
              </div>
              <CardTitle>{journey.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {journey.steps.map((step, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#26652C] text-white flex items-center justify-center">
                      {index + 1}
                    </div>
                    <h3 className="font-medium text-[#26652C]">{step.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {step.actions.map((action, actionIndex) => (
                      <div 
                        key={actionIndex}
                        className="flex items-center gap-2 p-2 bg-[#8FD5CA]/10 rounded"
                      >
                        <ArrowRight className="w-4 h-4 text-[#26652C]" />
                        <span>{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Interaction Flows */}
      <section>
        <h2 className="text-2xl font-bold text-[#26652C] mb-6">Key Interaction Flows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Health Monitoring Flow */}
          <Card>
            <CardHeader>
              <CardTitle>Health Monitoring Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { icon: Activity, label: "Data Collection" },
                  { icon: Heart, label: "Analysis" },
                  { icon: MessageSquare, label: "AI Insights" }
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    {React.createElement(step.icon, { 
                      className: "w-6 h-6 text-[#26652C]" 
                    })}
                    <div className="flex-1 p-4 bg-[#8FD5CA]/20 rounded-lg">
                      <span className="font-medium">{step.label}</span>
                    </div>
                    {index < 2 && <ArrowRight className="w-6 h-6 text-[#26652C]" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Care Coordination Flow */}
          <Card>
            <CardHeader>
              <CardTitle>Care Coordination Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { icon: User, label: "Patient Input" },
                  { icon: UserCog, label: "Doctor Review" },
                  { icon: FileText, label: "Care Plan" }
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    {React.createElement(step.icon, { 
                      className: "w-6 h-6 text-[#26652C]" 
                    })}
                    <div className="flex-1 p-4 bg-[#8FD5CA]/20 rounded-lg">
                      <span className="font-medium">{step.label}</span>
                    </div>
                    {index < 2 && <ArrowRight className="w-6 h-6 text-[#26652C]" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default UserJourneys;