export default function ProstheticHandPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">

      {/* HEADER */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          3D-Printed Prosthetic Hand
        </h1>

        <p className="text-muted-foreground max-w-3xl">
          Designed and fabricated a tendon-driven prosthetic hand to replicate
          natural finger motion using mechanical linkages and 3D-printed components.
          The system translates wrist motion into coordinated finger actuation,
          mimicking human grasp mechanics.
        </p>
      </div>

      {/* HERO IMAGES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="/images/prosthetic_real1.jpeg"
          className="rounded-xl border w-full h-full object-cover"
        />
        <img
          src="/images/prosthetic_real2.jpeg"
          className="rounded-xl border w-full h-full object-cover"
        />
      </div>

      {/* SECTIONS */}
      <div className="grid md:grid-cols-2 gap-8">

        <div>
          <h2 className="text-lg font-semibold mb-2">Problem</h2>
          <p className="text-muted-foreground">
            Prosthetic hands often lack affordability and natural motion replication.
            Many designs fail to effectively mimic human tendon-driven movement
            while remaining lightweight and accessible.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Design</h2>
          <p className="text-muted-foreground">
            Developed a tendon-driven mechanism where finger movement is controlled
            through tension-based actuation. Designed articulated joints and linkages
            in SolidWorks to replicate natural finger flexion and extension.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Build</h2>
          <p className="text-muted-foreground">
            Fabricated using 3D printing with multiple iterations to refine joint
            tolerances, tendon routing, and structural durability. Integrated fishing
            line tendons and mechanical pivots to enable smooth motion.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Impact</h2>
          <p className="text-muted-foreground">
            Demonstrated a functional low-cost prosthetic design that mimics natural
            hand movement. Strengthened skills in CAD, prototyping, and biomechanical
            design.
          </p>
        </div>

      </div>

      {/* CAD SECTION */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">CAD Design</h2>
        <p className="text-sm text-muted-foreground">
          SolidWorks models used to design joint articulation, tendon routing, and
          mechanical structure of the prosthetic hand.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src="/images/prosthetic_cad1.png" className="rounded-lg border" />
          <img src="/images/prosthetic_cad2.png" className="rounded-lg border" />
        </div>
      </div>

    </div>
  );
}