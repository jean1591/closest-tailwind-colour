export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="mx-auto min-h-screen max-w-7xl px-4">{children}</div>
}
