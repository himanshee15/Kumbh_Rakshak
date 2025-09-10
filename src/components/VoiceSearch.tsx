import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

export const VoiceSearch: React.FC = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const languageMap = {
    'en': 'en-US',
    'hi': 'hi-IN',
    'bn': 'bn-IN', 
    'te': 'te-IN',
    'mr': 'mr-IN'
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
        await processAudio(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      
      toast({
        title: "Recording Started",
        description: "Speak your query now...",
      });
    } catch (error) {
      console.error('Error starting recording:', error);
      toast({
        title: "Recording Error",
        description: "Could not access microphone. Please check permissions.",
        variant: "destructive",
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsProcessing(true);
    }
  };

  const processAudio = async (audioBlob: Blob) => {
    try {
      // Convert blob to base64
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Audio = (reader.result as string).split(',')[1];
        
        // Here you would typically send to your speech-to-text service
        // For now, we'll simulate the process
        setTimeout(() => {
          setIsProcessing(false);
          toast({
            title: "Voice Search Complete",
            description: "Your voice query has been processed.",
          });
        }, 2000);
      };
      reader.readAsDataURL(audioBlob);
      
    } catch (error) {
      console.error('Error processing audio:', error);
      setIsProcessing(false);
      toast({
        title: "Processing Error",
        description: "Could not process your voice query.",
        variant: "destructive",
      });
    }
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = languageMap[language] || 'en-US';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2">
      <Button
        size="lg"
        variant={isRecording ? "destructive" : "default"}
        className={`rounded-full h-14 w-14 shadow-lg ${
          isRecording ? 'animate-pulse' : ''
        } ${isProcessing ? 'opacity-50' : ''}`}
        onClick={isRecording ? stopRecording : startRecording}
        disabled={isProcessing}
      >
        {isProcessing ? (
          <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent" />
        ) : isRecording ? (
          <MicOff className="h-6 w-6" />
        ) : (
          <Mic className="h-6 w-6" />
        )}
      </Button>
      
      <Button
        size="sm"
        variant="outline"
        className="rounded-full h-10 w-10 shadow-lg"
        onClick={() => speakText('Welcome to Kumbh Rakshak. How can I help you today?')}
      >
        <Volume2 className="h-4 w-4" />
      </Button>
    </div>
  );
};