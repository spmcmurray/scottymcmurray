export function StrokeIcon({ name }: { name: 'shield' | 'phone' | 'spark' | 'book' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {name === 'shield' && (
        <>
          <path d="M12 21.5s7.5-3.6 7.5-9.5V5.6L12 3 4.5 5.6V12c0 5.9 7.5 9.5 7.5 9.5z" />
          <path d="M9 12l2 2 4-4" />
        </>
      )}
      {name === 'phone' && (
        <>
          <rect x="6.5" y="2.5" width="11" height="19" rx="2.8" />
          <path d="M10.5 18.5h3" />
        </>
      )}
      {name === 'spark' && (
        <>
          <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
          <path d="M18.5 16.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
        </>
      )}
      {name === 'book' && (
        <>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z" />
          <path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20" />
        </>
      )}
    </svg>
  )
}

export function ArrowIcon() {
  return (
    <span className="arr" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="12" height="12">
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
    </span>
  )
}
