import MainLayout from "../../layouts/MainLayout";
import useWeather from "../../hooks/useWeather";

export default function Weather() {

    const { weather, loading } = useWeather("Chennai");

    if (loading) {
        return (
            <MainLayout>
                <h1 className="text-3xl font-bold">
                    Loading Weather...
                </h1>
            </MainLayout>
        );
    }

    return (

        <MainLayout>

            <div className="space-y-8">

                <div>

                    <h1 className="text-4xl font-bold">
                        Weather Analytics
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Live weather powered by OpenWeather API
                    </p>

                </div>

                <div className="rounded-3xl bg-[#111827] border border-white/10 p-8">

                    <h2 className="text-3xl font-bold mb-6">

                        {weather.city}

                    </h2>

                    <div className="grid grid-cols-2 gap-6">

                        <div>

                            <p className="text-gray-400">

                                Temperature

                            </p>

                            <h2 className="text-4xl font-bold">

                                {weather.temperature}°C

                            </h2>

                        </div>

                        <div>

                            <p className="text-gray-400">

                                Humidity

                            </p>

                            <h2 className="text-4xl font-bold">

                                {weather.humidity}%

                            </h2>

                        </div>

                        <div>

                            <p className="text-gray-400">

                                Wind Speed

                            </p>

                            <h2 className="text-4xl font-bold">

                                {weather.windSpeed} m/s

                            </h2>

                        </div>

                        <div>

                            <p className="text-gray-400">

                                Condition

                            </p>

                            <h2 className="text-2xl font-bold capitalize">

                                {weather.description}

                            </h2>

                        </div>

                    </div>

                </div>

            </div>

        </MainLayout>

    );

}