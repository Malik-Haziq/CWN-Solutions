import type { CaseStudy } from "./home-data";

export function CaseStudyVisual({ type }: { type: CaseStudy["visual"] }) {
  if (type === "vault")
    return (
      <div className="flex h-full min-h-[360px] flex-col p-6 sm:p-8">
        <div className="flex items-center justify-between border-b border-border-subtle pb-5">
          <div>
            <div className="font-mono text-label uppercase text-text-muted">
              Family Vault
            </div>
            <div className="mt-2 font-display text-2xl font-bold text-text-primary">
              SafeHerit
            </div>
          </div>
          <div className="border border-accent bg-accent-muted px-3 py-2 font-mono text-[10px] uppercase text-accent-dark">
            Locked
          </div>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-5 pt-6 sm:grid-cols-[58fr_42fr]">
          <div className="space-y-3">
            {["Estate plan.pdf", "Asset records", "Beneficiary letters"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border border-border-subtle bg-bg-base p-4"
                >
                  <span className="font-body text-sm text-text-primary">
                    {item}
                  </span>
                  <span className="h-2 w-10 bg-accent" />
                </div>
              ),
            )}
          </div>
          <div className="border border-border-subtle bg-bg-base p-4">
            <div className="font-mono text-[10px] uppercase text-text-muted">
              Beneficiaries
            </div>
            <div className="mt-5 space-y-4">
              {[72, 52, 64].map((width) => (
                <div key={width} className="flex items-center gap-3">
                  <span className="h-8 w-8 border border-border-default bg-bg-surface" />
                  <span className="h-2 bg-border-strong" style={{ width }} />
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-border-subtle pt-4 font-mono text-[10px] uppercase text-accent-dark">
              Zero-knowledge encrypted
            </div>
          </div>
        </div>
      </div>
    );

  if (type === "chat")
    return (
      <div className="flex h-full min-h-[360px] flex-col p-6 sm:p-8">
        <div className="flex items-center justify-between border-b border-border-subtle pb-5">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center border border-border-default bg-bg-base font-display text-lg font-bold text-accent">
              A
            </span>
            <div>
              <div className="font-display text-2xl font-bold text-text-primary">
                Auxee AI
              </div>
              <div className="font-mono text-[10px] uppercase text-text-muted">
                Internal workspace
              </div>
            </div>
          </div>
          <div className="font-mono text-[10px] uppercase text-accent-dark">
            Private
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 pt-6">
          <div className="max-w-[78%] border border-border-subtle bg-bg-base p-4 font-body text-sm text-text-secondary">
            Summarize this account research for the strategy team.
          </div>
          <div className="ml-auto max-w-[82%] border border-accent bg-accent-muted p-4 font-body text-sm text-text-primary">
            Here is a private brief with risks, opportunities, and next-step
            questions.
          </div>
          <div className="mt-auto grid grid-cols-3 border border-border-subtle bg-bg-base font-mono text-[10px] uppercase text-text-muted">
            {["Secure", "Private", "Internal"].map((item) => (
              <span
                key={item}
                className="border-r border-border-subtle px-3 py-4 last:border-r-0"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    );

  if (type === "property")
    return (
      <div className="flex h-full min-h-[360px] flex-col p-6 sm:p-8">
        <div className="flex items-center justify-between border-b border-border-subtle pb-5">
          <div>
            <div className="font-display text-2xl font-bold text-text-primary">
              Operations Hub
            </div>
            <div className="mt-1 font-mono text-[10px] uppercase text-text-muted">
              Avian Hospitality
            </div>
          </div>
          <div className="border border-border-default px-3 py-2 font-mono text-[10px] uppercase text-text-secondary">
            4 properties
          </div>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-5 pt-6 sm:grid-cols-[48fr_52fr]">
          <div className="border border-border-subtle bg-bg-base p-4">
            <div className="font-mono text-[10px] uppercase text-text-muted">
              Booking calendar
            </div>
            <div className="mt-4 grid grid-cols-7 gap-2">
              {Array.from({ length: 21 }).map((_, index) => (
                <span
                  key={index}
                  className={`aspect-square border ${index % 5 === 0 ? "border-accent bg-accent-muted" : "border-border-subtle bg-bg-surface"}`}
                />
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <div className="grid grid-cols-3 gap-2">
              {["Ready", "Stay", "Clean"].map((item) => (
                <div
                  key={item}
                  className="border border-border-subtle bg-bg-base p-3"
                >
                  <div className="h-8 bg-accent-muted" />
                  <div className="mt-3 font-mono text-[10px] uppercase text-text-muted">
                    {item}
                  </div>
                </div>
              ))}
            </div>
            <div className="border border-border-subtle bg-bg-base p-4">
              <div className="font-mono text-[10px] uppercase text-text-muted">
                Guest message
              </div>
              <div className="mt-4 h-3 w-4/5 bg-border-default" />
              <div className="mt-3 h-3 w-2/3 bg-border-subtle" />
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="flex h-full min-h-[360px] flex-col p-6 sm:p-8">
      <div className="flex items-center justify-between border-b border-border-subtle pb-5">
        <div>
          <div className="font-display text-2xl font-bold text-text-primary">
            Travel Console
          </div>
          <div className="mt-1 font-mono text-[10px] uppercase text-text-muted">
            Sabre Corporation
          </div>
        </div>
        <div className="font-mono text-[10px] uppercase text-accent-dark">
          Global status
        </div>
      </div>
      <div className="grid flex-1 grid-cols-1 gap-5 pt-6 sm:grid-cols-[58fr_42fr]">
        <div className="border border-border-subtle bg-bg-base">
          {["Flight", "Hotel", "Agency", "Route"].map((row, index) => (
            <div
              key={row}
              className="grid grid-cols-[70px_1fr_56px] items-center border-b border-border-subtle px-4 py-4 last:border-b-0"
            >
              <span className="font-mono text-[10px] uppercase text-text-muted">
                {row}
              </span>
              <span className="h-2 w-4/5 bg-border-default" />
              <span
                className={
                  index === 1 ? "h-2 bg-accent" : "h-2 bg-border-strong"
                }
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <div className="relative flex-1 border border-border-subtle bg-bg-base">
            <div className="absolute left-[18%] top-[30%] h-10 w-20 border border-accent" />
            <div className="absolute right-[18%] top-[48%] h-12 w-16 border border-border-strong" />
            <div className="absolute bottom-[22%] left-[35%] h-2 w-24 bg-accent" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["99.9%", "24/7"].map((item) => (
              <div
                key={item}
                className="border border-border-subtle bg-bg-base p-3"
              >
                <div className="font-display text-xl font-bold text-accent">
                  {item}
                </div>
                <div className="font-mono text-[10px] uppercase text-text-muted">
                  status
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
