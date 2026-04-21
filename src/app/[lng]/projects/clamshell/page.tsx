export default function ClamshellPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">

      {/* HEADER */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          LED Clamshell Fixture (STERIS)
        </h1>

        <p className="text-muted-foreground max-w-3xl">
          Designed a custom clamshell fixture to improve manufacturing efficiency
          during the curing of tubing-to-connector assemblies used in endoscope systems.
        </p>
      </div>

      {/* HERO */}
      <div className="rounded-xl overflow-hidden border bg-white/5 p-2">
        <img
          src="/images/clamshell closed.jpeg"
          className="w-full max-h-[500px] object-contain mx-auto"
        />
      </div>

      {/* CORE SECTIONS */}
      <div className="grid md:grid-cols-2 gap-8">

        <div>
          <h2 className="text-lg font-semibold mb-2">Problem</h2>
          <p className="text-muted-foreground">
            During LED curing of tubes to connectors, inconsistent alignment
            caused defects, rework, and variability in production. Operators
            relied on manual positioning, leading to inefficiencies on the
            assembly line.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Design</h2>
          <p className="text-muted-foreground">
            Developed a clamshell-style fixture to securely hold components in
            precise alignment during curing. The design ensured repeatable
            positioning while allowing quick loading and unloading for operators.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Build</h2>
          <p className="text-muted-foreground">
            Iterated through multiple prototype versions to refine hinge motion,
            fit tolerance, and ergonomic usability. Designs were 3D printed and
            tested directly in the manufacturing environment.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Impact</h2>
          <p className="text-muted-foreground">
            Improved alignment consistency and reduced operator variability,
            increasing manufacturing efficiency and reducing defects during
            the curing process.
          </p>
        </div>

      </div>

      {/* ===== GALLERY ===== */}
      <div className="space-y-12">

        {/* CAD DESIGN */}
        <div>
          <h2 className="text-xl font-semibold mb-2">CAD Design</h2>
          <p className="text-sm text-muted-foreground mb-4">
            SolidWorks models used to define fixture geometry and alignment features.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/images/clamshell final design cad.png" className="rounded-lg border" />
            <img src="/images/clamshell top.png" className="rounded-lg border" />
            <img src="/images/clamshell top 1.png" className="rounded-lg border" />
          </div>
        </div>

        {/* PROTOTYPE ITERATIONS */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Prototype Iterations</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Multiple versions were developed to refine fit, hinge function,
            and assembly workflow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="/images/clamshell prototype 1.png" className="rounded-lg border" />
            <img src="/images/clamshell prototype 1(2).png" className="rounded-lg border" />
            <img src="/images/clamshell prototype 2.png" className="rounded-lg border" />
            <img src="/images/clamshell prototype 2(1).png" className="rounded-lg border" />
          </div>
        </div>

        {/* FINAL FIXTURE */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Final Fixture</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Final design showing open and closed configurations for operation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/images/clamshell open.jpeg" className="rounded-lg border" />
            <img src="/images/clamshell closed.jpeg" className="rounded-lg border" />
          </div>
        </div>

      </div>

    </div>
  );
}