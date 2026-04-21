import ReadingProgress from '@/components/ui/ReadingProgress'

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReadingProgress />
      {children}
    </>
  )
}
