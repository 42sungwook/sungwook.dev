function TitleText({ children }: Readonly<{ children: React.ReactNode }>) {
  return <h1 className="text-2xl font-bold tracking-wider">{children}</h1>
}

export { TitleText }
