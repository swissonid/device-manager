 export type Device = {
    id:string,
    model: string,
    manuFracture: string,
    serialNumber: string,
}

 export const dummyData: Array<Device> = [
     {
         id: "1",
         model: "Model 1",
         manuFracture: "Samsung",
         serialNumber: "123",
     },
     {
         id: "2",
         model: "Model 2",
         manuFracture: "Samsung",
         serialNumber: "223",
     },
     {
         id: "3",
         model: "Model 3",
         manuFracture: "Samsung",
         serialNumber: "323",
     }
 ];