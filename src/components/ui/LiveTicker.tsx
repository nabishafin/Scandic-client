export default function LiveTicker() {
  const stats = [
    { label: 'Price', value: '$2.45' },
    { label: 'Supply', value: '500M' },
    { label: 'Market Cap', value: '$1.2B' }
  ];

  return (
    <div className=" flex items-center justify-center p-8">
      <div className="bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl px-8 py-6 flex gap-12 shadow-2xl">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="text-neutral-500 text-xs font-medium tracking-wide uppercase">
              {stat.label}
            </div>
            <div className="text-yellow-600 text-2xl font-semibold tracking-tight">
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  ); ``
}