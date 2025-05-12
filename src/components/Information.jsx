import React from 'react';

function Information() {
  return (
    <section className="w-full bg-slate-200">
      <div className="mx-auto max-w-8xl divide-x bg-slate-300 flex text-center text-sm font-medium mt-2">
        <div className="flex-1 py-6 space-y-1">
          <h3 className="text-lg font-semibold">Dining</h3>
          <p>On‑site restaurant</p>
          <p>Room service</p>
        </div>
        <div className="flex-1 py-6 space-y-1">
          <h3 className="text-lg font-semibold">Fitness and recreation</h3>
          <p>Outdoor pool</p>
          <p>Fitness center</p>
        </div>
        <div className="flex-1 py-6 space-y-1">
          <h3 className="text-lg font-semibold">Arrival time</h3>
          <p>Check‑in: 3 pm</p>
          <p>Check‑out: 12 pm</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl flex divide-x divide-slate-400/60">
        <div className="w-full md:w-1/2 p-8 space-y-4">
          <h2 className="text-2xl font-semibold">
            A luxurious stay by Playa Del Carmen
          </h2>
          <p className="text-sm leading-relaxed">
            Our hotel is two blocks from white sand beaches and just close
            enough to the excitement of Playa Del Carmen&apos;s famous Fifth
            Avenue. Spend a relaxed afternoon in our rooftop infinity pool,
            featuring a panoramic ocean view, cabanas, and sun loungers. The
            ferry to Cozumel is half a kilometer away.
          </p>
        </div>

        <div className="w-full md:w-1/2 p-8">
          <h3 className="text-xl font-semibold mb-6">Our amenities</h3>
          <div className="grid grid-cols-2 gap-y-4 text-sm">
            <p>Connecting Rooms</p>
            <p>Free WiFi</p>
            <p>Digital Key</p>
            <p>Concierge</p>
            <p>Non‑smoking rooms</p>
            <p>Room Service</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Information;
