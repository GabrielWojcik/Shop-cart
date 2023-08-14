import { useNavigate } from "react-router-dom";

export default function useRouterNavBar() {
    const router = useNavigate()
    return router('/sacola')
}