export const useRouter = () => ({ push() {}, replace() {} });
export const usePathname = () => "/azi";
export const useSearchParams = () => new URLSearchParams("mod=azi");
export const notFound = () => { throw new Error("notFound"); };
