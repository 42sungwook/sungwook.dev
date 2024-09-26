import Link from 'next/link'

function HeaderCategory({ link, label }: { link: string; label: string }) {
  return (
    <div className="flex items-center p-4">
      <Link href={link}>{label}</Link>
    </div>
  )
}

export default HeaderCategory
