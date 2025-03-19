
import React, { useState, useEffect } from 'react';
import { removeBackground, loadImage } from '../utils/imageUtils';
import { useToast } from '../hooks/use-toast';

const LogoProcessor = ({ imageSrc, className }: { imageSrc: string; className?: string }) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const processImage = async () => {
      try {
        // Fetch the image
        const response = await fetch(imageSrc);
        const blob = await response.blob();
        
        // Load the image
        const img = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(img);
        
        // Create URL for the processed image
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(processedUrl);
      } catch (error) {
        console.error('Error processing image:', error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "No se pudo procesar la imagen. Por favor, inténtelo de nuevo.",
        });
      }
    };

    if (imageSrc) {
      processImage();
    }

    // Cleanup
    return () => {
      if (processedImageUrl) {
        URL.revokeObjectURL(processedImageUrl);
      }
    };
  }, [imageSrc, toast]);

  return (
    <img
      src={processedImageUrl || imageSrc}
      alt="TechLinux Solutions Logo"
      className={className}
    />
  );
};

export default LogoProcessor;
