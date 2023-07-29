
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-2 px-8">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2023 Techology. All rights reserved.</p>
          <p>
            Created by <span className="font-semibold">Elie309</span>
          </p>
        </div>
        <div className="">
          <a
            href="https://github.com/Elie309"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <img className="object-contain w-12" src="/github-logo.png" />
            
            <p className="font-semibold">Github</p>
          </a>

        </div>
      </div>
    </footer>
  )
}
