import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Activity, MessageSquare, Plus } from 'lucide-react';

const NinvaBrandColors = () => {
  // Brand Colors
  const brandColors = {
    main: {
      primary: '#26652C',    // Deep Green
      secondary: '#EAD0AD',  // Cream
      tertiary: '#FFF8F0'    // Off White
    },
    accent: {
      sage: '#8FD5CA',      // Sage Green
      peach: '#FFB69E',     // Peach
      light: '#FEFDF7'      // Light Gray
    },
    additional: {
      lime: '#86C34E',      // Lime Green
      turquoise: '#4EC989', // Turquoise
      mint: '#BBE2BB'       // Mint Green
    }
  };

  return (
    <div className="space-y-12">
      {/* Color System Overview */}
      <section>
        <h2 className="text-2xl font-bold mb-6" style={{ color: brandColors.main.primary }}>
          Ninva Health Color System
        </h2>
        
        <div className="grid grid-cols-3 gap-8">
          {/* Main Brand Colors */}
          <Card>
            <CardHeader>
              <CardTitle>Main Brand Colors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(brandColors.main).map(([name, color]) => (
                <div key={name} className="space-y-2">
                  <div 
                    className="h-16 rounded-lg"
                    style={{ backgroundColor: color }}
                  />
                  <div className="flex justify-between">
                    <span className="font-medium capitalize">{name}</span>
                    <span className="text-sm text-gray-500">{color}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Accent Colors */}
          <Card>
            <CardHeader>
              <CardTitle>Accent Colors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(brandColors.accent).map(([name, color]) => (
                <div key={name} className="space-y-2">
                  <div 
                    className="h-16 rounded-lg"
                    style={{ backgroundColor: color }}
                  />
                  <div className="flex justify-between">
                    <span className="font-medium capitalize">{name}</span>
                    <span className="text-sm text-gray-500">{color}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Additional Colors */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Colors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(brandColors.additional).map(([name, color]) => (
                <div key={name} className="space-y-2">
                  <div 
                    className="h-16 rounded-lg"
                    style={{ backgroundColor: color }}
                  />
                  <div className="flex justify-between">
                    <span className="font-medium capitalize">{name}</span>
                    <span className="text-sm text-gray-500">{color}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* UI Examples */}
      <section className="grid grid-cols-2 gap-8">
        {/* Health Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Health Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="p-4 rounded-lg text-white"
                style={{ backgroundColor: brandColors.main.primary }}
              >
                <div className="flex justify-between items-center">
                  <Heart className="h-6 w-6" />
                  <div className="text-right">
                    <div className="text-2xl font-bold">72</div>
                    <div className="text-sm">BPM</div>
                  </div>
                </div>
              </div>
              <div 
                className="p-4 rounded-lg"
                style={{ 
                  backgroundColor: brandColors.accent.sage,
                  color: brandColors.main.primary
                }}
              >
                <div className="flex justify-between items-center">
                  <Activity className="h-6 w-6" />
                  <div className="text-right">
                    <div className="text-2xl font-bold">8.2k</div>
                    <div className="text-sm">Steps</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <Card>
          <CardHeader>
            <CardTitle>Chat Interface</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* AI Message */}
              <div className="flex gap-3">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: brandColors.main.primary }}
                >
                  <MessageSquare className="h-4 w-4" />
                </div>
                <div 
                  className="flex-1 p-3 rounded-lg"
                  style={{ 
                    backgroundColor: brandColors.main.secondary,
                    color: brandColors.main.primary
                  }}
                >
                  <p>Your health metrics look great today!</p>
                </div>
              </div>
              {/* User Message */}
              <div className="flex gap-3 justify-end">
                <div 
                  className="max-w-[80%] p-3 rounded-lg text-white"
                  style={{ backgroundColor: brandColors.additional.turquoise }}
                >
                  <p>Thanks for the update!</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Button Examples */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Button Styles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button 
                style={{ 
                  backgroundColor: brandColors.main.primary,
                  color: 'white'
                }}
              >
                Primary Action
              </Button>
              <Button 
                variant="outline"
                style={{ 
                  borderColor: brandColors.main.primary,
                  color: brandColors.main.primary
                }}
              >
                Secondary Action
              </Button>
              <Button 
                style={{ 
                  backgroundColor: brandColors.additional.turquoise,
                  color: 'white'
                }}
              >
                Accent Action
              </Button>
              <Button 
                variant="ghost"
                style={{ color: brandColors.main.primary }}
              >
                Ghost Button
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default NinvaBrandColors;