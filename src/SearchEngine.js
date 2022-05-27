import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
    const [city, setCity] = useState(null);
    const [notification, setNotification] = useState(null);

    function updateCity(event) {
        setCity(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "b0c8bbe6abc74ddc23b034afa70b96c3";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        axios.get(url).then(showWeather);

        function showWeather(response) {
            let icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
            setNotification( <
                ul >
                <
                li > Temperature: { Math.round(response.data.main.temp) }°
                C < /li>{" "} <
                li > Description: { response.data.weather[0].description } < /li>{" "} <
                li > Humidity: { response.data.main.humidity } % < /li>{" "} <
                li > { " " }
                Wind: { Math.round(response.data.wind.speed) }
                km / h { " " } <
                /li>{" "} <
                li >
                <
                img src = { icon }
                alt = "weather icon" > { " " } <
                /img>{" "} <
                /li>{" "} <
                /ul>
            );
        }
    }

    return ( <
        div >
        <
        form onSubmit = { handleSubmit } >
        <
        input type = "search"
        placeholder = "Enter a city..."
        onChange = { updateCity }
        />{" "} <
        input type = "submit"
        value = "Search" / >
        <
        /form>{" "} <
        p > { notification } < /p>{" "} <
        /div>
    );
}