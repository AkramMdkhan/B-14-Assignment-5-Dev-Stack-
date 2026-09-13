import logoText from './assets/logo-text.png'

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <img src={logoText} alt="Dev Stack" className="h-8 w-auto object-contain" />
            <p className="mt-4 max-w-xs text-sm text-gray-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="mt-4 flex gap-4 text-sm font-semibold text-gray-400">
              <a href="#" className="hover:text-slate-900">GitHub</a>
              <a href="#" className="hover:text-slate-900">Twitter</a>
              <a href="#" className="hover:text-slate-900">LinkedIn</a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold tracking-wide text-slate-950">PRODUCT</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-slate-900">Home</a></li>
              <li><a href="#" className="hover:text-slate-900">Technologies</a></li>
              <li><a href="#" className="hover:text-slate-900">Projects</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-wide text-slate-900">COMPANY</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-slate-900">About</a></li>
              <li><a href="#" className="hover:text-slate-900">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold tracking-wide text-slate-900">LEGAL</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-slate-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 text-sm text-gray-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer