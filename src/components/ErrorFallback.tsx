export function ErrorFallback({ resetError, error }: { resetError: () => void, error: Error }) {
    return (
      <p>
        Oops, something went wrong! <strong>{String(error)}</strong> <button onClick={resetError}>Retry</button>
      </p>
    )
  }