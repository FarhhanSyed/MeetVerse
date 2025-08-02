import React from "react";
import { Play, Users, Shield, Clock, Video } from "lucide-react";

const MainSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 text-sm font-medium w-fit">
              <Video className="w-4 h-4 mr-2" />
              HD Video Calling
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Video Meetings
                <br />
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Made Simple
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Connect with anyone, anywhere with crystal-clear HD video,
                instant screen sharing, and seamless collaboration tools.
                Secure, reliable, and effortless.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                <Play className="w-5 h-5 mr-2" />
                Start Free Meeting
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg bg-white/10 text-white hover:bg-white/20 transition border border-white/20">
                Watch Demo
              </button>
            </div>

            <div className="flex gap-8 pt-8">
              {[
                { value: "99.9%", label: "Uptime" },
                { value: "<100ms", label: "Latency" },
                { value: "24/7", label: "Support" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 min-w-[120px]"
                >
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 mb-4 aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-white mx-auto mb-4 opacity-80" />
                    <p className="text-white/80 text-lg">
                      4 participants connected
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  {
                    initials: "JD",
                    name: "John Doe",
                    time: "9:00 AM",
                    colors: "from-blue-400 to-purple-500",
                  },
                  {
                    initials: "SW",
                    name: "Sarah Wilson",
                    time: "8:45 AM",
                    colors: "from-green-400 to-teal-500",
                  },
                ].map((user, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 flex items-center gap-3"
                  >
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${user.colors} rounded-full flex items-center justify-center text-white font-semibold text-sm`}
                    >
                      {user.initials}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">
                        {user.name}
                      </div>
                      <div className="text-gray-300 text-xs">
                        Joined at {user.time}
                      </div>
                    </div>
                    <div className="ml-auto w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-6">
                {[
                  {
                    icon: <Clock className="w-5 h-5 text-white" />,
                    label: "Real-time",
                  },
                  {
                    icon: <Shield className="w-5 h-5 text-white" />,
                    label: "Secure",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mb-2">
                      {item.icon}
                    </div>
                    <span className="text-xs text-gray-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
