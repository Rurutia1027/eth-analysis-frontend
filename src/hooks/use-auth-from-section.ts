import { de } from "date-fns/locale";
import { useLocalStorage } from "./use-local-storage";
export type AuthFromSection = "poap" | "discord" | "empty";

const useAuthFromSection = () =>
  useLocalStorage<AuthFromSection>("auth-from-section", "empty");

export default useAuthFromSection;
