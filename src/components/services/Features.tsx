const features = [
  "Custom Website Designs [cite: 3]", "Mobile-Friendly Layouts [cite: 4]", 
  "Easy to Navigate [cite: 5]", "Clear and Neat Look [cite: 6]", 
  "Fast Loading Pages [cite: 8]", "Simple Maintenance [cite: 9]", 
  "Cross-Browser Support [cite: 10]", "Long-Term Support [cite: 11]"
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition">
              <div className="w-10 h-10 bg-blue-100 rounded-full mb-4 flex items-center justify-center">
                <span className="text-blue-600 font-bold">✓</span>
              </div>
              <h3 className="font-semibold text-slate-800">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}