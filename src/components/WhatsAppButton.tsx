
import { MessageCircle } from "lucide-react";
import { cn } from "../lib/utils";
// Only useState for bubble, no scroll logic
import { useState } from "react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  testimonialCount?: number;
}

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Hi Mwaki Denis! I love your portfolio and would like to discuss a potential project. Are you available?",
  testimonialCount = 25
}: WhatsAppButtonProps) => {
  // Remove scroll-based visibility
  const [showBubble, setShowBubble] = useState(false);

  // Only show the bubble after 2 seconds
  React.useEffect(() => {
    const bubbleTimer = setTimeout(() => {
      setShowBubble(true);
    }, 2000);
    return () => clearTimeout(bubbleTimer);
  }, []);

  const handleClick = () => {
    // Format the WhatsApp URL with phone number and encoded message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed left-6 bottom-6 z-50 flex items-end gap-3">
      {/* Text bubble - now clickable */}
      <div 
        onClick={handleClick}
        className={cn(
          "max-w-[200px] bg-white dark:bg-gray-800 p-3 rounded-xl shadow-md text-sm transition-all duration-300 relative cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700",
          showBubble ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-20px] pointer-events-none"
        )}
      >
        <p className="dark:text-white">Chat directly with me on WhatsApp! <span className="text-[blue] dark:text-[lightblue]">✓</span></p>
        <div className="absolute bottom-3 right-[-8px] w-4 h-4 bg-white dark:bg-gray-800 transform rotate-45"></div>
      </div>
      
      <div className="relative">
        {/* Badge showing testimonial count has been removed */}
        
        <button
          onClick={handleClick}
          className={cn(
            "p-3.5 rounded-full bg-[#25D366] text-black shadow-lg transition-all duration-300 flex items-center justify-center",
            "hover:scale-110 animate-bounce-slow",
            "opacity-100 translate-y-0"
          )}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} className="fill-white" />
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;

