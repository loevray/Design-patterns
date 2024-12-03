type Vehicles = "Truck" | "Ship" | "Airplane";

interface Vehicle {
    type: Vehicles;
    drive(): void;
}

class Truck implements Vehicle {
    type:Vehicles = "Truck";
    drive(): void {
        console.log("트럭으로 배송갑니다!");
    }
}

class Ship implements Vehicle {
    type:Vehicles = "Ship";
    drive(): void {
        console.log("배타고 가는중~");
    }
}

class Airplane implements Vehicle {
    type:Vehicles = "Airplane";
    drive(): void {
        console.log("비행기타고 가는중!");
    }
}

//팩토리 함수
function createVehicle(type: Vehicles): Vehicle {
  const vehicleMap: { [key in Vehicles]: new () => Vehicle } = {
      Truck,
      Ship,
      Airplane
  };

  const VehicleClass = vehicleMap[type];
  
  if (!VehicleClass) {
      throw new Error(`Unknown vehicle type: ${type}`);
  }
  
  return new VehicleClass();
}

// 클라이언트 코드
export function deliver(type: Vehicles): void {
    const vehicle = createVehicle(type);
    console.log(`Delivering a ${vehicle.type}...`);
    vehicle.drive();
}

