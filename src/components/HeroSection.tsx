import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, Flame } from "lucide-react";
import institute from "../assets/institute.mp4";
import "../App.css";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const infoItems = [
    {
      label: "WHO THIS IS FOR",
      value: "Working Professionals",
    },
    {
      label: "READY TO MASTER",
      value: "Gen AI + Software Development",
    },
    {
      label: "LEARNING FORMAT",
      value: "Live Classes with 24/7 AI Support",
    },
    {
      label: "ADD-ON PROGRAM",
      value: "Campus Immersion with IIT-Roorkee",
    },
  ];

  const companies = [
    { name: "PayPal", color: "#003087" },
    { name: "Target", color: "#CC0000" },
    { name: "Adobe", color: "#FF0000" },
    { name: "Flipkart", color: "#2874F0" },
    { name: "Meta", color: "#0081FB" },
    { name: "Amazon", color: "#FF9900" },
    { name: "Microsoft", color: "#00A4EF" },
    { name: "Zomato", color: "#E23744" },
    { name: "Paytm", color: "#00BAF2" },
    { name: "Google", color: "#4285F4" },
    { name: "Razorpay", color: "#3395FF" },
    { name: "Vimeo", color: "#1AB7EA" },
    { name: "Walmart", color: "#0071CE" },
  ];

  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  const startScroll = (ref: React.RefObject<HTMLDivElement>, reverse = false) => {
    const container = ref.current;
    if (!container) return;

    const speed = 0.5;
    let scrollPos = reverse ? container.scrollWidth / 2 : 0;

    const loop = () => {
      if (!container) return;

      // Update scroll position
      scrollPos += reverse ? speed : -speed;

      // Reset for seamless loop
      const resetPoint = container.scrollWidth / 2;
      if (!reverse && scrollPos <= -resetPoint) scrollPos = 0;
      if (reverse && scrollPos >= resetPoint) scrollPos = 0;

      container.scrollLeft = scrollPos;
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  };

  useEffect(() => {
    startScroll(scrollRef1);        // normal scroll
    startScroll(scrollRef2, true);  // reverse scroll
  }, []);

  // Duplicate content for seamless loop
  const row1 = [...companies, ...companies];
  const row2 = [...companies, ...companies];

  return (
    <section className="flex flex-col">
      {/* Hero Section with Video Background */}
      <div className="relative h-[110vh]">
        {/* Background Video */}
        <div className="absolute inset-0 z-[-1]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={institute} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Gradient Overlay for better readability */}
        <div className="absolute pd-32px inset-0 bg-gradient-to-br from-[hsl(var(--hero-gradient-start))]/80 to-[hsl(var(--hero-gradient-end))]/80"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-start h-full">
            {/* Left Content */}
            <div className="space-y-8 text-white">
              {/* Badge */}
              <div className="inline-block bg-black/40 backdrop-blur-sm px-4 py-2 rounded-md text-sm">
                Join our 37,000+ Strong Tech Community
              </div>

              {/* Headline */}
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Become Future Ready <br />
                Software Developer <br />
                <span className="block text-accent">with AI Skills</span>
              </h1>

              {/* Benefits */}
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Build real-world projects",
                    "Master DSA & System Design",
                    "1500+ hiring partners",
                    "Exclusive classes from IIT-R",
                  ].map((text) => (
                    <div className="flex items-start gap-3" key={text}>
                      <div className="bg-white/10 backdrop-blur-sm p-1 rounded mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="accent" size="lg" className="text-base px-8">
                  Book a Live Class →
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="text-base px-8"
                >
                  Explore Academy
                </Button>
              </div>

              {/* Batch Info */}
              <p className="text-sm pt-4">
                Next batch starts in{" "}
                <span className="text-yellow-400 font-bold text-base">
                  OCTOBER
                </span>
              </p>
            </div>

            {/* Right Form Card */}
            <div className="bg-white rounded-lg shadow-2xl p-8 lg:p-10 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl lg:text-3xl font-bold text-card-foreground">
                  Book a <span className="text-accent">Free Live Session!</span>
                </h2>
                <p className="text-muted-foreground">
                  With Scaler Founders & Top Instructors
                </p>
              </div>

              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Name"
                  className="w-full h-12 text-base"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full h-12 text-base"
                />

                <div className="flex gap-2">
                  <Select defaultValue="+91">
                    <SelectTrigger className="w-24 h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+91">🇮🇳 +91</SelectItem>
                      <SelectItem value="+1">🇺🇸 +1</SelectItem>
                      <SelectItem value="+44">🇬🇧 +44</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    type="tel"
                    placeholder="Phone"
                    className="flex-1 h-12 text-base"
                  />
                </div>

                <Button
                  variant="accent"
                  size="lg"
                  className="w-full h-12 text-base"
                >
                  Book Free Live Class
                </Button>

                <div className="flex items-center justify-center gap-2 pt-2">
                  <Flame className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-semibold text-card-foreground">
                    10k+ Enrolled
                  </span>
                </div>

                <p className="text-xs text-muted-foreground text-center pt-2">
                  By creating an account I have read and agree to Scaler's{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[90%] pd-32">
          <div className="max-w-7xl bg-white rounded-2xl shadow-2xl overflow-hidden transition-transform duration-500 ease-out hover:scale-105 hover:shadow-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {infoItems.map((item, index) => (
                <div
                  key={index}
                  className={`p-8 transition-transform duration-300 hover:scale-105 ${
                    index !== infoItems.length - 1
                      ? "border-r border-border last:border-r-0"
                      : ""
                  }`}
                >
                  <h3 className="text-xs font-medium tracking-wider text-muted-foreground uppercase mb-3">
                    {item.label}
                  </h3>
                  <p className="text-lg font-bold text-foreground leading-tight">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Info Section - Below Video */}

      {/* Company Logos Section - Below Info */}
      <div className="bg-white py-[100px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h6 className="color-gray-100 text-foreground mb-2">
              Our Alumni Work At <span className="text-accent">1500+</span>{" "}
              Companies
            </h6>
          </div>

          {/* Row 1 */}
          <div className="space-y-8">
            {/* Row 1 */}
            <div
              ref={scrollRef1}
              className="flex overflow-x-hidden py-4 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex w-max">
                {row1.map((company, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-sm border border-border hover:shadow-lg hover:scale-105 transition-all  mx-4 px-6 py-4"
                  >
                    <span
                      className="font-semibold text-xl"
                      style={{ color: company.color }}
                    >
                      {company.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 */}
            <div
              ref={scrollRef2}
              className="flex overflow-x-hidden py-4 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex w-max">
                {row2.map((company, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-sm border border-border hover:shadow-lg hover:scale-105 transition-all mx-4 px-6 py-4"
                  >
                    <span
                      className="font-semibold text-xl"
                      style={{ color: company.color }}
                    >
                      {company.name}
                    </span>
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

export default HeroSection;
