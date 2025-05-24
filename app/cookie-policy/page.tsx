export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-neutral-950 pt-24">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gold-500 mb-2">Cookie Policy</h1>
          <p className="text-neutral-400 text-lg">Ultimo aggiornamento: 2024</p>
        </header>
        <div className="bg-neutral-900 rounded-xl shadow-lg p-6 border border-gold-500/30 text-neutral-200 space-y-6">
          <p>Questo sito utilizza cookie tecnici e, previo consenso, cookie di terze parti per migliorare l'esperienza di navigazione.</p>
          <h2 className="text-xl font-semibold text-gold-500">1. Cosa sono i cookie?</h2>
          <p>I cookie sono piccoli file di testo che i siti visitati inviano al browser dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.</p>
          <h2 className="text-xl font-semibold text-gold-500">2. Tipologie di cookie utilizzati</h2>
          <ul className="list-disc pl-6">
            <li>Cookie tecnici (necessari al funzionamento del sito)</li>
            <li>Cookie di analisi (es. Google Analytics, anonimizzati)</li>
            <li>Cookie di terze parti (es. social, mappe, solo previo consenso)</li>
          </ul>
          <h2 className="text-xl font-semibold text-gold-500">3. Gestione dei cookie</h2>
          <p>Puoi gestire le preferenze sui cookie tramite le impostazioni del browser o tramite il banner di consenso (se presente).</p>
          <h2 className="text-xl font-semibold text-gold-500">4. Modifiche</h2>
          <p>Questa Cookie Policy può essere aggiornata. Le modifiche saranno pubblicate su questa pagina.</p>
        </div>
      </div>
    </main>
  )
} 