export default function ElectrospinningPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">

      {/* HEADER */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Electrospinning System (Junior Design)
        </h1>

        <p className="text-muted-foreground max-w-2xl">
          Designed and assembled a custom electrospinning system capable of
          controlling spinneret-to-collector distance and operating axis for
          nanofiber fabrication.
        </p>
      </div>

      {/* HERO (FINAL SYSTEM) */}
      <div className="rounded-xl overflow-hidden border bg-white/5">
  <img
    src="/images/Electrospinning TN.png"
    alt="Electrospinning system final design"
    className="w-full h-auto object-contain"
  />
</div>

      {/* CORE INFO */}
      <div className="grid md:grid-cols-2 gap-8">

  <div>
    <h2 className="text-lg font-semibold mb-2">Problem</h2>
    <p className="text-muted-foreground">
      Electrospinning performance depends heavily on controllable setup parameters,
      particularly the distance between the spinneret and collector plate and the
      orientation of the system during operation. Commercial systems can be costly
      and may not offer the level of configurability needed for research testing.
    </p>
  </div>

  <div>
    <h2 className="text-lg font-semibold mb-2">Design</h2>
    <p className="text-muted-foreground">
      This system was designed to allow controlled manipulation of two key variables:
      spinneret-to-collector distance and device operating axis. Multiple configurations
      were explored to support both vertical and horizontal arrangements while maintaining
      structural stability and experimental flexibility.
    </p>
  </div>

  <div>
    <h2 className="text-lg font-semibold mb-2">Build</h2>
    <p className="text-muted-foreground">
      Several prototype iterations were developed to refine frame geometry, motion control,
      and adjustability. These iterations helped improve alignment, stability, and the
      reliability of parameter changes during testing.
    </p>
  </div>

  <div>
    <h2 className="text-lg font-semibold mb-2">Impact</h2>
    <p className="text-muted-foreground">
      The final design demonstrates a flexible electrospinning platform capable of
      adjusting critical setup parameters for controlled experimentation. This project
      highlights system design, prototyping, and the integration of mechanical design
      with biomedical engineering applications.
    </p>
  </div>

</div>

      {/* ===== EARLY PROTOTYPE MOTION (VIDEOS FIRST 🔥) */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Early Prototype Motion</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Initial testing focused on validating motion control and actuator behavior.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <video controls className="w-full h-64 object-cover rounded-lg border">
            <source src="/videos/Linear Actuator Half(FINAL).mp4" type="video/mp4" />
          </video>

          <video controls className="w-full h-64 object-cover rounded-lg border">
            <source src="/videos/Most updated axis.mp4" type="video/mp4" />
          </video>

        </div>
      </div>

      {/* ===== EARLY PROTOTYPES (GREEN PLATFORM + FLIP DESIGN) */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Early Prototypes</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Early concepts explored different configurations, including a rotating platform
          and a collector plate (green surface) to test material deposition behavior.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src="/images/electrospin spin(1).png" className="rounded-lg border" />
          <img src="/images/electrospin spin(2).png" className="rounded-lg border" />
        </div>
      </div>

      {/* ===== CAD DEVELOPMENT */}
      <div>
        <h2 className="text-xl font-semibold mb-2">CAD Development</h2>
        <p className="text-sm text-muted-foreground mb-4">
          SolidWorks models used to refine system layout and explore vertical
          and horizontal motion configurations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src="/images/electrospin vert(1).png" className="rounded-lg border" />
          <img src="/images/electrospin vert(2).png" className="rounded-lg border" />
          <img src="/images/electrospin horiz(2).png" className="rounded-lg border" />
          <img src="/images/electrospin horz(1).png" className="rounded-lg border" />
        </div>
      </div>

      {/* ===== FINAL SYSTEM */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Final System</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Final configuration integrating adjustable distance control and axis
          manipulation for improved experimental flexibility.
        </p>

        <div className="rounded-lg overflow-hidden border">
          <img src="/images/Electrospinning TN.png" className="w-full object-cover" />
        </div>
      </div>

    </div>
  );
}