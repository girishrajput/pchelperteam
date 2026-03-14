const steps = [
  "Understanding Requirements [cite: 53]", "Planning the Layout [cite: 54]",
  "Designing the Pages [cite: 55]", "Development [cite: 59]",
  "Testing [cite: 60]", "Final Launch [cite: 61]", "Support and Updates [cite: 62]"
];

export default function Process() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Web Design Process [cite: 50]</h2>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 text-center relative z-10">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                {i + 1}
              </div>
              <p className="text-sm font-semibold">{step}</p>
            </div>
          ))}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-slate-200 " />
        </div>
      </div>
    </section>
  );
}