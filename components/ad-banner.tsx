export function AdBanner({ type }: { type: 'leaderboard' | 'rectangle' }) {
  const dimensions = type === 'leaderboard' 
    ? 'h-[90px] w-full max-w-[728px]' 
    : 'h-[250px] w-full max-w-[300px]'
  
  return (
    <>
      {/* AdSense: replace this div */}
      <div 
        className={`mx-auto flex items-center justify-center border border-dashed border-border text-xs text-muted-foreground ${dimensions}`}
        role="complementary"
        aria-label="Advertisement"
      >
        Ad space
      </div>
      {/* <!-- Google AdSense Banner --> */}
    </>
  )
}
