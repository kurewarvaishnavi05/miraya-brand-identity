export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-miraya-white flex pt-20">
      {/* Left Form Area */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96 py-12">
          {children}
        </div>
      </div>
      
      {/* Right Image Area */}
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 h-full w-full object-cover bg-miraya-black/5" />
        <div 
          className="absolute inset-0 h-full w-full object-cover bg-center bg-no-repeat bg-cover opacity-80"
          style={{ backgroundImage: "url('/categories/lehenga-v4.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-miraya-black/60 to-transparent" />
        
        {/* Luxury Brand overlay */}
        <div className="absolute bottom-20 left-20 z-10">
          <h2 className="text-4xl font-serif text-miraya-white mb-2 tracking-wide">
            Elegance Personified
          </h2>
          <p className="text-miraya-white/80 font-sans text-lg font-light tracking-wide max-w-md">
            Join the exclusive Miraya collective. Discover handcrafted luxury and personalized styling.
          </p>
        </div>
      </div>
    </div>
  );
}
