import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-muted-foreground">Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-2 fill-current" />
            <span className="text-muted-foreground">by Utsav Sahu</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 Utsav Sahu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};