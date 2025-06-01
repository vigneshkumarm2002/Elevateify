export default function CTA() {
  return (
    <div className="relative isolate overflow-hidden bg-black my-24 max-w-7xl mx-auto rounded-xl">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl font-bricolage-bold">
            Let's Elevate your brand today.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg/8 text-gray-300">
            Transform your brand's digital presence with our comprehensive suite
            of design and development services. From strategy to execution,
            we'll help you stand out in today's competitive market.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="mailto:info@elevateify.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center gap-2"
            >
              START PROJECT
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
      >
        <circle
          r={512}
          cx={512}
          cy={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#F472B6" />
            <stop offset={1} stopColor="#EC4899" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
