import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type PlanType = "Basic Plan" | "Growth Plan" | "Pro Plan";

interface Role {
  icon: string;
  title: string;
  desc: string;
  dashboard: string;
}

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  membershipId: string;
  gstPan: string;
  paymentMethod: "UPI" | "Netbanking" | "Card";
  termsAgreed: boolean;
}

interface RegisterState {
  selectedPlan: PlanType;
  selectedRole: Role | null;
  formData: FormData;
  currentStep: "plan" | "roles" | "membership";
  hasMembership: boolean | null;
  isRegistered: boolean;
}

const initialState: RegisterState = {
  selectedPlan: "Basic Plan",
  selectedRole: null,
  formData: {
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    membershipId: "",
    gstPan: "",
    paymentMethod: "UPI",
    termsAgreed: false,
  },
  currentStep: "plan",
  hasMembership: null,
  isRegistered: false,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setSelectedPlan(state, action: PayloadAction<PlanType>) {
      state.selectedPlan = action.payload;
    },
    setSelectedRole(state, action: PayloadAction<Role | null>) {
      state.selectedRole = action.payload;
    },
    setFormData(state, action: PayloadAction<Partial<FormData>>) {
      state.formData = { ...state.formData, ...action.payload };
    },
    setCurrentStep(
      state,
      action: PayloadAction<"plan" | "roles" | "membership">,
    ) {
      state.currentStep = action.payload;
    },
    setHasMembership(state, action: PayloadAction<boolean | null>) {
      state.hasMembership = action.payload;
    },
    setRegistrationComplete(state) {
      state.isRegistered = true;
    },
    resetRegistration: () => initialState,
  },
});

export const {
  setSelectedPlan,
  setSelectedRole,
  setFormData,
  setCurrentStep,
  setHasMembership,
  setRegistrationComplete,
  resetRegistration,
} = registerSlice.actions;

export default registerSlice.reducer;
