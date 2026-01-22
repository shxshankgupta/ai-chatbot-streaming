export const metadata = {
  title: 'AI Chatbot - Streaming Demo',
  description: 'Real-time AI chatbot with streaming responses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}