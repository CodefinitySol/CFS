'use client';

const ROW_ONE = [
  'AshGrove',
  'ChangeLab',
  'DAME KELLY HOLMES TRUST',
  'CP',
  'Escuela de Artes',
  'Acuity Scheduling',
];

const ROW_TWO = [
  'sme matters',
  'SCO Space',
  'LOOMIA',
  'lineslip',
  'THE COMMUNICATIONS NETWORK',
  'ReformerPilates',
];

export default function ClientMarquee() {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-24 pt-10 sm:pb-32 sm:pt-16">
      <div className="mx-auto max-w-[1600px] px-6 text-center sm:px-8 lg:px-12">
        {/* Header Content */}
        <div className="mb-16 flex flex-col items-center gap-6">
          <span className="inline-flex items-center rounded-full bg-[#506C834D] px-4 py-1.5 text-sm font-medium text-[#506C83]">
            <span className="mr-1.5 h-2 w-2 rounded-full bg-[#506c83]" />
            Partnerships
          </span>
          <h2 className="font-aeonik text-3xl font-normal text-[#1e293b] sm:text-4xl md:text-5xl">
            Our Amazing Clients
          </h2>
        </div>

        {/* Marquees */}
        <div className="flex flex-col gap-10 sm:gap-14">
          
          {/* Row 1 - Slower (Right to Left) */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className="animate-scroll flex w-fit items-center gap-16 sm:gap-24"
              style={{ '--animation-duration': '45s' } as React.CSSProperties}
            >
              {[...ROW_ONE, ...ROW_ONE, ...ROW_ONE, ...ROW_ONE].map((client, i) => (
                <div
                  key={`${client}-${i}`}
                  className="shrink-0 opacity-40 transition-opacity duration-300 hover:opacity-100"
                >
                  <span className="font-aeonik text-2xl font-bold text-slate-700 sm:text-3xl">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Faster (Left to Right) */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className="animate-scroll-reverse flex w-fit items-center gap-16 sm:gap-24"
              style={{ '--animation-duration': '25s' } as React.CSSProperties}
            >
              {[...ROW_TWO, ...ROW_TWO, ...ROW_TWO, ...ROW_TWO].map((client, i) => (
                <div
                  key={`${client}-${i}`}
                  className="shrink-0 opacity-40 transition-opacity duration-300 hover:opacity-100"
                >
                  <span className="font-aeonik text-2xl font-bold text-slate-700 sm:text-3xl">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
