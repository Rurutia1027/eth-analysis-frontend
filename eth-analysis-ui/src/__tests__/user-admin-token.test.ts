import { renderHook } from '@testing-library/react'; 
import { useAdminToken } from '../hooks/use-admin-token';
import { Writable } from 'stream';

describe("useAdminToken", () => {
    it("should return admin-token from URL", () => {
        Object.defineProperty(window, "location", {
            value: {
                search: "?admin-token=secret123",
            },
            writable: true,
        });

        const { result } = renderHook(() => useAdminToken()); 
        expect(result.current).toBe("secret123")
    }); 

    it("should return undefined if admin-token is missing in searching url", () => {
        Object.defineProperty(window, "location", {
            value: {
                search: "", 
            },
            writable:true, 
        }); 
        const { result } = renderHook(() => useAdminToken()); 
        expect(result.current).toBeUndefined(); 
    }); 

    it("should return undefined if admin-token is empty", () => {
        Object.defineProperty(window, "location", {
            value: {
                search: "?admin-token="
            },
            writable: true,
        }); 

        const { result } = renderHook(() => useAdminToken()); 

        expect(result.current).toBeUndefined(); 
    }); 
}); 