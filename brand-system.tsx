import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Activity, MessageSquare } from 'lucide-react';

const BrandSystem = () => {
  const brandTokens = {
    colors: {
      primary: {
        main: '#26652C',      // Deep Green - Primary brand color
        secondary: '#8FD5CA',  // Sage Green - Secondary interactions
        accent: '#EAD0AD',    // Cream - Accent elements
        background: '#FFF8F0' // Off White - Background
      },
      supporting: {
        peach: '#FFB69E',     // Accent color for alerts/highlights
        lime: '#86C34E',      // Success states
        turquoise: '#4EC989', // Progress indicators
        mint: '#BBE2BB'       // Subtle backgrounds
      },
      neutral: {
        white: '#FFFFFF',
        gray100: '#FEFDF7',
        gray200: '#F5F5F5',
        gray300: '#E5E5E5',
        gray400: '#A3A3A3',
        gray500: '#737373'
      },
      semantic: {
        success: '#86C34E',
        warning: '#FFB69E',
        error: '#FF8A80',
        info: '#8FD5CA'
      }
    },
    typography: {
      heading: {
        h1: {
          size: '48px',
          weight: '700',
          lineHeight: '56px',
          letterSpacing: '-0.02em',
          font: '"Recife Display", serif'
        },
        h2: {
          size: '40px',
          weight: '700',
          lineHeight: '48px',
          letterSpacing: '-0.01em',
          font: '"Recife Display", serif'
        },
        h3: {
          size: '32px',
          weight: '600',
          lineHeight: '40px',
          font: '"Recife Display", serif'
        }
      },
      body: {
        large: {
          size: '18px',
          lineHeight: '28px',
          font: 'Inter, sans-serif'
        },
        regular: {
          size: '16px',
          lineHeight: '24px',
          font: 'Inter, sans-serif'
        },
        small: {
          size: '14px',
          lineHeight: '20px',
          font: 'Inter, sans-serif'
        }
      }
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '48px'
    },
    radius: {
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
      full: '9999px'
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-16">
      {/* Color System */}
      <section>
        <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: '"Recife Display", serif', color: brandTokens.colors.primary.main }}>
          Color System
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {/* Primary Colors */}
          <Card>
            <CardHeader>
              <CardTitle>Primary Colors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(brandTokens.colors.primary).map(([name, color]) => (
                <div key={name} className="flex items-center space-x-4">
                  <div 
                    className="w-16 h-16 rounded-lg"
                    style={{ backgroundColor: color }}
                  />
                  <div>
                    <p className="font-medium capitalize">{name}</p>
                    <p className="text-sm text-gray-500">{color}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Supporting Colors */}
          <Card>
            <CardHeader>
              <CardTitle>Supporting Colors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(brandTokens.colors.supporting).map(([name, color]) => (
                <div key={name} className="flex items-center space-x-4">
                  <div 
                    className="w-16 h-16 rounded-lg"
                    style={{ backgroundColor: color }}
                  />
                  <div>
                    <p className="font-medium capitalize">{name}</p>
                    <p className="text-sm text-gray-500">{color}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Button System */}
      <section>
        <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: '"Recife Display", serif', color: brandTokens.colors.primary.main }}>
          Button System
        </h2>
        <Card>
          <CardContent className="space-y-8 p-8">
            {/* Primary Buttons */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Primary Buttons</h3>
              <div className="flex gap-4">
                <Button 
                  className="bg-gradient-to-r from-[#26652C] to-[#4EC989] hover:from-[#26652C]/90 hover:to-[#4EC989]/90 text-white shadow-md"
                >
                  Primary Button
                </Button>
                <Button 
                  className="bg-gradient-to-r from-[#26652C] to-[#4EC989] hover:from-[#26652C]/90 hover:to-[#4EC989]/90 text-white opacity-50 cursor-not-allowed shadow-md"
                  disabled
                >
                  Disabled
                </Button>
                <Button 
                  className="bg-gradient-to-r from-[#26652C] to-[#4EC989] hover:from-[#26652C]/90 hover:to-[#4EC989]/90 text-white shadow-md"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  With Icon
                </Button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Secondary Buttons</h3>
              <div className="flex gap-4">
                <Button 
                  variant="outline"
                  className="border-2 border-[#8FD5CA] text-[#26652C] hover:bg-[#8FD5CA]/10 hover:border-[#26652C] transition-colors"
                >
                  Secondary Button
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-[#8FD5CA] text-[#26652C] opacity-50 cursor-not-allowed"
                  disabled
                >
                  Disabled
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-[#8FD5CA] text-[#26652C] hover:bg-[#8FD5CA]/10 hover:border-[#26652C] transition-colors"
                >
                  <Activity className="mr-2 h-4 w-4" />
                  With Icon
                </Button>
              </div>
            </div>

            {/* Tertiary Buttons */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Tertiary Buttons</h3>
              <div className="flex gap-4">
                <Button 
                  variant="ghost"
                  className="text-[#26652C] hover:bg-[#26652C]/10"
                >
                  Tertiary Button
                </Button>
                <Button 
                  variant="ghost"
                  className="text-[#26652C]"
                  disabled
                >
                  Disabled
                </Button>
                <Button 
                  variant="ghost"
                  className="text-[#26652C] hover:bg-[#26652C]/10"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  With Icon
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Card System */}
      <section>
        <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: '"Recife Display", serif', color: brandTokens.colors.primary.main }}>
          Card System
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {/* Primary Card */}
          <Card className="bg-white border border-[#E5E5E5]">
            <CardHeader>
              <CardTitle className="text-[#26652C]">Primary Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Standard card for content display</p>
            </CardContent>
          </Card>

          {/* Highlighted Card */}
          <Card className="bg-[#8FD5CA]/10 border border-[#8FD5CA]">
            <CardHeader>
              <CardTitle className="text-[#26652C]">Highlighted Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">For important information</p>
            </CardContent>
          </Card>

          {/* Interactive Card */}
          <Card className="bg-white border border-[#E5E5E5] hover:border-[#26652C] transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="text-[#26652C]">Interactive Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Clickable card with hover state</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Icon System */}
      <section>
        <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: '"Recife Display", serif', color: brandTokens.colors.primary.main }}>
          Icon System
        </h2>
        <Card>
          <CardContent className="p-8">
            <div className="grid grid-cols-4 gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="p-4 bg-[#8FD5CA]/10 rounded-lg">
                  <Heart className="h-6 w-6 text-[#26652C]" />
                </div>
                <span className="text-sm text-gray-600">Health</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-4 bg-[#8FD5CA]/10 rounded-lg">
                  <Activity className="h-6 w-6 text-[#26652C]" />
                </div>
                <span className="text-sm text-gray-600">Activity</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-4 bg-[#8FD5CA]/10 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-[#26652C]" />
                </div>
                <span className="text-sm text-gray-600">Messages</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default BrandSystem;