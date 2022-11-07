/**
 * Truck
 * By: Daniel Pawelko
 * Version: 1.0
 * Since:   2022-11-04
 */

import Vehicle from './Vehicle'

class Truck extends Vehicle {
  private licensePlate: string

  constructor(licensePlate: string, color: string, maxSpeed: number) {
    super(color, maxSpeed)
    this.licensePlate = licensePlate
  }

  // status
  status(): void {
    console.log(
      ` → Color: ${super.getColor()}
    → Max Speed: ${super.getMaxSpeed()}
    → Speed: ${super.getSpeed()}
    → LicensePlate: ${this.licensePlate}
  `
    )
  }

  // getter for licensPlate
  getLicensePlate(): string {
    return this.licensePlate
  }

  // setter for licence plate
  setLicensePlate(newLicensePlate: string): void {
    this.licensePlate = newLicensePlate
  }

  // method for airBrake
  airBrake(airPressure: number): void {
    super.setSpeed(super.getSpeed() - airPressure / 2)
    if (super.getSpeed() < 0) {
      super.setSpeed(0)
    }
  }
}

export = Truck
