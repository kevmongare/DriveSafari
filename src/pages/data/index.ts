// types/index.ts
export interface DriverFormData {
  personal: {
    fullName: string;
    nationalId: string;
    dateOfBirth: string;
    gender: string;
    photo: File | null;
  };
  contact: {
    generalContact: string;
    whatsappContact: string;
    email: string;
    postalAddress: string;
    emergencyName: string;
    emergencyRelationship: string;
    emergencyPhone: string;
    emergencyEmail: string;
  };
  qualifications: {
    kpsgaNumber: string;
    kpsgaQualification: string;
    traLicense: string;
    driversLicense: string;
    licenseExpiry: string;
    guidingCertificate: string;
    trainingSchool: string;
    englishLevel: string;
    frenchLevel: string;
    spanishLevel: string;
    otherLanguages: string;
    traDocument: File | null;
    guidingDocument: File | null;
  };
  vehicle: {
    licenseClass: string;
    offRoadCert: string;
    vehicleMake: string;
    vehicleModel: string;
    vehiclePlate: string;
    vehicleYear: string;
    employmentHistory: string;
    registrationDate: string;
    lastVerification: string;
    systemUserId: string;
  };
}