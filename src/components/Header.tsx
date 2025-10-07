import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="w-full bg-gradient-to-r from-[hsl(var(--banner-gradient-start))] to-[hsl(var(--banner-gradient-end))] py-3 px-4 text-center">
        <p className="text-white text-sm">
          Need Help? Talk to our Academic Advisors{" "}
          <a href="#" className="underline font-semibold hover:opacity-80">
            Request a Call →
          </a>
        </p>
      </div>

      {/* Navigation */}
      <header className="w-full bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="text-white font-bold text-xl flex items-center gap-2">
                <span className="bg-white text-black px-2 py-1 rounded">SCALER</span>
                <span className="text-sm">Academy</span>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
                CURRICULUM
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
                WHY SCALER
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
                COMMUNITY
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
                ALUMNI
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
                FAQs
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">
                Login
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6">
                Request a Callback
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
