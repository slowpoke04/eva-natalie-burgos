export default function TIDrugDeliveryPenPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">

      {/* HEADER */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Smart Drug-Delivery Pen
        </h1>

        <p className="text-muted-foreground max-w-3xl">
          Developed a proof-of-concept smart drug-delivery pen for a
          Texas Instruments-sponsored senior design project. The system
          integrates automated mechanical actuation, NFC cartridge
          authentication, BLE communication, embedded sensing, and
          electronic safety controls within a compact handheld device.
        </p>
      </div>

      {/* HERO IMAGES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="/images/closed final design.png"
          className="rounded-xl border w-full h-full object-cover"
        />
        <img
          src="/images/cross-sectional final design.png"
          className="rounded-xl border w-full h-full object-cover"
        />
      </div>

      {/* SECTIONS */}
      <div className="grid md:grid-cols-2 gap-8">

        <div>
          <h2 className="text-lg font-semibold mb-2">Problem</h2>
          <p className="text-muted-foreground">
            Drug-delivery pens require reliable dose actuation while remaining
            compact, intuitive, and safe for the user. The project focused on
            developing a smart pen architecture capable of automating drug
            delivery while also identifying cartridges and communicating
            device information electronically.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Mechanical Design</h2>
          <p className="text-muted-foreground">
            Led the CAD design and prototyping of the pen enclosure and internal
            mechanical architecture in SolidWorks. The design integrates the
            drug cartridge, actuator, electronics, battery, and supporting
            components within a modular clamshell housing.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Embedded System</h2>
          <p className="text-muted-foreground">
            Integrated Texas Instruments hardware for motor control, NFC
            communication, BLE connectivity, sensing, and battery management.
            The system was designed to authenticate cartridges, communicate
            device status, and support automated dispensing.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Testing</h2>
          <p className="text-muted-foreground">
            Supported mechanical and system-level testing to evaluate dispensing
            behavior, actuation requirements, component integration, and design
            feasibility. Testing informed iterative changes to the mechanical
            architecture and component selection.
          </p>
        </div>

      </div>

      {/* DESIGN ALTERNATIVES */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">
          Mechanical Design Alternatives
        </h2>

        <p className="text-sm text-muted-foreground">
          Multiple actuation concepts were modeled and evaluated before selecting
          the final mechanical architecture. Concepts were compared based on size,
          manufacturability, mechanical complexity, force transmission, and
          integration within the pen enclosure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <img
              src="/images/twist-up.png"
              className="rounded-lg border"
            />
            <p className="text-sm text-muted-foreground">
              Twist-up concept exploring rotational input converted into controlled
              linear cartridge actuation.
            </p>
          </div>

          <div className="space-y-3">
            <img
              src="/images/worm gear rack and pinion.png"
              className="rounded-lg border"
            />
            <p className="text-sm text-muted-foreground">
              Worm-gear and rack-and-pinion concept developed to evaluate compact
              gear reduction and linear force transmission.
            </p>
          </div>
        </div>
      </div>

      {/* FINAL DESIGN */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Final Device Architecture</h2>

        <p className="text-sm text-muted-foreground">
          The final design combines the mechanical actuation system with the
          cartridge, battery, PCB, and supporting electronics within a compact
          enclosure. The cross-sectional view illustrates how the internal
          components are packaged and aligned along the length of the device.
        </p>

        <img
          src="/images/cross-sectional final design.png"
          className="rounded-lg border w-full"
        />
      </div>

    </div>
  );
}