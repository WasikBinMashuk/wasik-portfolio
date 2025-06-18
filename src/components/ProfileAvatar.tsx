
import React, { useState, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Upload, Sparkles } from 'lucide-react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';
import { useToast } from '@/hooks/use-toast';

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showUpload?: boolean;
  defaultImage?: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ 
  size = 'xl', 
  showUpload = false,
  defaultImage = '/myphoto.png'
}) => {
  const [currentImage, setCurrentImage] = useState<string>(defaultImage);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const sizeClasses = {
    sm: 'h-16 w-16',
    md: 'h-24 w-24',
    lg: 'h-32 w-32',
    xl: 'h-80 w-80'
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please select an image file.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    try {
      // Load the image
      const imageElement = await loadImage(file);
      
      // Remove background
      const processedBlob = await removeBackground(imageElement);
      
      // Create object URL for the processed image
      const processedImageUrl = URL.createObjectURL(processedBlob);
      setCurrentImage(processedImageUrl);
      
      toast({
        title: "Success!",
        description: "Background removed and image updated successfully.",
      });
    } catch (error) {
      console.error('Error processing image:', error);
      toast({
        title: "Processing failed",
        description: "Failed to process the image. Using original image.",
        variant: "destructive",
      });
      
      // Fallback to original image
      const originalImageUrl = URL.createObjectURL(file);
      setCurrentImage(originalImageUrl);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="relative group">
      <div className={`relative ${sizeClasses[size]} mx-auto`}>
        {/* Breathing underglow gradient animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full opacity-30 blur-2xl animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 blur-xl animate-pulse" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-400 to-pink-400 rounded-full opacity-25 blur-lg animate-pulse" style={{animationDelay: '2s', animationDuration: '4s'}}></div>
        
        {/* Slim animated border rings */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full opacity-40 animate-spin" style={{animationDuration: '10s'}}></div>
        <div className="absolute inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-30 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        
        {/* Avatar container with slim border */}
        <div className="absolute inset-2 rounded-full overflow-hidden border border-white/20 shadow-2xl backdrop-blur-sm">
          <Avatar className="w-full h-full">
            <AvatarImage 
              src={currentImage} 
              alt="Wasik Bin Mashuk Pronoy"
              className="object-cover object-center"
            />
            <AvatarFallback className="text-4xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              WP
            </AvatarFallback>
          </Avatar>
          
          {/* Gradient overlay for theme matching */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 pointer-events-none"></div>
        </div>

        {/* Upload button overlay */}
        {showUpload && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-2 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/20"
                onClick={() => fileInputRef.current?.click()}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <Sparkles className="h-4 w-4 animate-spin" />
                ) : (
                  <Upload className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Hidden file input */}
      {showUpload && (
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      )}

      {/* Processing indicator */}
      {isProcessing && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 animate-spin" />
            <span>Processing image...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;
