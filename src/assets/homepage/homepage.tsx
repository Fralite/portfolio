export default function Homepage() {
  return ( 
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 flex flex-col items-center justify-center p-6">
      
      <div className="w-full max-w-2xl bg-white/70 backdrop-blur-md border border-purple-200 rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-purple-950 tracking-tight"> Test site 101 </h1>
        
        <p className="mt-4 text-purple-900/80 font-medium leading-relaxed">
            Welcome to Test site 101
        </p>
        
        <div className="mt-6 flex gap-4">
            <button className="px-5 py-2.5 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors shadow-sm active:scale-98">
                Link 1
            </button>
        </div>
      </div>

    </main>
  )
}