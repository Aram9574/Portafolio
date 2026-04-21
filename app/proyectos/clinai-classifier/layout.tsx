import ReadingProgress from '@/components/ui/ReadingProgress'

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReadingProgress />
      {children}
    </>
  )
}
