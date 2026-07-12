import { useEffect, useState } from "react";

import { getDashboard } from "../services/dashboardService";

export default function useDashboard() {

    const [dashboard, setDashboard] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getDashboard()

            .then((data) => {

                setDashboard(data);

                setLoading(false);

            })

            .catch(console.error);

    }, []);

    return {

        dashboard,

        loading

    };

}