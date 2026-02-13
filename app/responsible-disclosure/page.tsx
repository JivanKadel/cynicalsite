export default function ResponsibleDisclosurePage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Responsible Disclosure
        </h1>

        <section className="space-y-6 leading-relaxed">
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-4">
              Why Responsible Disclosure?
            </h2>
            <div className="flex flex-col gap-2 text-foreground/80">
              <p className="text-base sm:text-lg">
                At Cynical Technology, we consider the protection of our clients
                and customers’ data a significant responsibility. We, therefore,
                take the security of our clients extremely seriously, and we
                genuinely appreciate security researchers, ethical hackers, and
                others who help in keeping our systems secure.
              </p>
              <p className="text-base sm:text-lg">
                But no matter how much effort we put into system security, there
                can still be vulnerabilities present. If you discover a
                vulnerability or security problem, we would like to know about
                it so we can take steps to address it as quickly as possible.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-4">
              Reporting Vulnerabilities
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-foreground/80">
              <li>
                If you find any vulnerability at our{" "}
                <strong>client’s system</strong>, please send your report to{" "}
                <a
                  href="mailto:info@cynicaltechnology.com"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  info@cynicaltechnology.com
                </a>
                .
              </li>
              <li>
                If you ever find any vulnerability at our{" "}
                <strong>own site</strong>, please report it via{" "}
                <a
                  href="https://bugv.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Bugv
                </a>
                .
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
