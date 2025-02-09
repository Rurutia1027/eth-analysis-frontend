import { useAdminToken } from "../../hooks/use-admin-token";

export const AdminTokenDisplayUI = () => {
    const adminToken = useAdminToken(); 

    return (
        <div>
            <h2>Admin Token:</h2>
            <p>{adminToken || "No token found"}</p>
        </div>
    )
}; 