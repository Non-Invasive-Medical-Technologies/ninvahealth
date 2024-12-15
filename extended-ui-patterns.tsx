import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  CheckCircle2, AlertTriangle, ArrowRight, 
  Heart, Activity, Clock, Shield
} from 'lucide-react';

const ExtendedPatterns = () => {
  const [validationState, setValidationState] = useState('idle');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const simulateValidation = () => {
    setValidationState('validating');
    setTimeout(() => setValidationState('success'), 2000);
  };

  const simulateProgress = () => {
    setLoading(true);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 0;
        }
        return prev + 20;
      });
    }, 1000);
  };

  return (
    <div className="space-y-12">
      {/* Form Validation Patterns */}
      <section>
        <h2 className="text-2xl font-semibold text-[#2F4B4C] mb-6">Form Validation Patterns</h2>
        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              {/* Real-time Validation */}
              <div>
                <label className="block text-sm font-medium text-[#2F4B4C] mb-2">
                  Blood Pressure Reading
                </label>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <input 
                      type="number"
                      placeholder="Systolic"
                      className={`w-full p-2 rounded border ${
                        validationState === 'success' 
                          ? 'border-green-500' 
                          : 'border-gray-300'
                      }`}
                      onChange={simulateValidation}
                    />
                    {validationState === 'success' && (
                      <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4" />
                        Valid reading
                      </p>
                    )}
                  </div>
                  <span className="self-center">/</span>
                  <div className="flex-1">
                    <input 
                      type="number"
                      placeholder="Diastolic"
                      className="w-full p-2 rounded border border-gray-300"
                    />
                  </div>
                </div>
              </div>

              {/* Error States */}
              <div>
                <label className="block text-sm font-medium text-[#2F4B4C] mb-2">
                  Heart Rate
                </label>
                <input 
                  type="number"
                  className="w-full p-2 rounded border border-red-500"
                  defaultValue="180"
                />
                <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                  <AlertTriangle className="h-4 w-4" />
                  Value outside normal range (60-100 BPM)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Animation Examples */}
      <section>
        <h2 className="text-2xl font-semibold text-[#2F4B4C] mb-6">Animation Library</h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Data Updates */}
          <Card>
            <CardHeader>
              <CardTitle>Data Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-4 py-1">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button 
                  className="w-full bg-[#182C2B]"
                  onClick={simulateProgress}
                >
                  Simulate Update
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Progress Indicators */}
          <Card>
            <CardHeader>
              <CardTitle>Progress Indicators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Linear Progress */}
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded">
                    <div 
                      className="h-2 bg-[#182C2B] rounded transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 text-right">{progress}%</p>
                </div>

                {/* Circular Progress */}
                <div className="flex justify-center">
                  <div className="relative h-16 w-16">
                    <svg className="transform -rotate-90 w-16 h-16">
                      <circle
                        className="text-gray-200"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="transparent"
                        r="30"
                        cx="32"
                        cy="32"
                      />
                      <circle
                        className="text-[#182C2B] transition-all duration-500"
                        strokeWidth="4"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="30"
                        cx="32"
                        cy="32"
                        style={{
                          strokeDasharray: `${2 * Math.PI * 30}`,
                          strokeDashoffset: `${2 * Math.PI * 30 * (1 - progress / 100)}`
                        }}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Accessibility Guidelines */}
      <section>
        <h2 className="text-2xl font-semibold text-[#2F4B4C] mb-6">Accessibility Guidelines</h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Color Contrast */}
          <Card>
            <CardHeader>
              <CardTitle>Color Contrast Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#182C2B]">
                  <p className="text-white">High contrast text (Passes WCAG AAA)</p>
                </div>
                <div className="p-4 rounded-lg bg-[#2F4B4C]">
                  <p className="text-white">Medium contrast text (Passes WCAG AA)</p>
                </div>
                <Alert className="border-[#182C2B]">
                  <AlertTitle>Accessible Alert</AlertTitle>
                  <AlertDescription>
                    Uses icons and colors to convey meaning, with text alternatives
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          {/* Focus States */}
          <Card>
            <CardHeader>
              <CardTitle>Focus Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button 
                  className="w-full bg-[#182C2B] focus:ring-2 focus:ring-offset-2 focus:ring-[#182C2B]"
                >
                  Visible Focus State
                </Button>
                <div 
                  tabIndex={0}
                  className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#182C2B]"
                >
                  <p>Interactive Element with Focus Ring</p>
                </div>
                <Button 
                  variant="outline"
                  className="w-full border-[#182C2B] text-[#182C2B] focus:ring-2 focus:ring-offset-2 focus:ring-[#182C2B]"
                >
                  Secondary Focus State
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Protocol Patterns */}
      <section>
        <h2 className="text-2xl font-semibold text-[#2F4B4C] mb-6">Emergency Protocols</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Critical Alert */}
              <Alert className="border-red-500 bg-red-50">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <AlertTitle className="text-red-700">Critical Alert</AlertTitle>
                <AlertDescription className="text-red-600">
                  Abnormal vital signs detected. Immediate attention required.
                </AlertDescription>
              </Alert>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <Button className="bg-red-600 hover:bg-red-700">
                  Contact Emergency Services
                </Button>
                <Button className="bg-[#182C2B]">
                  Notify Primary Physician
                </Button>
              </div>

              {/* Protocol Steps */}
              <div className="space-y-2">
                <h3 className="font-medium">Emergency Protocol Steps:</h3>
                <ol className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-[#182C2B] text-white flex items-center justify-center text-sm">
                      1
                    </span>
                    <span>Check vital signs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-[#182C2B] text-white flex items-center justify-center text-sm">
                      2
                    </span>
                    <span>Contact emergency services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-[#182C2B] text-white flex items-center justify-center text-sm">
                      3
                    </span>
                    <span>Notify primary care physician</span>
                  </li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default ExtendedPatterns;