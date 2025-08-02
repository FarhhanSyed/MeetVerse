import React from "react";
import {
  Video,
  Users,
  Shield,
  Clock,
  Share2,
  MessageSquare,
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Video,
      title: "HD Video Calling",
      description:
        "Crystal-clear video quality up to 4K resolution with adaptive bitrate streaming",
    },
    {
      icon: Users,
      title: "Up to 1000 Participants",
      description:
        "Host large meetings with advanced participant management and breakout rooms",
    },
    {
      icon: Share2,
      title: "Screen Sharing",
      description:
        "Share your entire screen, specific windows, or browser tabs with one click",
    },
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description:
        "Bank-level security with AES-256 encryption for all your conversations",
    },
    {
      icon: MessageSquare,
      title: "Real-time Chat",
      description:
        "Send messages, files, and emojis during meetings with persistent chat history",
    },
    {
      icon: Clock,
      title: "Meeting Recording",
      description:
        "Record meetings automatically with cloud storage and easy sharing options",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-[#4D6AFF] to-[#9B5EFF] bg-clip-text text-transparent">
              Perfect Meetings
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to make your video meetings more
            productive, secure, and enjoyable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-[#F7F5FF] border border-transparent rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#4D6AFF] to-[#9B5EFF] rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-semibold rounded-lg bg-gradient-to-r from-[#4D6AFF] to-[#9B5EFF] text-white hover:brightness-110 transition">
            Try All Features Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
