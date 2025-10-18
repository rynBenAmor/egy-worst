export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-8">
      <div className="container mx-auto text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} The movie explorer
      </div>
    </footer>
  )
}
