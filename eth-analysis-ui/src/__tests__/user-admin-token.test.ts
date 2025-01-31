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

    it("", () => {

    }); 

    it("", () => {

    }); 
}); 