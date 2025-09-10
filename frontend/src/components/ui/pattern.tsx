export default function Pattern({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-background relative text-gray-800">
  {/* Zigzag Lightning - Light Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 20px, var(--secondary) 20px, var(--foreground) 21px),
        repeating-linear-gradient(90deg, transparent, transparent 30px, var(--secondary) 30px, var(--foreground) 31px),
        repeating-linear-gradient(60deg, transparent, transparent 40px, var(--secondary) 40px, var(--foreground) 41px),
        repeating-linear-gradient(150deg, transparent, transparent 35px, var(--secondary) 35px, var(--foreground) 36px)
      `,
    }}
  />
  <div className="relative z-10 text-main">
    {children}
  </div>
</div>
  )
}
