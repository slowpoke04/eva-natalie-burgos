export default function TubeHolderPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">

      {/* HEADER */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Sample Container Holder (STERIS)
        </h1>

        <p className="text-muted-foreground max-w-3xl">
          Developed a 3D-printed holder to stabilize sample containers during
          lab testing, improving repeatability, organization, and workflow
          efficiency for the R&D team.
        </p>
      </div>

      {/* HERO IMAGE */}
      <div className="rounded-xl overflow-hidden border bg-white/5 p-2">
        <img
          src="/images/in action.png"
          className="w-full max-h-[500px] object-contain mx-auto"
        />
      </div>

      {/* SECTIONS */}
      <div className="grid md:grid-cols-2 gap-8">

        <div>
          <h2 className="text-lg font-semibold mb-2">Problem</h2>
          <p className="text-muted-foreground">
            Sample containers used during testing lacked a stable and organized
            holding solution, leading to inconsistent positioning and inefficient
            handling during experiments.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Design</h2>
          <p className="text-muted-foreground">
            Designed a modular holder with evenly spaced slots to securely hold
            multiple containers. Focused on accessibility, stability, and ease
            of integration into existing workflows.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Build</h2>
          <p className="text-muted-foreground">
            Iterated through multiple CAD designs and 3D-printed prototypes to
            refine fit, spacing, and structural integrity. Adjustments were made
            based on real-world usage feedback.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Impact</h2>
          <p className="text-muted-foreground">
            Improved testing consistency and organization while reducing setup
            time. Demonstrated rapid prototyping and design iteration in a lab
            environment.
          </p>
        </div>

      </div>

      {/* ===== GALLERY ===== */}
      <div className="space-y-12">

        {/* REAL-WORLD USAGE */}
        <div>
          <h2 className="text-xl font-semibold mb-2">In Use</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Physical implementation of the holder during lab testing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/images/in action.png" className="rounded-lg border" />
            <img src="/images/irl(1).png" className="rounded-lg border" />
            <img src="/images/irl(2).png" className="rounded-lg border" />
            <img src="/images/irl(3).jpeg" className="rounded-lg border" />
            <img src="/images/irl(4).jpeg" className="rounded-lg border" />
          </div>
        </div>

        {/* CAD DESIGN */}
        <div>
          <h2 className="text-xl font-semibold mb-2">CAD Design</h2>
          <p className="text-sm text-muted-foreground mb-4">
            SolidWorks models used to define geometry and optimize spacing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/images/cad1.png" className="rounded-lg border" />
            <img src="/images/cad2.png" className="rounded-lg border" />
            <img src="/images/cad3.png" className="rounded-lg border" />
            <img src="/images/cad4.png" className="rounded-lg border" />
          </div>
        </div>

      </div>

    </div>
  );
}