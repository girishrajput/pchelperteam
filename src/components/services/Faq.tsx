const faqs = [
  "Why do I need a professional website? [cite: 64]",
  "How much does website designing cost? [cite: 65]",
  "How long does it take? [cite: 66]",
  "Will my website be mobile-friendly? [cite: 67]",
  "Can I update content myself? [cite: 68]"
];

export default function FAQ() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions [cite: 63]</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white border border-slate-200 rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                {faq}
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 text-sm">
                We provide custom answers to ensure your business goals are met. [cite: 13, 36]
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}